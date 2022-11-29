var express = require('express');
var app = express();
app.get('/', function(req,res){
    res.download('test.txt', function(err){
        if(err){res.send("NO such file found");}
        else
        { 
            res.send("NFile downloades successfully");
            console.log("File downloades successfully");
        }
    });
});
app.listen(2000);