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
