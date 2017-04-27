# HTTP 301 Permanent Redirect

If content does not exist as a route or physical media on the server, the
Express application which provides the MinnowBoard website will return the
main index.html; this is to support being a single page web site application.

There are some pages, however, that are URLs which have moved to new locations.

For those, there is a file named "redirects.json" that contains a list of
paths and pages to redirect to. The format is:

```json
{
  "/MinnowBoard_Turbot": "https://minnowboard.org/",
  "/Where_to_buy": "https://minnowboard.org/get-a-board",
  "/About_Us": "https://minnowboard.org/about",
  "/Get_Involved": "https://minnowboard.org/community"
}
```

The path to match against should be the absolute path, and **should not** 
include the domain name. The target path **should** include the FQDN so that 
pages loading from wiki.minnowboard.org will redirect to minnowboard.org.

After all paths have been checked, if the target hostname is 
wiki.minnowboard.org, it is redirected to https://minnowboard.org/.

Make sure you adhere to the JSON syntax. You can use the [online JSON 
linter](http://jsonlint.com/) to verify the JSON is valid; if it isn't, no 
redirects will be supported (the redirects file will fail to load, so none 
of them will be active.)
