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
const crypto = require('crypto');
const bufferCompare = require('buffer-equal-constant-time');

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
      res.status(500).send("Error executing Webhook.");
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


  var body = [];

  req.on('error', function(err) {
    // This prints the error message and stack trace to `stderr`.
    console.log("Error receiving body from request.");
    res.status(400).send("Data stream error.");
  }).on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body);

    const computedSignature = computeSignature(process.env.GITHUB_SECRET, body);
    if (!bufferCompare(new Buffer(signature), new Buffer(computedSignature))) {
      console.log('Signature does not match.');
      res.status(401).send("Unauthorized: Invalid signature.");
      return;
    }

    var hook;
    try {
      hook = JSON.parse(body.toString());
    } catch (err) {
      console.warn('Error parsing WebHook: ' + JSON.stringify(err));
      res.status(400).send("Invalid hook received.");
      return;
    }

    if (!hook.head_commit || !hook.repository || !hook.ref || !hook.pusher) {
      console.log("Missing fields in webhook.");
      res.status(400).send("Missing hook fields.");
      return;
    }

    execSync(res, JSON.parse(body.toString()));
  });
});

module.exports = router;
