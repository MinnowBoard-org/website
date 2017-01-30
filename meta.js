/*
 * meta-tag injector
 *
 * Theory of operation:
 * Given a JSON(+comments) file describing a set of route patterns and meta-tags,
 * scan the inbound URI to see if it matches a route.
 * If a match is found, return the set of meta-tags.
 *
 * For example:

$ cat meta.json
[ {
  "pattern": "/help",
  "meta-tags": [
      "name='description' content='Interactively explore the MinnowBoard Turbot''",
      "property='og:title' content='MinnowBoard'"
  ]
} ]

 * The following:
 *
 * var tags = require('meta').match("/help/path/parts");
 * console.log(tags.length);
 *
 * will output:

2

 */

const fs = require('fs'),
  pathToRegexp = require('path-to-regexp');

const metaPatterns = JSON.parse(fs.readFileSync('meta.json', 'utf8'));

const debug = false;

/* Pre-compile all regex patterns */
metaPatterns.forEach(function(entry) {
  entry.pattern = pathToRegexp(entry.pattern);
});

module.exports = {
  match: function(route) {
    for (var i = 0; i < metaPatterns.length; i++) {
      if (!metaPatterns[i].pattern.exec(route)) {
        if (debug) console.log("No match for pattern " + i + ": " + metaPatterns[i].pattern + " against " + route);
        continue;
      }
      if (debug) console.log("Match pattern " + i + ": " + metaPatterns[i].pattern + " against " + route);
      return "<meta-tag "
        + metaPatterns[i]['meta-tags'].join("/>\n<meta-tag ")
        + "/>\n";
    }
    return "";
  }
};
