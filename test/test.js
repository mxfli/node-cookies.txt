"use strict";
var assert = require('assert');
var ctp = require('../index.js');
var cookieFile = __dirname + '/cookies.txt';

ctp.parse(cookieFile, function (result) {

  //console.log('Cookie parse result:', result);
  assert.equal(result.length, 2);
  assert.equal(result[0].name, 'nameofme');

  var cookieString = ctp.getCookieString('http://www.test.com/');
  assert.equal(cookieString.split(';').length, 1);

  console.log('get Cookie String:', cookieString);
  var cookieString2 = ctp.getCookieString('http://www.test1.com/');
  assert.equal(cookieString2, '');

  var cookieString3 = ctp.getCookieString('http://www.test.com/path3/hello.php');
  assert.notEqual(cookieString3,'nameofme=namemevalue');

});
