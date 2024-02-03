const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const data = fs.readFileSync(`${__dirname}/about/about.html`, 'utf-8');
    res.end(data);
});

server.listen(8000, () => {
    console.log("Server is listening on port 8000");
});