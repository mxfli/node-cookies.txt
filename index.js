//This is a wget cookies.txt parser for nodejs 
//Author:@mxfli
//date::2011年 12月 13日 星期二 13:33:06 UTC

var fs = require('fs');

function parse(file,cb){
    fs.readFile(file, function(err,buffer){ 
        if(err){ throw err;}

        var str=buffer.toString('utf8');
        console.log('Cookies.txt content: \n',str);

        var cookies=str.split('\n');
        //console.log(cookies.length);
        var result = [],cookieDefine=['domain','httponly','path','secure','expires','name','value'];

        cookies.forEach(function(line,index){
            //console.log(index,':',line);    
            if(line.trim().length>0){
                var cookie = {};
                line.split('\t').forEach(function(c,index){
                    if(cookieDefine[index] === 'expires'){c=(new Date(c*1000)).toUTCString()}
                    cookie[cookieDefine[index]]=c;
                });

                result.push(cookie);

                console.log(cookie);
            }

        });
        
        cb(result);
    });
}

module.exports.parse = parse;
