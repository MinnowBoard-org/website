/**
 * * Copyright (c) 2016, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 */
"use strict";

const express = require('express');
const fs = require('fs');
let router = express.Router();

/* GET landing page. */
router.get('/', (req, res, next) => {
  res.send(fs.readFileSync('./index.html', 'utf8'));
});

module.exports = router;
