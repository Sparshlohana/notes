// This is the node application that we have created in the previous lectures.
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Hello from the server!');
//     console.log("Request received!");
// });

// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });

// We have already studied that when we enter the url in the browser and hit enter, the browser sends a request to the server and the server sends a response back to the browser and we will see the response on the screen.

// Lets go in the browser and type the url: localhost:8000 and hit enter.
// Lets go to the network tab and refresh the page.
// We can see that there is something known as localhost with status 200 OK.
// This is the request that we have sent to the server and the server has sent back a response with status 200 OK.
// If we click on the localhost, we can see the details of the request and the response.
// For our url, we can see 3 things:
// General
// Response Headers
// Request Headers

// In the general section, we can see the request url: the URL that we sent the request to.
// We can see the request method: GET: because we are getting the data from the server.
// We can see the status code: 200 OK: because the request was successful.
// We can see the remote address which is the IP address of the server.


// With every request, the browser sends some headers to the server.
// Those headers are known as request headers.
// We can see the request headers in the request headers section.
// We can see the request headers like:
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8 means that the browser can accept the data in the form of text/html, application/xhtml+xml, application/xml, image/webp, */*;q=0.8.
// Accept-Encoding: gzip, deflate, br means that the browser can accept the data in the form of gzip, deflate, br.
// Accept-Language: en-US,en;q=0.5 means that the browser can accept the data in the language en-US, en;q=0.5.
// Cache-Control: max-age=0 means that the browser can accept the data with the maximum age of 0. Age means the time for which the data is valid.
// Connection: keep-alive means that the browser can accept the data with the connection keep-alive which means that the connection will be kept alive.
// Host: localhost:8000 means that the browser can accept the data from the host localhost:8000. means that the browser can accept the data from the host localhost:8000.
// Upgrade-Insecure-Requests: 1 means that the browser can accept the data with the upgrade-insecure-requests 1.
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 means that the browser can accept the data with the user-agent Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 which means that the browser is Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36.
// (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36 which means that the browser is Chrome/91.0.4472.124 Safari/537.36. (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36.

// There is no need to remember all these headers. These are for your information only.

// The server also sends some headers to the browser in the response.
// Those headers are known as response headers.
// We can see the response headers in the response headers section.
// We can see the response headers like:
// Content-Encoding: gzip means that the data is encoded in the form of gzip.
// Content-Type: text/plain means that the data is in the form of text/plain.
// Date: Sun, 04 Jul 2021 07:40:20 GMT.
// ETag: W/"12-179a0f0c2c0" means that the data is encoded in the form of W/"12-179a0f0c2c0".
// Keep-Alive: timeout=5 means that the data is encoded in the form of Keep-Alive: timeout=5.
// Connection: keep-alive means that the data is encoded in the form of Connection: keep-alive.
// Transfer-Encoding: chunked means that the data is encoded in the form of Transfer-Encoding: chunked.
// Vary: Accept-Encoding means that the data is encoded in the form of Vary: Accept-Encoding.

// There is no need to remember all these headers too. These are for your information only.

// The response is sent by the server which is sent by us backend developers.
// So let us send an HTML response instead of a plain text response.

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('<h1>Hello from the server!</h1>');
    console.log("Request received!");
});

server.listen(8000, () => {
    console.log("Server is listening on port 8000");
});