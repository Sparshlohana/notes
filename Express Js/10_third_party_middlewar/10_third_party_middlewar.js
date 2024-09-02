// In this chapter we will learn about a third party middleware in Express Js.
// Third party middleware are the middleware that are not built-in with Express Js.
// We can use third party middleware by installing them using npm.

// We will use Morgan as a third party middleware in this chapter.
// Morgan is a HTTP request logger middleware for Node.js.
// It simplifies the process of logging requests to your application.

// To use Morgan, we need to install it using npm.
// Run the following command to install Morgan.
// npm install morgan

// After installing Morgan, we can use it in our application.
// To use Morgan, we need to require it in our application.
// const morgan = require('morgan');

// We can use Morgan by passing it as an argument to the app.use() method.
// We can use Morgan in different ways.

const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

// In the above example, we have used Morgan in the 'dev' mode.
// The 'dev' mode is a predefined format in Morgan.
// It logs the output in the following format:
// :method :url :status :response-time ms - :res[content-length]
// We will get the following output in the console when we run the above code.
// GET / 200 2.107 ms - 11

// We can even use morgan in different formats.
// app.use(morgan('combined'));

// In this example, we have used Morgan in the 'combined' mode.
// The 'combined' mode is another predefined format in Morgan.
// It logs the output in the following format:
// :remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
// We will get the following output in the console when we run the above code.

// ::1 - - [Mon, 08 Mar 2024 07:45:00 GMT] "GET / HTTP/1.1" 200 11 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36"

// There more ways to use Morgan.
// Explore the official documentation of Morgan to know more about it.

// This is how we can use a third party middleware in Express Js.

// Task
// Explore some other third party middleware in Express Js and try to use them in your application.
// Solution
// You can explore some other third party middleware in Express Js and try to use them in your application.
// Some of the popular third party middleware are:
// 1. Body-parser
// 2. Cookie-parser
// 3. Helmet
// 4. Compression
// 5. Express-session
// 6. Passport
// 7. Multer

// You can explore these third party middleware and try to use them in your application.

// 1. Body-parser
// Body-parser is a middleware that parses the incoming request body before your handlers.
// It is used to parse the incoming request body in different formats such as JSON, URL-encoded, etc.

// 2. Cookie-parser
// Cookie-parser is a middleware that parses the cookies attached to the client request object.
// It is used to parse the cookies attached to the client request object.

// 3. Helmet
// Helmet is a middleware that helps you secure your Express apps by setting various HTTP headers.
// It is used to secure your Express apps by setting various HTTP headers.

// 4. Compression
// Compression is a middleware that compresses the response bodies for all requests that traverse through it.
// It is used to compress the response bodies for all requests that traverse through it.

// 5. Express-session
// Express-session is a middleware that helps you manage sessions in your Express apps.
// It is used to manage sessions in your Express apps.

// 6. Passport
// Passport is a middleware that helps you authenticate requests in your Express apps.
// It is used to authenticate requests in your Express apps.

// 7. Multer
// Multer is a middleware that helps you handle file uploads in your Express apps.
// It is used to handle file uploads in your Express apps.


// You can explore these third party middleware and try to use them in your application.