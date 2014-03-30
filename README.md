[![Build Status](https://travis-ci.org/mxfli/node-cookies.txt.png)](https://travis-ci.org/mxfli/node-cookies.txt)

#README
 This is a _wget cookies.txt_ formart parser for nodejs.

  Convert wget cookies.txt format file into JSON boject.

##Install
```npm install cookies.txt```

##Usage
```
var cookie = require('cookies.txt');
cookie.parse('your cookies.txt file path here.', function(jsonCookieObj){
  //your codes here 
  //...
});
```
##License
MIT
