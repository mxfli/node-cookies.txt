var ctp = require('../index.js');
var cookieFile = __dirname + '/cookies.txt';

ctp.parse(cookieFile, function (result) {

  console.log('Cookie parse result:', result);

  console.log('get Cookie String:', ctp.getCookieString());
});
