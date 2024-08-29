// Express uses a concept of middleware which is very important to understand while working with express js.

// We have already used a middleware in our express code, can you guess what it is?
// That middleware is express.json().
// This middleware adds the request body to the request object.
// By default express does not parse the request body, so we need to use this middleware to parse the request body.

// But what is a middleware?
// When a client makes a request to an express app, this express app will send response to the client.
// But in between the request which is received and the response which is sent, there are few things which happens.
// In between, request which is received and response which is sent, this is called request-response cycle.
// So whenever an express app receives a request from the client, it firsts creates a request and response object.
// This is the same request and response object which we receive as an argument in our route handler function. Now this data (request and response object) is used and process in order to send meaningful response to the client. In order to process this data, We use something called as middleware.
// These middlewares can manipulate the request and response object.
// Middlewares can execute any other code as well, it doesn't need to be always about request and response object. But usually it is mostly used on request object.
// For example, we use express.json() middleware to get the request body on the request object.

// A middleware is called a middleware because it is a function that gets executed in between, i.e, in the middle of request and response cycle.
// We can also say that, in express, everything is a middleware. Even the routes which we define that is also a middleware in express js.
// When we use app.get("/api/movies"), it is also a middleware. We can think of route handler functions as the middleware functions. These middleware routes functions are executed for certain routes for which we have defined it. The callback functions which are attached to it are also middlewares. These callback function middlewares are only called when a particular routes is hit by the client.
// But most of the time, when we create a middleware, that middleware can be executed with all the requests
// So we can say that, in between request received and response sent, we can have multiple middlewares.

// In technical terms, all middlewares which we use together in our app is called as the middleware stack.

// The main thing to keep in mind is that, the order of execution of middlewares in the stack is same as the order in which they are defined in the code.
// The middleware which appears in the code first will be executed first, and so on. The last one to appear in the code will be executed last.

// In express, order of the code matters a lot. So how does a middleware works?
// Basically, the req and res object which were initially created goes through each middleware where they are processed or some other code gets executed. At the end of each middleware function, a next() function is called. This next() is the function which we have excess in each middleware function.
// Basically, after the middleware code is executed and next function is called within the middleware function. The next middleware function will be called and executed.
// And in each middleware, some processing of req and res object will happen, or some code will be executed. This same thing happens in all the middlewares until we reach the last one

// Now the last middleware function is the last middleware routes handler function. So in this middleware, we do not actually call the next function because this one is the last middleware in the stack. So in the last middleware function, instead of calling the next function, we finally send the response data back to the client.
// And in this way, the req res cycle is finished for that particular client request

// This is how a middleware works in express js.

// Lets create our own middleware function in express js.
// We already know that we can use express.json() middleware to parse the request body and to use a middleware, we use app.use() method.

// Lets create a middleware function called logger.
// To create a middleware function, we need to create a function which takes three arguments, req, res and next.
// We can name these arguments anything, but these are the standard names which we use.
// So lets create a middleware function called logger.
// const logger = (req, res, next) => { };

// In this logger function, we are just going to log a message to the console.
// const logger = (req, res, next) => {
//     console.log("Hello from the middleware function");
// }

// Now to use this middleware, we need to use app.use() method.
// const express = require("express");
// const app = express();

// const logger = (req, res, next) => {
//     console.log("Hello from the middleware function");
// }

// app.use(express.json());
// app.use(logger);

// app.get("/api/movies", (req, res) => {
//     res.status(200).send("Hello from the movies route");
// });

// app.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// Here what will happen is, when any request is made to the server, the first middleware which will be executed is express.json() middleware which will attach the request body to the request object.
// Then the next middleware which will be executed is the logger middleware which will log the message to the console.
// After that, there is an issue, We are not getting any response back to the client. This is because we have not called the next function in the logger middleware.
// So we need to call the next function in the logger middleware.
// const express = require("express");
// const app = express();

// const logger = (req, res, next) => {
//     console.log("Hello from the middleware function");
//     next();
// }

// app.use(express.json());
// app.use(logger);

// app.get("/api/movies", (req, res) => {
//     res.status(200).send("Hello from the movies route");
// });

// app.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// Now when we run this code, we will get the message from the logger middleware and also the response from the movies route.

// Keep in mind that, these middlewares which we have created are global middlewares. These middlewares will be executed for all the requests which are made to the server.
// But we can also create middlewares which are specific to a particular route.

// We already studied that, route handler functions are also middlewares but they are only called when a particular route is hit by the client but the middleware which we use in app.use() method are global middlewares. They are applied to all the routes.

// We even studied that, the order of the middlewares in the code matters a lot. The order in which they are defined in the code is the order in which they will be executed. If we move the logger middleware after the route handler function, then the logger middleware will not be executed because the response will be sent back to the client before the logger middleware is executed. Lets see this in code.
// const express = require("express");
// const app = express();

// const logger = (req, res, next) => {
//     console.log("Hello from the middleware function");
//     next();
// }

// app.use(express.json());

// app.get("/api/movies", (req, res) => {
//     res.status(200).send("Hello from the movies route");
// });

// app.use(logger);

// app.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });
// When we now hit the request to the server, we will not get the message from the logger middleware because the logger middleware is defined after the route handler function.

// We can even define a middleware directly in the app.use() method. We do not need to create a separate function for that. Lets see this in code.
// Let's attach requestedTime to the request object.
// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use((req, res, next) => {
//     req.requestedTime = new Date().toISOString();
//     next();
// });

// app.get("/api/movies", (req, res) => {
//     res.status(200).json({
//         requestedTime: req.requestedTime,
//         message: "Hello from the movies route"
//     });
// });

// app.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// Now when we hit the request to the server, we will get the requestedTime attached to the request object.

// Task 1
// Create a middleware function which generates a random number between 1 and 100 and attach it to the request object. Then send this random number back to the client in the response.
// Solution
// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use((req, res, next) => {
//     req.randomNumber = Math.floor(Math.random() * 100) + 1;
//     next();
// });

// app.get("/api/movies", (req, res) => {
//     res.status(200).json({
//         randomNumber: req.randomNumber,
//         message: "Hello from the movies route"
//     });
// });

// app.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });


// Task 2
// Create a middleware function which checks if the request body contains a name property. If it does not contain a name property, then send a response back to the client with status code 400 and message "Name is required".
// Solution
// const express = require("express");
// const app = express();

// const checkName = (req, res, next) => {
//     if (!req.body.name) {
//         return res.status(400).json({
//             message: "Name is required"
//         });
//     }
//     next();
// }

// app.use(express.json());
// app.use(checkName);

// app.post("/api/movies", (req, res) => {
//     res.status(200).json({
//         message: "Movie added successfully"
//     });
// });

// app.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });


// Task 3
// Create a middleware function which checks the number if it is even or odd. If the number is even, then attach a property isEven to the request object with value true. If the number is odd, then attach a property isEven to the request object with value false. Then send this property back to the client in the response.
// Solution
// const express = require("express");
// const app = express();

// const checkEvenOdd = (req, res, next) => {
//     if (req.body.number % 2 === 0) {
//         req.isEven = true;
//     } else {
//         req.isEven = false;
//     }
//     next();
// }

// app.use(express.json());
// app.use(checkEvenOdd);

// app.post("/api/number", (req, res) => {
//     res.status(200).json({
//         isEven: req.isEven
//     });
// });

// app.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });