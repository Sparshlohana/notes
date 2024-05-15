// Express Js is free and open source web application framework for Node.js.
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
// In simple words, Express Js is a framework for Node.js that helps you to build web applications and APIs by writing less code. It simplifies complex node js code and makes it easy to understand and maintain.
// As express is a framework for Node.js, it provides a lot of built-in classes and methods which we can use while developing web applications.
// We can write complex functionalities in a few lines of code using Express Js.
// If we write code in core node js, the number of lines of code will be more and we as developers will have to write complex logical code to achieve the same functionality. But with Express Js, we can achieve it with less code and the complexity will be less as the functionalities are already built-in.

// Express is completely built on node js, i.e, behind the scenes, express is completely written in node js.
// It is also one of the most popular frameworks for Node.js. There are other frameworks also, but Express Js has become kinda standard for Node.js.
// Express contains very robust and useful sets of features like:
// 1. Routing: It helps to define the routes of the application.
// 2. Middleware: It helps to handle the request and response objects.
// 3. Templating: It helps to render the views.
// 4. Static Files: It helps to serve the static files like images, CSS, and JavaScript files.
// 5. Error Handling: It helps to handle the errors in the application.
// 6. Database Integration: It helps to connect with the database.
// 7. Security: It helps to secure the application.
// 8. REST API: It helps to create REST APIs.
// 9. Authentication: It helps to implement authentication.
// 10. Session: It helps to manage the session, etc.
// Express allows us to write node js applications faster and simpler. Provides a lot of built-in functionalities that help us to write less code and achieve more functionalities.
// With Express Js, we can also organize our code in MVC (Model-View-Controller) architecture which makes it easy to maintain and understand the code.

// Lets start our first Express Js application.
// To start with Express Js, we need to initialize the project. We can do it by using the npm init command.
// npm init
// It will ask you some questions like package name, version, description, entry point, test command, git repository, keywords, author, license, etc.
// For the package name, the name you will be giving should be URL friendly, i.e, it should not contain any special characters or spaces. If you want to separate the words, you can use a hyphen (-) or an underscore (_).
// Change the entry point to app.js. It is the main file of the application.
// Enter your name in the author field.
// It will show you the details you have entered and ask you to confirm. If everything is correct, type yes and press enter.
// It will create a package.json file in the root directory of the project. The package.json file contains all the details of the project like the name of the project, version, description, author, dependencies, etc.

// After initializing the project, we need to install the express module. We can do it by using the npm install express command.
// npm install express

// Once the package is installed, you can see in the package
// Express is going to be regular dependency of out projects.
// The code we are going to write depends on express package.
// A folder called node_modules has been created in the root directory of the project. This folder contains all the dependencies of the project.
// Besides express, in node_modules, there are other dependencies of express also.
// These are the dependencies of express which are required to run express.
// So when we install express js, behind the scenes, it installs all the dependencies of express also.

// Lets create a file called app.js in the root directory of the project.
// This app.js is the main file/entry point of the application.
// In this app.js, we will be keeping all the configuration related to express js.

// Lets import the express module in the app.js file.
// Do remember that express is a third party module, so we need to import it using require function.
// require('express');

// This express module is going to return a function. So we need to store it in a variable.
// const express = require('express');

// Once this function is assigned to a variable, we need to call that function
// express();
// Here, we are calling the function which is returned by the express module.

// When we call this function, it is going to return an object. This object is going to have a lot of methods and properties which we can use to build our application.
// We can store this object in a variable.
// const app = express();

// Lets create a simple server using express.
// We can create a server using the listen method.
// The listen method takes two arguments. The first argument is the port number on which the server is going to run and the second argument is a callback function.
// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// You can store port in some variable and use that variable in listen method.
// const port = 8000;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// Now run the app.js file using node command.
// node app.js
// It will start the server on port 8000.
// You can see the message "Server is running on port 8000" in the console.

// Now lets create a simple route in the express application.
// Please note that, a route consists of two things. The first thing is the HTTP method and the second thing is the path.
// ROUTE = HTTP METHOD + URL
// We have already studied how to build routes in node js, but in express js, it is very easy to build routes.
// We can build routes using the get method of the express object.
// The get method takes two arguments. The first argument is the route and the second argument is a callback function.
// In the callback function, we can write the logic of the route.
// We will get request and response objects in the callback function.
// We can send the response using the response object.

// Lets say we are making a get request to the root URL.
// In this case the Http method is get and the URL is /.
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
// We have created a route for the root URL. When we make a get request to the root URL, it will send the response "Hello World".
// This res.send method is used to send the response to the client.
// It can be any text or even html.

// If you want to set the status code before sending the response, you can use the status method.
// app.get('/', (req, res) => {
//     res.status(200).send('Hello World');
// });
// This status method is used to set the status code of the response.
// Keep in mind that the status method should be called before the send method.

// What is happening here?
// Whenever a request is made to the root URL, the callback function is executed.
// In the callback function, we are sending the response "Hello World" with the status code 200.
// Status code 200 means the request is successful.

// Lets see in the browser.
// Open the browser and type http://localhost:8000/.

// We can even send the html content as a response.
// app.get('/', (req, res) => {
//     res.status(200).send('<h1>Hello World</h1>');
// });
// This will send hello world in h1 tag.

// Keep in mind that when we use send method, by default the content type is text/html.

// Lets say, we want to send a JSON response. In that case we cannot use the send method. We have to use the json method.
// app.get('/', (req, res) => {
//     res.status(200).json({ message: 'Hello World' });
// });
// The json method is used to send the JSON response.
// Here we are sending a JSON object with the key message and value Hello World.
// The content type of the response will be application/json.

// If I send the request to some other URL from the browser, it will show 404 Not Found cause we have not defined any route for that URL.

// What if we want to make a post request to the server?
// If we make a post request to the server, get route for "/" route will not work. This route will only work when we sent a get request.
// To handle post request, we need to define another route.
// app.post('/', (req, res) => {
// });
// To hit a post request, we can use postman or any other tool.
// We will be using postman to make a post request to the server.
// This is how we can create routes in express js.

// Look how easy it got when we switched to express js from node js because when we use express js, it minimizes the number of lines of code and makes it easy to understand and maintain the code.