# HTTP 301 Permanent Redirect

If content does not exist as a route or physical media on the server, the
Express application which provides the MinnowBoard website will return the
main index.html; this is to support being a single page web site application.

There are some pages, however, that are URLs which have moved to new locations.

For those, there is a file named "redirects.json" that contains a list of
paths and pages to redirect to. The format is:

```json
{
  "/MinnowBoard_Turbot": "/",
  "/Where_to_buy": "/get-a-board",
  "/About_Us to About": "/about",
  "/Get_Involved to Community": "/community"
}
```

The path to match against should be the absolute path, and should **not**
include the domain name. It is not case sensitive.

Make sure you adhere to the JSON syntax. You can use the [online JSON linter](http://jsonlint.com/)
to verify the JSON is valid; if it isn't, no redirects will be supported.
