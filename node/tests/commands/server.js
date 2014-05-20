var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  console.log('Processing request');
  res.end('Hello World\n');
}).listen(1339, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1339/');