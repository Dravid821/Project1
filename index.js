
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(JSON.stringify({Name:'Dravid' , email:'dravid322@gmsil.com'}));
}).listen(8080);