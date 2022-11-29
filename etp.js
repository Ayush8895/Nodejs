var express = require('express');
const bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.urlencoded({extended:true}))

// app.add((req,res,next)=>{
//     console.log("ADD");
//     next();
// });

// app.sub((req,res,next)=>{
//     console.log("SUB");
//     next();
// });

const addMid = (req,res,next)=>{
    const n1= Number(req.body.num1)
    const n2= Number(req.body.num2)
    const add= n1+n2
    res.send('the value is'+ add)
next()}
const subMid = (req,res,next)=>{
    const n1= Number(req.body.num1)
    const n2= Number(req.body.num2)
    const sub= n1-n2
    res.send('the value is'+ sub)
next()}



app.get('', function(req, res) {
    res.sendFile( __dirname + "/" + "add.html" ); 
 });
 app.get('/sub', function(req, res) {
    res.sendFile( __dirname + "/" + "add.html" ); 
 });



app.post('/' , addMid )
app.post('/' , subMid )


 app.listen(2000, function() {
    console.log('listening on localhost:2000');
 });