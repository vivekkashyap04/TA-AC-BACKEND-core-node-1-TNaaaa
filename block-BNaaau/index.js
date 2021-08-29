var http = require('http');
var url = require('url');
var fs = require('fs');

function handleRequest(req, res) {
  if ((req.method === 'GET') & (req.url === '/users')) {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream('./index.html').pipe(res);
  } else if ((req.method === 'POST') & (req.url === '/users')) {
    res.end('posted for the second time');
  }
}

var server = http.createServer(handleRequest);

server.listen(5500, () => {
  console.log('server is listen on 5500');
});


