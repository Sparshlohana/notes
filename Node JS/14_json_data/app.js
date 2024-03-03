const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const fruits = fs.readFileSync(`${__dirname}/fruits.json`, 'utf-8');
    const fruitsData = JSON.parse(fruits);
    const fruitsFile = fs.readFileSync(`${__dirname}/fruits.html`, 'utf-8');


    let fruitsDataMapped = fruitsData.map((item, index) => {
        let output = fruitsFile.replace('{{%TITLE%}}', item.name);
        output = output.replace('{{%COLOR%}}', item.color);
        output = output.replace('{{%TASTE%}}', item.taste);

        return output;
    });


    if (url === '/fruits') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(fruitsDataMapped.join(''));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
})