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

Running `polymer build` will create a `build` directory with a version
of the website with all HTML and CSS dependencies in a single file.

At this point, there are two manual changes that must be made:

1. Uncomment the <base href="/"> line in build/bundled/index.html
2. Create the file build/bundled/shared-bundle.html

The first is needed because if we provide `<base href="/">` in the
index.html, polymer build will be unable to find the files it needs
to parse.

The second is needed due to polymer build's app-shell logic, which
does not work well if you aren't using an app-shell. You can perform
both of the above via:

```bash
touch build/bundled/shared-bundle.html
sed -i -e "s,<script>'base href=\"/\"';</script>,<base href=\"/\">,g" \
  build/bundled/index.html
```

To host the website out of the `build/bundled/` directory, provide the
`BASE` environment variable to the `npm start` command:

```bash
BASE=build/bundled/ npm start &
xdg-open http://localhost:8080
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

The website runs on two servers, using Webhooks for continuous integration and
deployment.

**NOTE**: To ensure only trusted updates are received from GitHub, Webhooks must
be configured with a Secret. The Secret is used to create a payload signature,
which is then sent in the X-Hub-Signature header from GitHub. `routes/git-sync.js`
takes the GITHUB_SECRET from the environment and uses that as the signature.


## Staging: stg.minnowboard.org  

The staging server, stg.minnowboard.org is typically running the `master`
version of the GIT project hosted on https://github.com/minnowboard-org/website.

It is configured to automatically pull down the latest code any time there is
an update to the GIT master branch via a Webhook configured on the GitHub project.

The Webhook invokes the `sync` script which performs the `polymer build`, performs
the two manual fixups described previously, as well as npm and bower updates.
Because `polymer build` can take a long time to complete, the GitHub webhook
may timeout, which means the reporting console on the server will indicate
webhook failures. Check the update.log to see if the update completed.


## Production: minnowboard.org

The production server, minnowboard.org, is manually updated by merging from
`master` into the `production` branch.

When a version of the staging server is ready to be moved to production, it
can be moved to `production` using the GitHub web front-end. The server will
then automatically upgrade via the same Webhook infrastructure that
stg.minnowboard.org uses.


# Developer Installation

For instructions for developing using Linux, see [INSTALL-LINUX](INSTALL-LINUX.md).

For instructions for developing using Windows, see [INSTALL-WINDOWS](INSTALL-WINDOWS.md).


# Updating stg.minnowboard.org

There is a webhook configured for the minnowboard-org/website.git GitHub
project that triggers a the site to automatically update from GitHub.


# Editing site markdown content

When deployed to the live server, edit links ("View content page on GitHub") are
disabled by default. To simplify editing of the site content, you can enable
edit mode and make those links visible by affixing the "edit=on" query
parameter to the site URL. For example:

    https://minnowboard.org/?edit=on

This will populate the page with the href links to the specific content pages
managed on GitHub.


# Coding Style Guidelines

JSBeautify is used for the HTML, CSS, and Javascript files created for this
project. For external projects pulled in as dependencies, no style linting
is performed.

JSBeautify is configured to use 2-space tabs and to put a space between an
anonymous function and the parenthesis. In general, the Google Javascript
style guide[1] should be followed.

1. https://google.github.io/styleguide/javascriptguide.xml

# Meta-Tag Injection

Modify the file `meta.json` to provide a list of patterns and corresponding
meta-tags to inject into the single-page-app returned with the URL.

The first pattern matched is the first set of tags returned.
To test a pattern, use the [Express Route Tester](http://forbeslindesay.github.io/express-route-tester/).

# Markdown language

The markdown content is interpreted on the client through the markdown-it
javascript parser.  While it supports the commonmark markdown language, it
includes some extensions as documented at https://markdown-it.github.io/

Embedded html tags are not enabled.


# Building the production code

Polymer Build is used to create the "build" version of the site that is hosted
on minnowboard.org. Prior to pushing to staging, you need to run the following:

```bash
poymer build index.html
git commit -s -a -m 'Polymer Build regeneration'
```


# Managing server instance with pm2

You can use the pm2 process manager to manage the website instance.

Install PM2 if you don't have it already:
```bash
sudo npm install -g pm2
```

Edit `pm2.json` so that `cwd` matches the directory you will run the server
from. For example, if you cloned it into /var/repos/minnowboard.org, change
cwd to `"/var/repos/minnowboard.org"`:

```text
  "cwd": "/var/respo/minnowboard.org"
```

If you want to put log files somewhere other than /var/log/www, change
the following entries as well:

```text
  "error_file": "/var/log/www/minnowboard.org.err",
  "out_file": "/var/log/www/minnowboard.org.log",
```

**NOTE**: The user you run the application as needs to have write 
permission to `/var/log/www`:

```text
sudo mkdir -p /var/log/www
sudo chown $(whoami): /var/log/www
```
