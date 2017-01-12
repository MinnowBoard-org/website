MinnowBoard.org website
Copyright (C) 2011-2016 MinnowBoard.org Foundation
---

The MinnowBoard.org website is a Polymer web application hosted using
Express in a NodeJS application.

The NodeJS application relies on a forwarding proxy for performing
secure https:// communication. A configuration for `nginx` is documented
below.


## Quick init: Assumes prerequisites already installed

### Prerequisites

The website uses NodeJS, npm, and bower:

```bash
npm install -g bower
```

### Cloning and building

```bash
git clone git@github.com:minnowboard-ord/website.git minnow
cd minnow
npm install
bower install
```

### Load the website:

```bash
npm start &
xdg-open http://localhost:8080/
```

### Optimizing the website
Bower projects can introduce a large number of dependent web projects,
all of which need to be fetched when the website loads. The Polymer 
project has a utility to vulanize and optimize a website into a reduced
set of resources.

To build the optimized version of the site, you need polymer-cli.

Unfortunately, polymer-cli has problems being installed behind a 
proxy due to a dependency on test-fixture, so if you use a proxy, you
might not be able to install the polymer-cli project:

```bash
npm install -g polymer-cli
polymer build index.html
```

Running `polymer build` will create a `build` directory. To host the
website out of that directory, provide the `BASE` environment
variable to the `npm start` command:

```bash
BASE=build/bundled/ npm start &
xdg-open http://localhost:8080/
```

## Where do the "Get Help" submissions go?
If you navigate to the /help page of the website, it provides a web
form that allows users to submit a question directly to the MinnowBoard
support team.

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

The production server, minnowboard.org, is manually updated by merging from 
`master` into the `production` branch.

When a version of the staging server is ready to be moved to production, it
can be moved to `production` using the GitHub web front-end.


# Developer Installation: Linux

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


# Building the production code

Polymer Build is used to create the "build" version of the site that is hosted
on minnowboard.org. Prior to pushing to staging, you need to run the following:

```bash
poymer build index.html
git commit -s -a -m 'Polymer Build regeneration'
```
