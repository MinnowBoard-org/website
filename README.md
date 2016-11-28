MinnowBoard.org website
Copyright (C) 2011-2016 MinnowBoard.org Foundation
---

The MinnowBoard.org website is a Polymer web application hosted using
Express in a NodeJS application.

The NodeJS application relies on a forwarding proxy for performing
secure https:// communication. A configuration for `nginx` is documented
below.


## /help -- Where do the "Get Help" submissions go?

In the NodeJS application, the /help functionality is implemented in 
`routes/help.js`.

In addition to having an email sent whenever a user submits a help request
via /help, the messages are written to the messages.log file.


# Overview

The website runs on two servers:

## Staging: stg.minnowboard.org  

The staging server, stg.minnowboard.org is typically running the `master`
version of the GIT project hosted on https://github.com/minnowboard-org/website.

It is configured to automatically pull down the latest code any time there is
an update to the GIT master branch.


## Production: minnowboard.org

The production server, minnowboard.org, is manually updated by pulling from the
`production` branch. When a version of the staging server is ready to be moved
to production, it should be pushed to the production branch:

```bash
git push origin master:production
```


# Installation

The following assumes you are using nginx as a webserver proxy

```bash
git clone git@github.com/minnowboard-org/website minnow
cd minnow
bower install
npm install
```

NOTE: If you don't have bower (or node) installed, you can run the following:
```bash
sudo apt install npm nodejs nodejs-legacy
sudo npm install -g bower
```

That should install everything you need to run the site from a webserver.

To launch the service, use npm start:

```bash
npm start
```

The above will launch the express.js application, which will open port
8080 for inbound HTTP connections.

If you are using nginx as a proxy (and https) server, you need to add a
location mapping from the root host directory to the application:

```nginx
# At the top level
  upstream minnow {
    server 127.0.0.1:8080;
  }

# Within a server {} block
  location / {
    proxy_pass http://minnow;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
  }
```

# Updating stg.minnowboard.org

There is a webhook configured for the minnowboard-org/website.git GitHub
project that triggers a the site to automatically update from GitHub.


# Editing site markdown content

When deployed to the live server, edit links ("internal mode: edit") are
disabled by default. To simplify editing of the site content, you can enable
edit mode and make those links visible by affixing the "edit=on" query
parameter to the site URL. For example:

    https://minnowboard.org/?edit=on

This will populate the page with the href links to the specific content pages
managed in the GIT scm.


# Coding Style Guidelines

JSBeautify is used for the HTML, CSS, and Javascript files created for this
project. For external projects pulled in as dependencies, no style linting
is performed.

JSBeautify is configured to use 2-space tabs and to put a space between an
anonymous function and the parenthesis. In general, the Google Javascript
style guide[1] should be followed.

1. https://google.github.io/styleguide/javascriptguide.xml


# Markdown language

The markdown content is interpreted on the client through the markdown-it javascript
parser.  While it supports the commonmark markdown language, it includes some
extensions as documented at https://markdown-it.github.io/

Embedded html tags are not enabled.
