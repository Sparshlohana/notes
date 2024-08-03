// In this chapter we are going to create our first API.
// Lets make a basic server first.
// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// We have already learned how to create this basic server.

// Now, what I want is, when I hit the URL /api/movies, I should get a list of movies. This api should be of GET type. To do this, we can do this:
// On the app variable, which is an instance of express, the app is an object which has a method called get.
// This get is used to create a GET request.
// The first parameter is the URL/endpoint to which we want to handle the request.
// In our case, the endpoint is /api/movies.
// We can even write /movies also, but as we are creating an API, it is a good practice to write /api/movies.
// If you want, you can even provide the version of the API, like /api/v1/movies.
// This is a good practice, but it is not mandatory. This gives an advantage that if you want to update the api, you can create a new api with a new version without disturbing the old one.
// This is very useful when you have a lot of users using your API, if you suddenly change the API, it will break the code of the users who are using your API. So in case of modifying the old version, you can create a new version and ask the users to use the new version.

// The second parameter is a callback function which has two parameters, req and res.
// req is the request object which contains all the information about the request.
// res is the response object which is used to send the response.
// This callback is executed when the user hits the URL /api/movies.

// In the callback function, we can write the logic to get the list of movies.
// Where will we get the list of movies from?
// In real world applications, we uses databases to storing and retrieve the data, but for now, what we can do is, we can create a json file which contains the list of movies. It will be our dummy database.

// What we want to do is, whenever the user hits the URL /api/movies, we want to read the json file and send the data to the user.
// To send data in json we can use the method res.json().
// We need to read the file first, for that we can use the fs module.

// const express = require('express');
// const fs = require('fs');
// const app = express();

// const moviesData = fs.readFileSync(`${__dirname}/movies.json`, 'utf-8');

// app.get('/api/movies', (req, res) => {
//     res.json(JSON.parse(moviesData));
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// Here, we are reading the file movies.json synchronously only once when the server starts.
// We have not written readFileSync inside the get request because it will read the file every time the user hits the URL /api/movies. But it is better that we read the file only once when the server starts.
// While sending the response, we are parsing the data because the data we are reading from the file is in string format, so we need to parse it to convert it into json format.
// Here we have not sent the status code, but it is a good practice to send the status code. By default, the status code is 200, which means the request is successful. But if there is an error, we can send the status code accordingly. Let's just send the status code 200 for now.
// const express = require('express');
// const fs = require('fs');
// const app = express();

// const moviesData = fs.readFileSync(`${__dirname}/movies.json`, 'utf-8');

// app.get('/api/movies', (req, res) => {
//     res.status(200).json(JSON.parse(moviesData));
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// In the last lecture, we learned that we need to format the data before sending it to the user. We will use JSend format to send the data.
// Let's see how we can do this.

// const express = require('express');
// const fs = require('fs');
// const app = express();

// const moviesData = fs.readFileSync(`${__dirname}/movies.json`, 'utf-8');

// app.get('/api/movies', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         data: {
//             movies: JSON.parse(moviesData)
//         }
//     });
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// Here we are sending the status code 200 and the data in the JSend format.

// Here, for creating and testing apis, we are using browser, but it is not very efficient. We can use Postman to test the apis. Postman is a tool which is used to test the apis. It is very useful when you are working with apis.
// Install the postman from the official website.
// After installing, open the postman.
// In the postman, create a new folder and name it whatever you want related to the project.
// In that folder, create a new request and name it get movies.
// In the request, select the method as GET.
// In the URL, write the URL of the api, in our case it is http://localhost:8000/api/movies.
// Click on the send button.
// You will get the response in the response section.

// We can even see the response headers, cookies, etc in the postman.
// You can see the content type is application/json, which means the data is in json format.
// This is because we are sending the data in json format by using the method res.json().
// It automatically sets the content type to application/json. This is the advantage of using express js over the core node js.

// Now, with the status and data, we want to send the count of the movies as well.
// We can do this by adding the count property in the data object.

// const express = require('express');
// const fs = require('fs');
// const app = express();

// const moviesData = fs.readFileSync(`${__dirname}/movies.json`, 'utf-8');

// app.get('/api/movies', (req, res) => {
//     const movies = JSON.parse(moviesData);
//     res.status(200).json({
//         status: 'success',
//         count: movies.length,
//         data: {
//             movies: movies
//         }
//     });
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// Here, movies.length will give us the count of the movies.

// What if we want to get the data of a single movie?
// We can do this by adding a new api.
// The URL will be /api/movies/:id.
// Here, :id is a route parameter. It is used to get the data of a single movie.
// We can get the id from the req.params object.
// req.params is an object which contains the route parameters.
// We can get the id by req.params.id or we can destructure the id from the req.params object.
// We can use the find method to get the data of a single movie.

// const express = require('express');
// const fs = require('fs');
// const app = express();

// const moviesData = fs.readFileSync(`${__dirname}/movies.json`, 'utf-8');

// app.get('/api/movies', (req, res) => {
//     const movies = JSON.parse(moviesData);
//     res.status(200).json({
//         status: 'success',
//         results: movies.length,
//         data: {
//             movies: movies
//         }
//     });
// });

// app.get('/api/movies/:id', (req, res) => {
//     const movies = JSON.parse(moviesData);
//     const movie = movies.find(movie => movie.id === parseInt(req.params.id));
//     if (!movie) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'Movie not found'
//         });
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             movie: movie
//         }
//     });
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// Task 1.
// Create an api which will send the list of users along with the count of the users.
// The URL should be /api/users.
// The data should be in JSend format.
// The data should be read from the file users.json.
// Solution:
// const express = require('express');
// const fs = require('fs');
// const app = express();

// const usersData = fs.readFileSync(`${__dirname}/users.json`, 'utf-8');

// app.get('/api/users', (req, res) => {
//     const users = JSON.parse(usersData);
//     res.status(200).json({
//         status: 'success',
//         results: users.length,
//         data: {
//             users: users
//         }
//     });
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });


// Task 2.
// Create an api which will send the data of a single user.
// The URL should be /api/users/:id.
// Solution:
// const express = require('express');
// const fs = require('fs');
// const app = express();

// const usersData = fs.readFileSync(`${__dirname}/users.json`, 'utf-8');

// app.get('/api/users', (req, res) => {
//     const users = JSON.parse(usersData);
//     res.status(200).json({
//         status: 'success',
//         results: users.length,
//         data: {
//             users: users
//         }
//     });
// });

// app.get('/api/users/:id', (req, res) => {
//     const users = JSON.parse(usersData);
//     const user = users.find(user => user.id === parseInt(req.params.id));
//     if (!user) {
//         return res.status(404).json({
//             status: 'fail',
//             message: 'User not found'
//         });
//     }
//     res.status(200).json({
//         status: 'success',
//         data: {
//             user: user
//         }
//     });
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });