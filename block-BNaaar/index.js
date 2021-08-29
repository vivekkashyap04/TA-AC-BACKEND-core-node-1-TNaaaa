var http = require('http');

function handleRequest(req, res) {
  console.log(req.method, req.url);
  if ((req.method === 'GET') & (req.url === '/')) {
    res.setHeader('Content-Type', 'text/plain');
    res.write('Welcome to homepage');
    res.end();
  } else if ((req.method === 'GET') & (req.url === '/about')) {
    res.setHeader('Content-Type', 'text/html');
    res.write('<h2>this is all about NodeJS</h2>');
    res.end();
  } else if ((req.method === 'POST') & (req.url === '/about')) {
    res.setHeader('Content-Type', 'text/json');
    res.end(`{message: this is a post request}`);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
}

var server = http.createServer(handleRequest);
server.listen(5000, () => {
  console.log('server is listening on 5000');
});
