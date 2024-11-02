const fs = require('fs');
const http = require('http');

// node js server creation
http.createServer((req, res) => {
    // fs.readFile('index.html', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
        return res.end();
    // })

}).listen(8080);

console.log('hello world');
// this is how a nodejs file works under the hood
