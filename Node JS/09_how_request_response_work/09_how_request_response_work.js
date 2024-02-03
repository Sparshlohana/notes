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
// Host: localhost:8000 means that the browser can accept the data from the host localhost:8000
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

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('<h1>Hello from the server!</h1>');
//     console.log("Request received!");
// });

// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });

// Now when we refresh the page, we can see that the response is in the form of HTML.
// And if we see the response in response tab then we can see the html code. <h1>Hello from the server!</h1>
// You can even preview the response by clicking on the preview tab.

// We can even render an html file instead of sending the html code.
// Lets create an html file named index.html.
// Lets write some html code in the index.html file.
// Lets send the index.html file as a response.
// For sending the index.html file as a response, we need to read the file and then send the file as a response.

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const data = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
//     res.end(data);
//     console.log("Html sent as response!");
// });

// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });

// Now when we refresh the page, we can see that the response is in the form of HTML.
// Notice we have used __dirname, what is __dirname?
// __dirname is a global object in node which gives us the current directory name.
// We can use __dirname to get the current directory name.

// Lets go to the network tab and refresh the page.
// We can see that the response is in the form of HTML.
// And if we see the response in response tab then we can see out whole html code.
// You can even preview the response by clicking on the preview tab.

// You might have noticed that when we go in the network tab and refresh the page, we can see 2 requests, one for the favicon.ico and one for the localhost:8000.
// The favicon.ico is the icon that we see on the tab of the browser.
// The browser first sends a request for the favicon.ico and then sends a request for the localhost:8000.
// This is the behavior of the browser and we cannot control this behavior.

// Now let us create another file named about.html and style.css and store some html and css code in the files respectively.
// Now let us send the about.html file as a response when the user enters the url localhost:8000/

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const data = fs.readFileSync(`${__dirname}/about/about.html`, 'utf-8');
//     res.end(data);
//     console.log("Html sent as response!");
// });

// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });

// When we refresh the page, we can see that the response is in the form of HTML.
// If we see in the network tab, we can see that there are 3 requests, one for the favicon.ico, one for the localhost:8000 and one for the style.css.
// We can see the new style.css file in the network tab.
// Why did the browser send a request for the style.css file?
// Thats because when we are receiving html response and that html is using any other css files or js files or images or any other assets, then the browser will send a request to download those assets and then it will render it on the screen.

// We can see in the network tab that initiator is the about.html file for the style.css file.


// Task 1:
// Create a node server that sends the index.html file as a response when the user enters the url localhost:8000.
// Solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const data = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
//     res.end(data);
//     console.log("Html sent as response!");
// });

// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });


// Task 2:
// Create a node server which sends index.html file which has both style.css and script.js files as a response when the user enters the url localhost:8000 and check in the network tab that the browser sends a request for the style.css and script.js files.
// Solution
// const http = require('http');

// const server = http.createServer((req, res) => {
//     const data = fs.readFileSync(`${__dirname}/index.html`, 'utf-8');
//     res.end(data);
//     console.log("Html sent as response!");
// });

// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });

// Now when we refresh the page, we can see that the response is in the form of HTML.
// If we see in the network tab, we can see that there are 4 requests, one for the favicon.ico, one for the localhost:8000, one for the style.css and one for the script.js.


// Task 3:
// Create a node server and send a login form in response.
// Solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const data = fs.readFileSync(`${__dirname}/login.html`, 'utf-8');
//     res.end(data);
//     console.log("Html sent as response!");
// });

// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });


// Task 4:
// Copy the source code of any website and send it as a response from the server.

// Solution
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('<h1>Source code</h1>');
//     console.log("Request received!");
// });

// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });


// Task 5:
// Create a node server and send the response as a JSON object.
// Solution

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const data = JSON.stringify({
//         name: "John",
//         age: 30,
//         city: "New York"
//     });
//     res.end(data);
//     console.log("JSON sent as response!");
// });

// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });
