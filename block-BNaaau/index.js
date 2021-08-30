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

var server3 = http.createServer(handleReq);
server3.listen(5566);
function handleReq(req, res) {
  console.log(req.method, req.url);
  res.setHeader('Content-Type', 'text/plain');
  res.end(req.method + ' ' + req.url);
}

var server4 = http
  .createServer((res, req) => {
    console.log(req.method);
    if (req.method === 'POST') {
      res.setHeader('Content-Type', 'text/html');
      res.end('<h2>posted for first time</h2>');
    }
  })
  .listen(5050);

const server7 = http.createServer(handleRequest7);
function handleRequest7(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.end(`<h3>Welcome to altcampus</h3>`);
}

server7.listen(8000, () => {
  console.log('Server listening on port 8000');
});

const server8 = http.createServer(handleRequest8);
function handleRequest8(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h3>Welcome to altcampus</h3>`);
}

server8.listen(8001, () => {
  console.log('Server listening on port 8001');
});

const server9 = http.createServer(handleRequest9);
function handleRequest9(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(`{success: true, message: 'Welcome to Nodejs'}`);
}

server9.listen(8888, () => {
  console.log('Server listening on port 8888');
});
