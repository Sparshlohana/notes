const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let url = req.url;
    let index = fs.readFileSync(`${__dirname}/navbar/index.html`, 'utf-8');


    if (url === "/") {
        res.end(index.replace("{{%CONTENT%}}", "I am Home Page"));
    } else if (url === "/about") {
        res.end(index.replace("{{%CONTENT%}}", "I am about Page"));
    } else if (url === "/contact") {
        res.end(index.replace("{{%CONTENT%}}", "I am contact Page"));
    } else {
        res.end(index.replace("{{%CONTENT%}}", "Error page not found"));
    }
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});
