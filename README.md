# Product Hunt Chrome Extension

## Local Development

3. `grunt watch` doesn't build `dist` and thus won't be reflected in
   extension.
4. `grunt build`
5. Open Chrome Extensions and click 'Load unpacked extension'. Navigate
   to app's folder. This only needs to be done once with developing
   locally.
6. If you already have it loaded, click `Reload` to load the most
   updated `dist` build.
   
## Grunt Tasks

* `grunt watch` - watches folders for changes and builds when they
change.
* `grunt build` - builds `dist` files.
* `grunt` - default. Does everything.

## To Dos

-[x] Open product hunt in new window
-[ ] Only submit root url
-[ ] Oauth user
-[ ] Search existing hunts to see if it already exists

