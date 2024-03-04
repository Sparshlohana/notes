const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const urlData = url.parse(req.url, true);
    const fruitsHtml = fs.readFileSync(`${__dirname}/fruits.html`, 'utf-8');
    const fruitsData = fs.readFileSync(`${__dirname}/fruits.json`, 'utf-8');
    const fruits = JSON.parse(fruitsData);

    const fruitsArr = fruits.map((fruit, index) => {
        let fruitsOutput = fruitsHtml.replace("{{%TITLE%}}", fruit.name);
        fruitsOutput = fruitsOutput.replace("{{%COLOR%}}", fruit.color);
        fruitsOutput = fruitsOutput.replace("{{%TASTE%}}", fruit.taste);
        fruitsOutput = fruitsOutput.replace("{{%ID%}}", fruit.id);
        return fruitsOutput;
    });

    const { query, pathname } = urlData;

    if (pathname === "/fruits") {
        const fruitsWithColor = fruits.filter(item => {
            return item.color === query.color;
        });
        if (query.color) {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            fruitsWithColor.forEach((fruit, index) => {
                res.write(fruitsArr[fruit.id - 1]);
            });
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(fruitsArr.join(""));
        }
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html'
        });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});