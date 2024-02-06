const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === "/") {
        res.writeHead(200);
        res.end('<h1>Home Page</h1>', {
            'content-type': 'text/html',
            'my-custom-header': 'I am a custom header'
        });
    }
    else if (url === "/about") {
        res.writeHead(200, {
            'content-type': 'text/html',
            'my-custom-header': 'I am a custom header'
        });
        res.end('<h1>About page</h1>');
    }
    else {
        res.writeHead(404, {
            'content-type': 'text/html'
        });
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(8000, () => console.log('Server is running on port 8000'));