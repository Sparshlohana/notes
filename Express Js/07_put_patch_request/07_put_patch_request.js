// In this lecture we will learn how to update a resource on server using PUT and PATCH request.
// We have two http methods to update a resource on server PUT and PATCH.

// Put:
// Put is a method of modifying resource where the client sends data that updates the entire resource.
// In simple terms, when we use put method, we need to send entire object which we want to update with the request body

// Patch:
// Patch is the method of modifying resources where the client sends partial data that is to be updated without modifying the entire data.

// Lets understand with an example:
// Lets do a put request to update a resource on server.

// This is the particular json field which we want to update.
// {
//     "id": 2,
//     "name": "The Godfather",
//     "year": 1972,
//     "rating": 9.2
// },

// Lets update it to:
// {
//     "id": 2,
//     "name": "The Godfather",
//     "year": 1980,
//     "rating": 9.2
// }

// Here, release year is the only field which we want to update.
// Since, I am using PUT http method, I need to send the entire object with the request body.
// So I will be sending this in body section of postman:
// {
//     "name": "The Godfather",
//     "year": 1980,
//     "rating": 9.3
// }

// We will be taking id from the URL as Params.

// If I use Patch http method, I can only send the field which I want to update.
// In our case, I can only send the year field in the body section of postman.
// {
//     "year": 1980
// }

// This will be enough to update the resource in case of PATCH request.

// This is the main difference between PUT and PATCH http methods.
// Lets first create a PUT request to update the resource.
// const express = require('express');
// const app = express();

// app.use(express.json());

// const moviesData = fs.readFileSync(`${__dirname}/movies.json`, 'utf-8');
// const movies = JSON.parse(moviesData);

// app.put('/api/movies/:id', (req, res) => {
//     try {
//         const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
//         if (!movie) {
//             res.status(404).send('Movie not found.');
//             return;
//         }
//         movie.name = req.body.name;
//         movie.year = req.body.year;
//         movie.rating = req.body.rating;
//         fs.writeFileSync(`${__dirname}/movies.json`, JSON.stringify(movies));
//         res.status(200).json(movie);
//     } catch (error) {
//         res.status(404).json(error);
//         console.log(error);
//     }
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// While updating the resource, we need a unique identifier to identify the resource.
// In our case, we are using id to identify the resource.

// Now lets create a PATCH request to update the resource.
// We will be updating the resource using the id.

// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

// const moviesData = fs.readFileSync(`${__dirname}/movies.json`, 'utf-8');

// app.patch('/api/movies/:id', (req, res) => {
//     try {
//         const movies = JSON.parse(moviesData);
//         const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
//         if (!movie) {
//             res.status(404).send('Movie not found.');
//             return;
//         }
//         if (req.body.name) {
//             movie.name = req.body.name;
//         }
//         if (req.body.year) {
//             movie.year = req.body.year;
//         }
//         if (req.body.rating) {
//             movie.rating = req.body.rating;
//         }
//         fs.writeFileSync(`${__dirname}/movies.json`, JSON.stringify(movies));
//         res.status(200).json(movie);
//     } catch (error) {
//         res.status(404).json(error);
//         console.log(error);
//     }
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// Now you can hit the patch request using the postman.
// You will see the data in the movies.json file.

// The difference in both the code is that in put request, we are sending the entire object in the request body while on the other hand in patch request, we are sending only the field which we want to update.

// This is how we can update a resource on server using PUT and PATCH request.


// Task 1
// Create a put request to update the resource of the user data you created in the last chapter.
// Solution
// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

// const usersData = fs.readFileSync(`${__dirname}/users.json`, 'utf-8');

// app.put('/api/users/:id', (req, res) => {
//     try {
//         const users = JSON.parse(usersData);
//         const user = users.find((user) => user.id === parseInt(req.params.id));
//         if (!user) {
//             res.status(404).send('User not found.');
//             return;
//         }
//         user.name = req.body.name;
//         user.age = req.body.age;
//         user.email = req.body.email
//         fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(404).json(error);
//         console.log(error);
//     }
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });


// Task 2
// Create a patch request to update the resource of the user data you created in the last chapter.
// Solution
// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

// const usersData = fs.readFileSync(`${__dirname}/users.json`, 'utf-8');

// app.patch('/api/users/:id', (req, res) => {
//     try {
//         const users = JSON.parse(usersData);
//         const user = users.find((user) => user.id === parseInt(req.params.id));
//         if (!user) {
//             res.status(404).send('User not found.');
//             return;
//         }
//         if (req.body.name) {
//             user.name = req.body.name;
//         }
//         if (req.body.age) {
//             user.age = req.body.age;
//         }
//         if (req.body.email) {
//             user.email = req.body.email;
//         }
//         fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(404).json(error);
//         console.log(error);
//     }
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });