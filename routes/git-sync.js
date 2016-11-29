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
const exec = require('child_process').exec;
const path = require('path');
const root = path.dirname(require.main.filename);

let router = express.Router();

function execSync(res, hook) {
  const cmd = "sudo -u www-update " + path.join(root, 'sync') + " " + [
    hook.repository.full_name,
    hook.ref,
    hook.pusher.name,
    hook.head_commit.id
  ].join(" ");

  console.log("Executing: " + cmd);

  exec(cmd, function (error, stdout, stderr) {
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

router.post('/', function(req, res, next) {
  const event = req.get('X-GitHub-Event');

  if (event != 'push') {
    console.log('WebHook fired for non push event: ' + event);
    res.status(400).send("Invalid event type.");
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
