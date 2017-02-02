/**
 * * Copyright (c) 2016, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 */
"use strict";
/**
 * routes related to the user object
 * @type {"express".e}
 */
const express = require('express');
const fs = require('fs');
const child_process = require('child_process');
const path = require('path');
const root = path.dirname(require.main.filename);

let router = express.Router();

function execSync(res, hook) {
  const args = [
    "-u", "www-update",
    "-H", path.join(root, 'sync'),
    /* Arguments to the `sync` script */
    hook.repository.full_name,
    hook.ref,
    hook.pusher.name,
    hook.head_commit.id
  ];

  console.log("Executing: sudo " + args.join(" "));

  child_process.execFile("sudo", args, { cwd: root }, function (error, stdout, stderr) {
    if (error) {
      console.log("Unable to update via GitHub sync.");
      res.status(500).send("Error");
      return;
    }

    res.send("Success");
  });
}

router.get('/', function(req, res, next) {
  try {
    res.send(fs.readFileSync('version.json'));
  } catch (___) {
    res.send({});
  }
});

function computeSignature(key, data) {
  return 'sha1=' + crypto.createHmac('sha1', key).update(data).digest('hex')
}

router.post('/', function(req, res, next) {
  const event = req.get('X-GitHub-Event');

  if (event != 'push') {
    console.log('WebHook fired for non push event: ' + event);
    res.status(400).send("Invalid event type.");
    return;
  }

  /* Verify that the inbound Webhook signature was computed using
   * the GITHUB_SECRET secret
   */
  const signature = req.get('X-Hub-Signature');
  if (!signature) {
    console.log('Signature missing.');
    res.status(401).send("Unauthorized: Missing or invalid signature.");
    return;
  }

  const secret = process.env.GITHUB_SECRET;
  if (!secret) {
    console.log('GITHUB_SECRET not set in environment. GitHub update disabled.');
    res.status(500).send("Server not configured for secure Webhook.");
    return;
  }

  const computedSignature = computeSignature(process.env.GITHUB_SECRET, req.body);
  if (!bufferEq(new Buffer(signature), computedSignature)) {
    console.log('Signature missing.');
    res.status(401).send("Unauthorized: Invalid signature.");
    return;
  }

  try {
    execSync(res, req.body);
  } catch (err) {
    console.warn('Error parsing WebHook: ' + JSON.stringify(err));
    res.status(400).send("Invalid hook received.");
  }
});

module.exports = router;
