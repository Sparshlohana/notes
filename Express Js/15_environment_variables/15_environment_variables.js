// Keep in mind that node js and express js apps can run in different environment.
// Two most important environment are the development environment and production environment. Depending on the environment, we might use different databases, or we might have different debugging environments depending on the environment we are in.

// By default, express sets the environment to development, and we can actually take a look at environment variables.

// To watch the environment, we need to go to our main server file, which we create. Inside that file, just add:
// console.log(app.get('env'));
// env is a variable name. This variable will give us the environment which we are in.

// As you have created your server locally, you will get the output as "development".

// Environment variables are global variables that are used to define the environment in which your application is running.
// The "env" variable which we used is set by express.

// Node js has lots of environment variables. To look at the environment variables, we can use the following:
// console.log(process.env);
// If we run this code, we will get all the environment variables that are defined by default by node js itself.
// We can see many environment variables like, path, os, etc.
// We can excess those variables by writing, process.env.path or process.env.os.

// These all variables comes from process module which is an inbuilt module/core module of nodejs.
// These environment variables are created as soon as the process is started. Here, the process means the server is running. So as soon as the server is started, all the variables are created automatically.

// We can use process module, which is a predefined module, we don't need to require it. We can use it directly as it is global variable.

// When we are using express js, there are many packages that are dependent on a unique variable named NODE_ENV. It is a variable that defines whether we are in development mode or production mode. However, express does not define this variable implicitly, we as a developer has to define it manually. There are multiple ways in which we can do it.

// The simplest way by using terminal.
// We have to set an environment variable, to do this, we use SET command.
// What we will do here is set the environment variable NODE_ENV to development
// SET NODE_ENV=development

// If we start the server again, we if we check the console.log(process.env), we can see the node_env set to development.

// We can even set any other variable like lets take "X" and set it to 10 and "Y" to 20
// SET X=10 (in terminal)
// SET Y=20 (in terminal)

// Now if we start the server again, we can see X and Y are present with the values of "10" and "20" respectively.

// When our project is ready, we should set the NODE_ENV variable to "production".

// If we have two databases, one for development and one for production, we can create a new environment variable and use that for the same.
// We can even use environment variables for storing very important and secret (sensitive) data like secret keys or passwords.

// But if have to create many environment variables, it is not practical to create each one of them manually to create them inside terminal. Another way to create environment variables are by using a configuration file.

// In the configuration, we can define all the environment variables.

// Lets create a new file in our root folder named: config.env
// Inside our env files lets define our first environment variable:
// NODE_ENV=development

// Let's assume we have to save some sensitive data, for now, lets store our username and password.
// USERNAME=admin
// PASSWORD=123

// You can see that we have defined our environment variable names in uppercase, though it is not mandatory, this is the convection which is followed while creating environment variables.

// You can install dotenv extension in vs code to format (syntax highlighting) the env file.

// Lets define another variable in our env file.
// PORT=8000

// We can use this PORT as our main port in our main app file, so in the app file

// const express = require('express');
// const app = express();

// const PORT = process.env.PORT

// app.listen(PORT, () => {
//     console.log(`Serving is running on port ${PORT}`);
// });

// What do you think will be the output of this,
// We will get the output as Server is running on port undefined.
// Why did we get undefined, this is because, we haven't config the env file.
// To config the env file, we have to install an third party package called "dotenv" by using npm.
// npm i dotenv

// Once dotenv is installed, we need to configure it.

// const express = require('express');
// const dotenv = require('dotenv').config();
// dotenv.config({path: "./config.env"});

// const app = express();

// const PORT = process.env.PORT

// app.listen(PORT, () => {
//     console.log(`Serving is running on port ${PORT}`);
// });

// Make sure, you are writing dotenv.config({path: "./config.env"}); before const app = express(); This is very important, if this is not done then you will again get undefined.

// Now when we log process.env, we can see all the variables which we defined in env file. We can access them by just writing process.env.PORT, process.env.USERNAME, etc

// As we are using morgan for logging, we can write a condition,
// if (process.env.NODE_ENV !== 'development') {
//     app.use(morgan('dev'));
//  }