// In previous chapter we learned what routing is...
// We even say that if we type http://localhost:8000/about or http://localhost:8000/contact in the browser, we will still get the same output as we got for http://localhost:8000/ as we have not defined any routes for /about and /contact.
// No matter what URL we type in the browser, we will always get the same output as we have not defined any routes.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Hello from the server');
//     console.log("Request received");
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// Here, whenever the server will get request, it will send the response as "Hello from the server" and also print "Request received" in the console and routes won't matter here cause, we have made the server to respond with the same output for all the URLs as we are only sending one response to the client.
// This is not the behavior we want in our node application. We want to send different responses to different URLs.

// We want if the client types http://localhost:8000/about in the browser, we should get the output as "Hello from the about page" and if the client types http://localhost:8000/contact in the browser, we should get the output as "Hello from the contact page" and if the client types http://localhost:8000/ in the browser, we should get the output as "Hello from the server".

// We already know that we hand handle requests by the request object from the callback function of the createServer method.
// To get the url of the request, we can use the request object's url property.

// Let's see how we can do this:

// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log(req.url);
//     res.end('Hello from the server');
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// Here, in the console, we will get the url we entered in the browser.
// If we enter http://localhost:8000/about in the browser, we will get /about in the console.
// If we enter http://localhost:8000/contact in the browser, we will get /contact in the console.

// We can even send the url in the response to the client.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     res.end(url);
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// Now, we can use this url to send different responses to different URLs.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/') {
//         res.end('Hello from the server');
//     } else if (url === '/about') {
//         res.end('Hello from the about page');
//     } else if (url === '/contact') {
//         res.end('Hello from the contact page');
//     } else {
//         res.end('Page not found');
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// Now we have created routes in our node application.

// But what if user enters a route which has capital letters in it, like http://localhost:8000/About or http://localhost:8000/Contact in the browser?
// We will get the output as "Page not found" as we have not defined any routes for /About and /Contact.
// So in order to handle this, we can convert the url to lowercase and then compare it with the routes.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/') {
//         res.end('Hello from the server');
//     } else if (url.toLowerCase() === '/about') {
//         res.end('Hello from the about page');
//     } else if (url.toLowerCase() === '/contact') {
//         res.end('Hello from the contact page');
//     } else {
//         res.end('Page not found');
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// This is how we can create routes in node js.


// Task 1
// Create a node application which has the following routes:
// 1. / : This route should send the response as "Hello from the server"
// 2. /about : This route should send the response as "Hello from the about page"
// 3. /contact : This route should send the response as "Hello from the contact page"
// Solution
// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/') {
//         res.end('Hello from the server');
//     } else if (url.toLowerCase() === '/about') {
//         res.end('Hello from the about page');
//     } else if (url.toLowerCase() === '/contact') {
//         res.end('Hello from the contact page');
//     } else {
//         res.end('Page not found');
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });


// Task 2
// Create a node application which has the following routes:
// 1. /user/1 : This route should send the response as "Hello from user 1"
// 2. /user/2 : This route should send the response as "Hello from user 2"
// 3. /user/3 : This route should send the response as "Hello from user 3"
// 4. /user: This route should send the response as "Hello from user"
// Solution
// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/user/1') {
//         res.end('Hello from user 1');
//     } else if (url === '/user/2') {
//         res.end('Hello from user 2');
//     } else if (url === '/user/3') {
//         res.end('Hello from user 3');
//     } else if (url === '/user') {
//         res.end('Hello from user');
//     } else {
//         res.end('Page not found');
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });


// Task 3
// Create a node application which sends the creates a file.txt for the route that the user enters in the browser. For example, if the user enters http://localhost:8000/about in the browser, the file should be created as about.txt and the content of the file should be "Hello from the about page", and if the user enters http://localhost:8000/contact in the browser, the file should be created as contact.txt and the content of the file should be "Hello from the contact page", it should be dynamic, if user enters any route, the file should be created with the name of the route that user entered and the content of the file should be "Hello from the route - 'user entered route' page". It should be dynamic
// Solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const file = url.slice(1) + '.txt';
//     fs.writeFile(file, `Hello from the ${url.slice(1)} page`, (err) => {
//         if (err) {
//             res.end('Error occurred');
//         } else {
//             res.end('File created');
//         }
//     });
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });


// Task 4
// Create an infinite number of files which named as the same as user entered route.
// Solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const file = url.slice(1) + '.txt';
//     fs.writeFile(file, `Hello from the ${url.slice(1)} page`, (err) => {
//         if (err) {
//             res.end('Error occurred');
//         } else {
//             res.end('File created');
//         }
//     });
// });


// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });


// Task 5
// Create a node application which sends the creates a file.txt for the route that the user enters and the route should be the content of file.txt.
// Solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const file = 'file.txt';
//     fs.writeFile(file, url, (err) => {
//         if (err) {
//             res.end('Error occurred');
//         } else {
//             res.end('File created');
//         }
//     });
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });