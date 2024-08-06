// Lets create a post request to add a new movie to the list of movies on the same route /api/movies of previous chapter.
// To create a post request we will use the post method of the app object.
// When we hit a post request on /api/movies, what we want to do is, we want to create a new movie object in our movies.json file.

// Whenever clients hit a post request, they will be sending some data inside it.
// In our case, the data that the client will be sending will be a movie object.
// That data is also called the body of the request.
// We get data from the body of the request using the req.body object.

// const express = require('express');
// const app = express();

// app.post('/api/movies', (req, res) => {
//     console.log(req.body);
//     res.send('Movie is added to the list.');
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// To sent a post request, we will use the postman.
// We will select the post request from the dropdown.
// We will enter the URL http://localhost:8000/api/movies
// We will select the body tab.
// We will select the raw radio button.
// We will select the JSON from the dropdown.
// We will enter the JSON object in the text area.
// {
//     "name": "Movie 1",
//     "year": "2004",
//     "rating": "5"
// }
// We will click on the send button.

// Even though we have sent the data and we even see "Movie added to the list", but we did not get the data from the body of the request.
// This is because, we need to use a middleware to parse the data from the body of the request.
// We will talk about middleware in future.
// In order to attach req.body object to the request object, we need to use a middleware
// To use a middleware, we need to use the app.use() method of the app object.
// Here, the middleware that we need to use is express.json().
// This middleware will parse the data from the body of the request and attach it to the req.body object.

// const express = require('express');
// const app = express();

// app.use(express.json());

// app.post('/api/movies', (req, res) => {
//     console.log(req.body);
//     res.send('Movie is added to the list.');
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// Now hit the post request again using the postman.
// We will see the data in the console.

// Now where will we store the data that we get from the post request?
// We can store the data in the movies.json file.
// We will add the data to the movies.json file using the fs module.

// But we are not sending any id with the movie object.
// So we have to create each id for every new movie that we add.
// The logic for creating the id will be, previous id + 1.

// First we will read the data from the movies.json file.
// We will parse the data to get the array of movies.
// We will add the new movie to the array of movies.
// We will create the id for the new movie.
// We will write the data back to the movies.json file.

// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

// const moviesData = fs.readFileSync(`${__dirname}/movies.json`, 'utf-8');

// app.post('/api/movies', (req, res) => {
//     const movies = JSON.parse(moviesData);
//     const newMovie = req.body;
//     newMovie.id = movies[movies.length - 1].id + 1;
//     movies.push(newMovie);
//     fs.writeFile(`${__dirname}/movies.json`, JSON.stringify(movies), err => {
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 movie: newMovie
//             }
//         });
//     });
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// Now you can hit the post request using the postman.
// You will see the data in the movies.json file.

// Now we will add the validation to the post request.
// We will check if the name, year and rating are present in the request body.
// If they are not present, we will send the error message.
// We will also check if the year and rating are numbers.
// If they are not numbers, we will send the error message.

// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

// const moviesData = fs.readFileSync(`${__dirname}/movies.json`, 'utf-8');

// app.post('/api/movies', (req, res) => {
//     const movies = JSON.parse(moviesData);
//     const newMovie = req.body;
//     if (!newMovie.name || !newMovie.year || !newMovie.rating) {
//         return res.status(400).json({
//             status: 'fail',
//             message: 'Name, year and rating are required.'
//         });
//     }
//     if (isNaN(newMovie.year) || isNaN(newMovie.rating)) {
//         return res.status(400).json({
//             status: 'fail',
//             message: 'Year and rating should be numbers.'
//         });
//     }
//     newMovie.id = movies[movies.length - 1].id + 1;
//     movies.push(newMovie);
//     fs.writeFile(`${__dirname}/movies.json`, JSON.stringify(movies), err => {
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 movie: newMovie
//             }
//         });
//     });
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// Now you can hit the post request using the postman.
// You will see the data in the movies.json file and if you do not send the name, year and rating, you will see the error message and if you do not send the year and rating as numbers, you will see the error message.


// Task 1.
// Create a post request to add a new user to the list of users on the same route /api/users of previous chapter.
// Solution:
// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

// const usersData = fs.readFileSync(`${__dirname}/users.json`, 'utf-8');

// app.post('/api/users', (req, res) => {
//     const users = JSON.parse(usersData);
//     const newUser = req.body;
//     if (!newUser.name || !newUser.age || !newUser.email) {
//         return res.status(400).json({
//             status: 'fail',
//             message: 'Name, age and email are required.'
//         });
//     }

//     if (isNaN(newUser.age)) {
//         return res.status(400).json({
//             status: 'fail',
//             message: 'Age should be a number.'
//         });
//     }

//     newUser.id = users[users.length - 1].id + 1;
//     users.push(newUser);
//     fs.writeFile(`${__dirname}/users.json`, JSON.stringify(users), err => {
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 user: newUser
//             }
//         });
//     });
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });


// Task 2.
// Hit the get request on the same url /api/users to get the list of users and check if the user is added or not.
// Solution:
// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

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