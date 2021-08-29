var http = require("http");

var server = http.createServer(handleRequest);

function handleRequest(req,res){
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
}

server.listen(4444,() => {
    console.log("server is running on 4444 port")
})