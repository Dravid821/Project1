const express = require('express');
var app=express();
app.get('/Home',function(req,res){
    res.send('welcome to Home Page');
})
app.get('/About',function(req,res){
    res.send('welcome to About Page');
})
app.get('/View',function(req,res){
    res.send('welcome to View Page');
})
app.get('/Contact',function(req,res){
    res.send('welcome to Contact Page');
})
app.listen(8000);