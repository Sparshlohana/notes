// In the previous chapter, we learned about put and patch request. In this chapter, we will learn about delete request.
// To make a delete request, we need to use delete() method of express module.
// For a delete request, we only need a unique identifier to delete the data. We can pass the unique identifier in the URL or in the request body.
// We'll be using our movies.json file which we are using in the previous chapter.

// lets create a delete request
// const express = require('express');
// const app = express();
// const fs = require('fs');

// app.use(express.json());

// const moviesData = fs.readFileSync(`${__dirname}/movies.json`, 'utf-8');
// const movies = JSON.parse(moviesData);

// app.delete('/api/movies/:id', (req, res) => {
//     try {
//         const movie = movies.find((movie) => movie.id === parseInt(req.params.id));
//         if (!movie) {
//             return res.status(404).json({ message: 'Movie not found.' });
//         }
//         const index = movies.indexOf(movie);
//         movies.splice(index, 1);
//         fs.writeFileSync(`${__dirname}/movies.json`, JSON.stringify(movies));
//         return res.status(200).json(movie);
//     } catch (error) {
//         console.log(error);
//         return res.status(404).json(error);
//     }
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// In this case, we are deleting the movie using the id in params.

// Now lets delete the movie using the id in request body.
// const express = require('express');
// const app = express();
// const fs = require('fs');

// app.use(express.json());

// const moviesData = fs.readFileSync(`${__dirname}/movies.json`, 'utf-8');
// const movies = JSON.parse(moviesData);

// app.delete('/api/movies', (req, res) => {
//     try {
//         const movie = movies.find((movie) => movie.id === parseInt(req.body.id));
//         if (!movie) {
//             return res.status(404).json({ message: 'Movie not found.' });
//         }
//         const index = movies.indexOf(movie);
//         movies.splice(index, 1);
//         fs.writeFileSync(`${__dirname}/movies.json`, JSON.stringify(movies));
//         return res.status(200).json(movie);
//     } catch (error) {
//         console.log(error);
//         return res.status(404).json(error);
//     }
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// This is how we can delete the resource using the id in the request body.


// Task 1
// Delete one of the user you updated in previous chapter.
// Solution
// const express = require('express');
// const app = express();
// const fs = require('fs');

// app.use(express.json());

// const usersData = fs.readFileSync(`${__dirname}/users.json`, 'utf-8');
// const users = JSON.parse(usersData);

// app.delete('/api/users/:id', (req, res) => {
//     try {
//         const user = users.find((user) => user.id === parseInt(req.params.id));
//         if (!user) {
//             return res.status(404).json({ message: 'User not found.' });
//         }
//         const index = users.indexOf(user);
//         users.splice(index, 1);
//         fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
//         return res.status(200).json(user);
//     } catch (error) {
//         console.log(error);
//         return res.status(404).json(error);
//     }
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });


// Task 2
// Create an entirely different server in that:
// 1. Create an api to create products which will take product name, price, and quantity.
// 2. Create an api to get all products.
// 3. Create an api to get a single product by id or name.
// 4. Create an api to update a product by id.
// 5. Create an api to delete a product by id.
// Solution
// 404-not-found