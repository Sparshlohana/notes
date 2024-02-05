// In the previous chapters, we have already learned how to create a basic node js server using http module. In this chapter, we will be studying about routing in node js.

// We can even replace http://localhost:8000/ to http://127.0.0.1:8000/ in the browser to get the same output and vice versa. Both are same only.

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from the server');
    console.log("Server is running");
});

server.listen(8000, () => {
    console.log("Server is running on port 8000");
});

// What is root URL?
// The root URL is the URL that goes to the root of your website. For example, if you have a website called www.example.com, then the root URL is www.example.com.
// The root url will be the domain name of the website.
// In our case, as our node application is running on local server the root url will be http://localhost:8000/ or http://127.0.0.1:8000/

// If we enter the url as http://localhost:8000/about in the browser, we will still get the same output as we got for http://localhost:8000/ as we have not defined any routes for /about.
// And if we enter the url as http://localhost:8000/contact in the browser, we will still get the same output as we got for http://localhost:8000/ as we have not defined any routes for /contact.

// If I type http://localhost:8000/about in the browser, I should get the output as "Hello from the about page" and if I type http://localhost:8000/contact in the browser, I should get the output as "Hello from the contact page" and if I type http://localhost:8000/ in the browser, I should get the output as "Hello from the server".

// To achieve this, we need to create routes in node js.

// But first, let's understand what is routing in node js.
// Routing defines the way in which the client requests are handled by the application endpoints.
// It is the process of selecting a path for traffic in a network or between or across multiple networks.
// In simple words, When we type a URL in the browser, the server should know what to do with that URL. This is called routing.
// With the help of routes we can send different responses to different URLs.


// What are the different URL Patterns?
// 1. File based URL pattern: In this pattern, the URL is mapped to a file on the server. For example, http://www.example.com/about.html
// Here about.html is a file on the server and the URL is mapped to this file.
// If we type http://www.example.com/contact.html, then the server will look for contact.html file on the server and send the response to the client.

// 2. Resource based URL pattern: In this pattern, the URL is mapped to a resource on the server. For example, http://www.example.com/about
// Here about is a resource on the server and the URL is mapped to this resource.
// In order to handle this request, we will have to create a request handler for /about and send the response to the client. A request handler can be a function or a file.
// Based on the resource that is specified in the URL, the request handler will send the response to the client.

// So we can say that, we can make our application to respond to different URLs with different responses using routing.

// Routing basically means implementing different actions for different URLs.
// These actions can be implemented using different ways example creating functions, creating files, etc.

// We will learn how to create routes in node js in the next chapter.

// Route parameters
// A route/Url can also take parameters also known as params, eg: http://localhost:8000/user/1
// Here http://localhost:8000 is the root url and /user is the resource and 1 is the id of the user which is passed as a parameter.
// Based on the id of the user, we can send that particular user's data as a response to the client.

// Let us understand this with an example.
// If we have http://localhost:8000/books/sci-fi/7,
// Here, http://localhost:8000 is the root url, /books is the resource, /sci-fi/7 are the parameters.
// Based on the parameters, we can send the data of the book with the genre sci-fi and id 7 as a response to the client.
// Here sci-fi is the genre of the book and 7 is the id of the book.

// We also have something known as query parameters.
// A query parameter is a key value pair that is sent in the URL.
// It is used to send data to the server.
// It is always sent at the end of the URL.
// Eg: http://localhost:8000/user?id=1
// Here the query parameter is id=1.
// Anything after ? in the key value pair is a query parameter.
// We can have multiple query parameters in a URL.
// eg: http://localhost:8000/user?id=1&name=John
// Queries are separated by & in the URL.
// For this url we will get the response with the user with id 1 and name John.