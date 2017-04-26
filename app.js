/**
 * * Copyright (c) 2016, Intel Corporation.
 *
 * This program is licensed under the terms and conditions of the
 * Apache License, version 2.0.  The full text of the Apache License is at
 * http://www.apache.org/licenses/LICENSE-2.0
 */

"use strict";

/**
 * Module sets up the express routing, and associated middleware (cookie and body parser, logger, etc.)
 * @type {"express".e}
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const url = require('url');

const help = require('./routes/help');
const sync = require('./routes/git-sync');
const meta = require('./meta.js');

const app = express();
const docRoot = '/';

let port = parseInt(process.env.PORT) || 8080;
let basePath = process.env.BASE || __dirname;

if (process.argv.length > 2) {
  basePath = process.argv[2];
}
if (process.argv.length > 3) {
  port = parseInt(process.argv[3]);
}

app.locals.basePath = basePath;
app.locals.docRoot = docRoot;

console.log("Serving files to docroot: '" + docRoot + "'");
console.log("Serving files from filepath: '" + basePath + "'");

/* App is behind an nginx proxy which we trust, so use the remote address
 * set in the headers */
app.set('trust proxy', true);

app.use(logger('common'));
app.use(cookieParser());

/* Return 401's for the following path-regexps */
[ 'messages.log', '.git/?*', 'update.log' ].forEach(function(pattern) {
  app.get(docRoot + pattern, function(req, res, next) {
    res.status(401).send("Unauthorized.");
  });
});

app.get(docRoot + "*/shared-bundle.html", function(req, res, next) {
  res.send(fs.readFileSync(path.join(basePath, 'shared-bundle.html'), 'utf8'));
});

app.use(docRoot + 'setup', function(req, res, next) {
  res.redirect(docRoot + 'tutorials/getting-started');
});

app.use(docRoot + 'bower_components', express.static(path.join(basePath, 'bower_components')));
app.get(docRoot, handleIndex);
app.use(docRoot + 'help-request', help);
app.use(docRoot + 'sync', sync);
app.use(docRoot, express.static(path.join(basePath, '.'), {
  redirect: true,
  index: false
}));
/* If a file does not exist in one of the above locations, check to see
 * if it exists in the base root of the project (markdown files, etc. are
 * not migrated into the build/ directory when `polymer build` runs) */
app.use(docRoot, express.static('.', {
  redirect: true,
  index: false
}));


function handleIndex(req, res, next) {
  var metaTags = meta.match(req.url),
    content = fs.readFileSync(path.join(req.app.locals.basePath, 'index.html'), 'utf8');
  if (metaTags) {
    res.send(content.replace(/<script>"meta-tag-injection";<\/script>/, metaTags));
  } else {
    res.send(content);
  }
}

/* List of filename extensions we know are "potential" file extensions for
 * assets we don't want to return "index.html" for */
 const extensions = [
   "html", "js", "css", "eot", "gif", "ico", "jpeg", "jpg", "mp4", "md", "ttf",
   "txt", "woff", "woff2", "yml", "svg" ];

/* Build the extension match RegExp from the list of extensions */
const extensionMatch = new RegExp("^.*?(" + extensions.join('|') + ")$", "i");

/* To handle dynamic routes, we return index.html to every 404.
* However, that introduces site development problems when assets are
* referenced which don't yet exist (due to bugs, or sequence of adds) --
* the server would return HTML content instead of the 404.
*
* So, check to see if the requested path is for an asset with a recognized
* file extension.
*
* If so, 404 because the asset isn't there. otherwise assume it is a
* dynamic client side route and *then* return index.html.
*
* This is also where the application will provide 301 redirects (see issue #60)
* Theory of operation:
* 1. On app load, parse "redirect.json" which is a key/value pairing of "inbound
* page URI" to "redirect target".
* 2. For any resource not directly read from the file system or handled by
*  another route, walk the array of entries.
* 3. If a match is found on the inbound request against the page URI, issue
* a 301 (Moved Permanently) redirect to the new page
*/
let redirects = {};
try {
  redirects = JSON.parse(fs.readFileSync("redirects.json"));
} catch(___) {
  console.error("Unable to read and parse 'redirects.json': " + ___.message);
}

app.use(function(req, res, next) {
  const parts = url.parse(req.url),
    lowerCasePath = parts.pathname.toLowerCase();

  for (var key in redirects) {
    if (key.toLowerCase() == lowerCasePath) {
      console.log("Redirecting: " + key + " => " + redirects[key]);
      return res.redirect(301, redirects[key]);
    }
  }

  /* If the page is targeting wiki.minnowboard.org, redirect it to
   * minnowboard.org/ */
  if (req.hostname == "wiki.minnowboard.org") {
    console.log("Redirecting: " + req.hostname + "/" + req.url + " => http://minnowboard.org");
    return res.redirect(301, "https://minnowboard.org/");
  }

  if (!extensionMatch.exec(parts.pathname)) {
    handleIndex(req, res, next);
    return;
  }

  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});

const http = require('http');

/**
 * Create HTTP server and listen for new connections
 */
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

server.on('error', function(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});

server.on('listening', function() {
  console.log("Listening on " + port);
});
