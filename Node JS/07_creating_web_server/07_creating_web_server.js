// In this chapter we will be creating our very first web server using Node JS which will be capable of handling requests and sending responses.

// For creating a web server, we will be using the "http" module which is a core module of Node JS.

// For using the http module we will have to require it in our file.
// const http = require('http')

// Now let us create a server using this http module.
// To create a server, we need to do 2 things:
// 1. Create a server
// 2. Start the server

// To create a server we will use the createServer() method of the http module.
// The createServer() method takes a callback function as a parameter.

// The callback function takes 2 arguments:
// 1. Request
// 2. Response

// The request object contains information about the request made by the client.
// The response object contains information about the response which we will send to the client.

// The callback function will be executed whenever a request is made to the server.
// http.createServer((req, res) => {
//     console.log("Request made");
// });
// This createServer() method returns a server object which we will store in a variable.

// const server = http.createServer((req, res) => {
//     console.log("Request made");
// });

// To start the server we will use the listen() method of the server object.
// The listen() method takes 2 arguments:
// 1. Port number
// 2. Callback function

// The callback function will be executed whenever the server starts listening to the port.
// server.listen(8000, () => {
//     console.log("Server started on port 8000");
// });

// The port number is the number of the port on which the server will listen to the requests.

// The port number can be any number between 0 to 65535.
// The port numbers from 0 to 1023 are reserved for system processes.
// The port numbers from 1024 to 49151 are reserved for user processes.
// The port numbers from 49152 to 65535 are reserved for private processes.

// Now lets run the file in the terminal using the command node app.js
// We will get the following output:
// Server started on port 8000

// You can see that the callback function is executed and the server has started listening to the port 8000.
// But you notice that the server is not stopping.
// This is because the server is still listening to the port.
// Which means server is ready to handle requests.

// Now let us make a request to the server.
// For making a request we will use the browser.
// In the browser we will type the following url:
// localhost:8000
// This url is the url of the server.
// The localhost is the domain name of the server.
// The 8000 is the port number of the server.

// When we hit enter, we will get the following output in the terminal we can see that "Request made" is printed. Which means the callback function is executed.

// We already noticed that the server is not stopping, this is because of something called as event loop. We will learn about node js event loop in future chapters.

// But if our app is not exiting, then it is for sure that the server is still listening to the port which means the server is still ready to handle requests and process responses which means as long as the server is running we can handle requests. If the server stops running then we cannot handle requests.

// We can stop the server by pressing ctrl + c in the terminal.

// Now let us send a response to the client.
// Right now when we are making a request to the server, we can see in the browser that nothing is displayed.
// This is because we are not sending any response to the client and are only logging a message in the terminal.
// To send a response, we can use end() method of the response object.
// The end() method takes a string as a parameter.
// This string will be sent as a response to the client.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("Hello from the server");
//     console.log("Request made");
// });

// server.listen(8000, () => {
//     console.log("Server started on port 8000");
// });

// Now when we run the file and go in the browser and make a request to the server, we can see that the string "Hello from the server" is displayed in the browser.

// Now let us take a look at request object.
// Let us log the request object in the console.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req);
//     res.end("Request printed in the console");
// });

// server.listen(8000, () => {
//     console.log("Server started on port 8000");
// });

// We can see that we get big request object.
// But the most important properties of the request object are:
// 1. url
// 2. method
// 3. headers
// 4. body

// The url property contains the url of the request.
// The method property contains the method of the request.
// The headers property contains the headers of the request.
// The body property contains the body of the request.


// Now let us take a look at the response object.
// Let us log the response object in the console.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(res);
//     res.end("Response printed in the console");
// });

// server.listen(8000, () => {
//     console.log("Server started on port 8000");
// });

// We can see that we get big response object.
// But the most important properties of the response object are:
// 1. statusCode
// 2. statusMessage
// 3. headers
// 4. body

// The statusCode property contains the status code of the response.
// The statusMessage property contains the status message of the response.
// The headers property contains the headers of the response.
// The body property contains the body of the response.

// Now if we stop the server and make a request to the server, we will get an error in the browser.
// This is because the server is not running and is not ready to handle requests.


// Task 1:
// Create a web server with 5000 port and send a response "Hello from the server" to the client.
// Solution:
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end("Hello from the server");
// });

// server.listen(5000, () => {
//     console.log("Server started on port 5000");
// });


// Task 2:
// Create a web server with 3000 port and get the url of the request and send it as a response to the client.
// Solution:
// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     res.end(url);
// });

// server.listen(3000, () => {
//     console.log("Server started on port 3000");
// });


// Task 3:
// Create a web server with 4000 port and get the method of the request and send it as a response to the client.
// Solution:
// const http = require('http');

// const server = http.createServer((req, res) => {
//     const method = req.method;
//     res.end(method);
// });

// server.listen(4000, () => {
//     console.log("Server started on port 4000");
// });


// Task 4:
// Send query parameters as a response to the client.
// Solution:
// const http = require('http');

// const server = http.createServer((req, res) => {
//     const query = req.url.split('?')[1];
//     res.end(query);
// });

// server.listen(5000, () => {
//     console.log("Server started on port 5000");
// });


// Task 5:
// Create a web server with 6000 port and send some data as json to the client.
// Solution:

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const data = {
//         name: "John",
//         age: 24
//     };
//     res.end(JSON.stringify(data));
// });

// server.listen(6000, () => {
//     console.log("Server started on port 6000");
// });


// Please note that we do not use res.end() much.
// This is for learning purpose only.