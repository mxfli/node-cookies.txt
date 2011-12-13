var ctp = require('../index.js');

ctp.parse(__dirname + '/cookies.txt', function(result){
    
    console.log('Cookie parse result:', result);

    console.log('get Cookie String:', ctp.getCookieString());
});


