#!/bin/bash
cat << EOF
This script quickly scans for any package in:

* bower_components
* node_modulesQuickly

Looking for any package that does not have a LICENSE or COPYING
file or that is not provided by Polymer.

Any directory listed below needs to be checked:

EOF

for d in bower_components node_modules; do
	cd $d
	for i in *; do
		[ ! -e $i/license* ] &&
		[ ! -e $i/LICENSE* ] &&
		[ ! -e $i/COPYING* ] &&
		( grep -qriE "polymer" $i || echo $i | while read file; do echo $d/$file; done)
	done
	cd ..
done

cat << EOF

The following reported above were manually checked:

MIT          node_modules/cookie-signature
MIT          node_modules/cron
MID          node_modules/debug
APACHE 2.0   node_modules/forEachAsync       https://github.com/FuturesJS/forEachAsync/blob/master/LICENSE
MIT          node_modules/httpreq
MIT          node_modules/ip
MIT          node_modules/json5
APACHE 2.0   node_modules/sequence           https://github.com/FuturesJS/forEachAsync/blob/master/LICENSE
BSD 3-clause node_modules/source-map
MIT          node_modules/walk

EOF
