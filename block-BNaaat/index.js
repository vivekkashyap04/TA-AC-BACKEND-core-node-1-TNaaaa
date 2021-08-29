var http = require('http');
var fs = require('fs');

function handleRequest(req, res) {
  if ((req.method === 'GET') & (req.url === '/file')) {
    res.setHeader('Content-Type', 'text/html');
    fs.readFile('./node.html', (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  } else if ((req.method === 'GET') & (req.url === '/stream')) {
    fs.createReadStream('./node.html').pipe(res);
  } else {
    res.end('Page Not Found!');
  }
}

var server = http.createServer(handleRequest);

server.listen(5555, () => {
  console.log('server is listen on 5555');
});
