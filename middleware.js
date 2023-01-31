const express = require('express')
const app = express()

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next();
}
app.use(myLogger)

app.get('/About',function(req,res){
    res.send('welcome to About Page');
})
app.get('/View',function(req,res){
    res.send('welcome to View Page');
})
app.get('/Contact',function(req,res){
    res.send('welcome to Contact Page');
})
app.listen(6000);