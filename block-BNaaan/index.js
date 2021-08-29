var http = require('http');

function handleRequest(req, res) {
  console.log(req.method, req.url);
  console.log(req.headers);
  res.end('welcome to the world of server');
}

var server = http.createServer(handleRequest);

server.listen(3000, () => {
  console.log('server is listen on 3000');
});
