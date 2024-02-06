// When we send a response from our backend application, it's us backend developers that decide what to set status codes and headers for the response.
// Currently, what is happening is:

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Hello, World!');
//     res.end();
// });

// server.listen(8000, () => console.log('Server is running on port 8000'));

// When we send a request to the server, we can see in the network tab, we can see some request headers, but when we open the response headers, we can see that there are only a few headers set by default. It is possible to set our own headers for the response by our backend application.
// If I again hit refresh and see in the network tab, we can see the status code as 200 and which means success, but if we type localhost:8000/unknown, we can see that we already know that we have not created that route, but if we hit enter and see in the network tab, we can still see that the status code is 200, which is not correct. We can still see 200 as status code, because 200 is the default status code and we still have not set any status code for the response. But for this page not found error, the status code should be 404 and not 200.

// Lets see how we can set our own headers and status codes for the response.
// We set the headers by using writeHead method of the response object.
// Please make sure that headers should be set before we send the response body which means we have to send the status before we write res.end().
// The writeHead method takes two arguments, the first argument is the status code and the second argument is an object which contains the headers that we want to set for the response.
// We can set the status code and headers by using the writeHead method and then we can write the response body and then we can end the response.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/') {
//         res.writeHead(200);
//         res.end('<h1>Home Page</h1>');
//     } else if (url === '/about') {
//         res.writeHead(200);
//         res.end('<h1>About Page</h1>');
//     } else {
//         res.writeHead(404);
//         res.end('<h1>Page Not Found</h1>');
//     }
// });

// server.listen(8000, () => console.log('Server is running on port 8000'));

// Here, we have set the status code of the response to 200 if we visit home route and about route we can see at the network tab status as 200, but if we visit any other route, we can see the status code as 404, which is now correct.

// Now lets set some headers for the response.
// Header for the response contains some additional information about the response.
// Example: what type of data is being sent, what type of server is being used, what type of encoding is being used, etc.

// To set the headers for the response, we can pass an object as the second argument to the writeHead method.

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/') {
//         res.writeHead(200, {
//             'content-type': 'text/html'
//         });
//         res.end('<h1>Home Page</h1>');
//     } else if (url === '/about') {
//         res.writeHead(200, {
//             'content-type': 'text/html'
//         });
//         res.end('<h1>About Page</h1>');
//     } else {
//         res.writeHead(404, {
//             'content-type': 'text/html'
//         });
//         res.end('<h1>Page Not Found</h1>');
//     }
// });

// server.listen(8000, () => console.log('Server is running on port 8000'));

// Here, we have set the content-type header to text/html for the response. We can see in the network tab, we can see the content-type header set to text/html.
// We can also set the content-type header to text/plain, text/json, text/xml, etc. based on the type of data we are sending in the response.

// We can even set our own custom headers for the response.
// const http = require('http');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/') {
//         res.writeHead(200, {
//             'content-type': 'text/html',
//             'my-custom-header': 'I am a custom header'
//         });
//         res.end('<h1>Home Page</h1>');
//     } else if (url === '/about') {
//         res.writeHead(200, {
//             'content-type': 'text/html',
//             'my-custom-header': 'I am a custom header'
//         });
//         res.end('<h1>About Page</h1>');
//     } else {
//         res.writeHead(404, {
//             'content-type': 'text/html',
//             'my-custom-header': 'I am a custom header'
//         });
//         res.end('<h1>Page Not Found</h1>');
//     }
// });

// server.listen(8000, () => console.log('Server is running on port 8000'));


// We can see in the network tab that the custom header set to I am a custom header.


// Task 1
// Create a server that sends a response with a status code of 200 and a content-type of text/html for the home route and about route. For any other route, send a response with a status code of 404 and a content-type of text/html. Also, set a custom header of my-custom-header with a value of I am a custom header for all the responses.
// Solution
// const http = require('http');
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/') {
//         res.writeHead(200, {
//             'content-type': 'text/html',
//             'my-custom-header': 'I am a custom header'
//         });
//         res.end('<h1>Home Page</h1>');
//     } else if (url === '/about') {
//         res.writeHead(200, {
//             'content-type': 'text/html',
//             'my-custom-header': 'I am a custom header'
//         });
//         res.end('<h1>About Page</h1>');
//     } else {
//         res.writeHead(404, {
//             'content-type': 'text/html',
//             'my-custom-header': 'I am a custom header'
//         });
//         res.end('<h1>Page Not Found</h1>');
//     }
// });

// server.listen(8000, () => console.log('Server is running on port 8000'));


// Task 2
// Create a server that sends index.html file as a response for the "/" route and 404 status if the route does not exist.
// Solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     if (url === '/') {
//         res.writeHead(200, {
//             'content-type': 'text/html'
//         });
//         fs.readFile('./index.html', 'utf8', (err, data) => {
//             if (err) {
//                 res.writeHead(500);
//                 res.end('<h1>Internal Server Error</h1>');
//             } else {
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404, {
//             'content-type': 'text/html'
//         });
//         res.end('<h1>Page Not Found</h1>');
//     }
// });

// server.listen(8000, () => console.log('Server is running on port 8000'));


// Task 3
// Create your multiple headers for the response.
// Solution
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'content-type': 'text/html',
//         'my-custom-header': 'I am a custom header',
//         'another-custom-header': 'I am another custom header'
//     });
//     res.end('<h1>Home Page</h1>');
// });

// server.listen(8000, () => console.log('Server is running on port 8000'));