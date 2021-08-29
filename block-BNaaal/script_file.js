var http = require('http');

const server = http.createServer(handleRequest);

function handleRequest(req,res){
    res.end('welcome');
}

server.listen(4000,() => {
    console.log('server is listen successfully on 4000');
})