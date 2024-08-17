// We have learned CRUD operations in the previous sections, now we will refactor the code to make it more readable and maintainable.
// This was our previous code:
// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

// const moviesData = fs.readFileSync('./data/movies.json', 'utf-8');

// app.get('/', (req, res) => {
//     res.status(200).send('Hello World');
// });

// app.get('/api/movies', (req, res) => {
//     const movies = JSON.parse(moviesData);
//     res.json({
//         status: 'success',
//         count: movies.length,
//         data: {
//             movies
//         }
//     });
// })

// app.get('/api/movies/:id', (req, res) => {
//     const { id } = req.params;
//     const movies = JSON.parse(moviesData);
//     const movie = movies.find((item) => item.id === parseInt(id));

//     if (!movie) {
//         return res.status(404).json({
//             status: 'Error',
//             message: 'Movie not found'
//         });

//     }

//     return res.json({
//         status: 'success',
//         data: {
//             movie
//         }
//     });
// });

// app.post('/api/movies', (req, res) => {
//     const movies = JSON.parse(moviesData);
//     const newMovies = req.body;

//     if (!newMovies.name || !newMovies.year || !newMovies.rating) {
//         return res.status(400).json({
//             status: 'Error',
//             message: 'Please provide all the fields'
//         });
//     }

//     if (isNaN(newMovies.year) || isNaN(newMovies.rating)) {
//         return res.status(400).json({
//             status: 'Error',
//             message: 'Year and rating should be a number'
//         });

//     }

//     newMovies.id = movies.length + 1;
//     movies.push(newMovies);
//     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
//         if (err) {
//             return res.status(500).json({
//                 status: 'Error',
//                 message: 'An error occurred while adding a new movie'
//             });
//         }
//         res.status(201).json({
//             status: 'success',
//             data: {
//                 movies: newMovies
//             }
//         });
//     });
// });

// app.put('/api/movies/:id', (req, res) => {
//     try {
//         const id = +req.params.id;
//         const updatedMovie = req.body;
//         const movies = JSON.parse(moviesData);
//         const movieId = movies.findIndex((movie) => movie.id === id);

//         if (movieId === -1) {
//             return res.status(404).json({
//                 status: 'Error',
//                 message: 'Movie not found'
//             });
//         }

//         if (!updatedMovie.name || !updatedMovie.year || !updatedMovie.rating) {
//             return res.status(400).json({
//                 status: 'Error',
//                 message: 'Please provide all the fields'
//             });
//         }

//         if (isNaN(updatedMovie.year) || isNaN(updatedMovie.rating)) {
//             return res.status(400).json({
//                 status: 'Error',
//                 message: 'Year and rating should be a number'
//             });
//         }

//         movies[movieId] = { id, ...updatedMovie };

//         fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
//             if (err) {
//                 return res.status(500).json({
//                     status: 'Error',
//                     message: 'An error occurred while updating a movie'
//                 });
//             }

//             return res.status(200).json({
//                 status: 'success',
//                 data: {
//                     movies: updatedMovie
//                 }
//             });
//         });
//     } catch (error) {
//         return res.status(500).json({
//             status: 'Error',
//             message: 'An error occurred while updating a movie'
//         });
//     }
// });

// app.patch('/api/movies/:id', (req, res) => {
//     const id = +req.params.id;
//     const updatedMovie = req.body;
//     const movies = JSON.parse(moviesData);
//     const movieId = movies.findIndex((movie) => movie.id === id);

//     if (movieId === -1) {
//         return res.status(404).json({
//             status: 'Error',
//             message: 'Movie not found'
//         });
//     }

//     if (updatedMovie.year && isNaN(updatedMovie.year)) {
//         return res.status(400).json({
//             status: 'Error',
//             message: 'Year should be a number'
//         });
//     }

//     if (updatedMovie.name) {
//         movies[movieId].name = updatedMovie.name;
//     }

//     if (updatedMovie.year) {
//         movies[movieId].year = updatedMovie.year;
//     }

//     if (updatedMovie.rating) {
//         movies[movieId].rating = updatedMovie.rating;
//     }

//     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
//         if (err) {
//             return res.status(500).json({
//                 status: 'Error',
//                 message: 'An error occurred while updating a movie'
//             });
//         }

//         return res.status(200).json({
//             status: 'success',
//             data: {
//                 movies: movies[movieId]
//             }
//         });
//     });
// });

// app.delete('/api/movie/:id', (req, res) => {
//     const id = +req.params.id;
//     const movies = JSON.parse(moviesData);
//     const movieId = movies.findIndex((movie) => movie.id === id);

//     if (movieId === -1) {
//         return res.status(404).json({
//             status: 'Error',
//             message: 'Movie not found'
//         });
//     }

//     movies.splice(movieId, 1);

//     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
//         if (err) {
//             return res.status(500).json({
//                 status: 'Error',
//                 message: 'An error occurred while deleting a movie'
//             });
//         }

//         return res.status(200).json({
//             status: 'success',
//             data: "Movie deleted successfully"
//         });
//     });
// });

// app.delete('/api/movie/', (req, res) => {
//     const { id } = req.body;
//     const movies = JSON.parse(moviesData);
//     const movieId = movies.findIndex((movie) => movie.id === id);

//     if (movieId === -1) {
//         return res.status(404).json({
//             status: 'Error',
//             message: 'Movie not found'
//         });
//     }

//     movies.splice(movieId, 1);

//     fs.writeFile('./data/movies.json', JSON.stringify(movies), (err) => {
//         if (err) {
//             return res.status(500).json({
//                 status: 'Error',
//                 message: 'An error occurred while deleting a movie'
//             });
//         }

//         return res.status(200).json({
//             status: 'success',
//             data: "Movie deleted successfully"
//         });
//     });
// });

// app.delete('/api/movies/all', (req, res) => {
//     const moviesData = []

//     fs.writeFile('./data/movies.json', JSON.stringify(moviesData), (err) => {
//         if (err) {
//             return res.status(500).json({
//                 status: 'Error',
//                 message: 'An error occurred while deleting a movie'
//             });
//         }

//         return res.status(200).json({
//             status: 'success',
//             data: "Movies deleted successfully"
//         });
//     });
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// In the code, several operations are repeated, such as reading and writing to the movies.json file and handling common responses. These can be refactored into utility functions to make the code cleaner and more maintainable.

// Refactoring Plan:
//1. Extract File Operations: Create utility functions for reading and writing the movies.json file.
//2. Create Reusable Response Functions: Extract common response handling(e.g., error and success responses) into separate functions.
//3. Simplify CRUD Operations: Refactor each route handler to use the new utility functions and reusable response functions.


// Implement Utility Functions
// Let's start by creating utility functions for reading and writing the movies.json file and for handling responses.
// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

// // Utility function to read movies data
// const readMoviesData = () => {
//     try {
//         const data = fs.readFileSync('./data/movies.json', 'utf-8');
//         return JSON.parse(data);
//     } catch (err) {
//         throw new Error('Error reading movies data');
//     }
// };

// // Utility function to write movies data
// const writeMoviesData = (movies) => {
//     try {
//         fs.writeFileSync('./data/movies.json', JSON.stringify(movies));
//     } catch (err) {
//         throw new Error('Error writing movies data');
//     }
// };

// // Utility function to send success response
// const sendSuccessResponse = (res, data, message = 'Request successful') => {
//     res.status(200).json({
//         status: 'success',
//         message,
//         data,
//     });
// };

// // Utility function to send error response
// const sendErrorResponse = (res, statusCode, message) => {
//     res.status(statusCode).json({
//         status: 'error',
//         message,
//     });
// };


// Refactor CRUD Operations
// Now, let's refactor the CRUD routes to use these utility functions, making the code more readable and reusable.
// app.get('/api/movies', (req, res) => {
//     try {
//         const movies = readMoviesData();
//         sendSuccessResponse(res, { movies }, 'Movies retrieved successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while retrieving movies');
//     }
// });

// app.get('/api/movies/:id', (req, res) => {
//     try {
//         const { id } = req.params;
//         const movies = readMoviesData();
//         const movie = movies.find((item) => item.id === parseInt(id));

//         if (!movie) {
//             return sendErrorResponse(res, 404, 'Movie not found');
//         }

//         sendSuccessResponse(res, { movie }, 'Movie retrieved successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while retrieving the movie');
//     }
// });

// app.post('/api/movies', (req, res) => {
//     try {
//         const movies = readMoviesData();
//         const newMovie = req.body;

//         if (!newMovie.name || !newMovie.year || !newMovie.rating) {
//             return sendErrorResponse(res, 400, 'Please provide all the fields');
//         }

//         if (isNaN(newMovie.year) || isNaN(newMovie.rating)) {
//             return sendErrorResponse(res, 400, 'Year and rating should be a number');
//         }

//         newMovie.id = movies.length + 1;
//         movies.push(newMovie);
//         writeMoviesData(movies);

//         sendSuccessResponse(res, { movie: newMovie }, 'Movie added successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while adding a new movie');
//     }
// });

// app.put('/api/movies/:id', (req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const updatedMovie = req.body;
//         const movies = readMoviesData();
//         const movieIndex = movies.findIndex((movie) => movie.id === id);

//         if (movieIndex === -1) {
//             return sendErrorResponse(res, 404, 'Movie not found');
//         }

//         if (!updatedMovie.name || !updatedMovie.year || !updatedMovie.rating) {
//             return sendErrorResponse(res, 400, 'Please provide all the fields');
//         }

//         if (isNaN(updatedMovie.year) || isNaN(updatedMovie.rating)) {
//             return sendErrorResponse(res, 400, 'Year and rating should be a number');
//         }

//         movies[movieIndex] = { id, ...updatedMovie };
//         writeMoviesData(movies);

//         sendSuccessResponse(res, { movie: updatedMovie }, 'Movie updated successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while updating the movie');
//     }
// });

// app.patch('/api/movies/:id', (req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const updatedMovie = req.body;
//         const movies = readMoviesData();
//         const movieIndex = movies.findIndex((movie) => movie.id === id);

//         if (movieIndex === -1) {
//             return sendErrorResponse(res, 404, 'Movie not found');
//         }

//         if (updatedMovie.year && isNaN(updatedMovie.year)) {
//             return sendErrorResponse(res, 400, 'Year should be a number');
//         }

//         movies[movieIndex] = { ...movies[movieIndex], ...updatedMovie };
//         writeMoviesData(movies);

//         sendSuccessResponse(res, { movie: movies[movieIndex] }, 'Movie updated successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while updating the movie');
//     }
// });

// app.delete('/api/movies/:id', (req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const movies = readMoviesData();
//         const movieIndex = movies.findIndex((movie) => movie.id === id);

//         if (movieIndex === -1) {
//             return sendErrorResponse(res, 404, 'Movie not found');
//         }

//         movies.splice(movieIndex, 1);
//         writeMoviesData(movies);

//         sendSuccessResponse(res, null, 'Movie deleted successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while deleting the movie');
//     }
// });

// app.delete('/api/movies/all', (req, res) => {
//     try {
//         writeMoviesData([]);
//         sendSuccessResponse(res, null, 'All movies deleted successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while deleting all movies');
//     }
// });


// Final Refactored Code
// Here's the full refactored code with all the improvements made: 
// const express = require('express');
// const fs = require('fs');
// const app = express();

// app.use(express.json());

// // Utility function to read movies data
// const readMoviesData = () => {
//     try {
//         const data = fs.readFileSync('./data/movies.json', 'utf-8');
//         return JSON.parse(data);
//     } catch (err) {
//         throw new Error('Error reading movies data');
//     }
// };

// // Utility function to write movies data
// const writeMoviesData = (movies) => {
//     try {
//         fs.writeFileSync('./data/movies.json', JSON.stringify(movies));
//     } catch (err) {
//         throw new Error('Error writing movies data');
//     }
// };

// // Utility function to send success response
// const sendSuccessResponse = (res, data, message = 'Request successful') => {
//     res.status(200).json({
//         status: 'success',
//         message,
//         data,
//     });
// };

// // Utility function to send error response
// const sendErrorResponse = (res, statusCode, message) => {
//     res.status(statusCode).json({
//         status: 'error',
//         message,
//     });
// };

// // Routes
// app.get('/', (req, res) => {
//     res.status(200).send('Hello World');
// });

// app.get('/api/movies', (req, res) => {
//     try {
//         const movies = readMoviesData();
//         sendSuccessResponse(res, { movies }, 'Movies retrieved successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while retrieving movies');
//     }
// });

// app.get('/api/movies/:id', (req, res) => {
//     try {
//         const { id } = req.params;
//         const movies = readMoviesData();
//         const movie = movies.find((item) => item.id === parseInt(id));

//         if (!movie) {
//             return sendErrorResponse(res, 404, 'Movie not found');
//         }

//         sendSuccessResponse(res, { movie }, 'Movie retrieved successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while retrieving the movie');
//     }
// });

// app.post('/api/movies', (req, res) => {
//     try {
//         const movies = readMoviesData();
//         const newMovie = req.body;

//         if (!newMovie.name || !newMovie.year || !newMovie.rating) {
//             return sendErrorResponse(res, 400, 'Please provide all the fields');
//         }

//         if (isNaN(newMovie.year) || isNaN(newMovie.rating)) {
//             return sendErrorResponse(res, 400, 'Year and rating should be a number');
//         }

//         newMovie.id = movies.length + 1;
//         movies.push(newMovie);
//         writeMoviesData(movies);

//         sendSuccessResponse(res, { movie: newMovie }, 'Movie added successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while adding a new movie');
//     }
// });

// app.put('/api/movies/:id', (req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const updatedMovie = req.body;
//         const movies = readMoviesData();
//         const movieIndex = movies.findIndex((movie) => movie.id === id);

//         if (movieIndex === -1) {
//             return sendErrorResponse(res, 404, 'Movie not found');
//         }

//         if (!updatedMovie.name || !updatedMovie.year || !updatedMovie.rating) {
//             return sendErrorResponse(res, 400, 'Please provide all the fields');
//         }

//         if (isNaN(updatedMovie.year) || isNaN(updatedMovie.rating)) {
//             return sendErrorResponse(res, 400, 'Year and rating should be a number');
//         }

//         movies[movieIndex] = { id, ...updatedMovie };
//         writeMoviesData(movies);

//         sendSuccessResponse(res, { movie: updatedMovie }, 'Movie updated successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while updating the movie');
//     }
// });

// app.patch('/api/movies/:id', (req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const updatedMovie = req.body;
//         const movies = readMoviesData();
//         const movieIndex = movies.findIndex((movie) => movie.id === id);

//         if (movieIndex === -1) {
//             return sendErrorResponse(res, 404, 'Movie not found');
//         }

//         if (updatedMovie.year && isNaN(updatedMovie.year)) {
//             return sendErrorResponse(res, 400, 'Year should be a number');
//         }

//         movies[movieIndex] = { ...movies[movieIndex], ...updatedMovie };
//         writeMoviesData(movies);

//         sendSuccessResponse(res, { movie: movies[movieIndex] }, 'Movie updated successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while updating the movie');
//     }
// });

// app.delete('/api/movies/:id', (req, res) => {
//     try {
//         const id = parseInt(req.params.id);
//         const movies = readMoviesData();
//         const movieIndex = movies.findIndex((movie) => movie.id === id);

//         if (movieIndex === -1) {
//             return sendErrorResponse(res, 404, 'Movie not found');
//         }

//         movies.splice(movieIndex, 1);
//         writeMoviesData(movies);

//         sendSuccessResponse(res, null, 'Movie deleted successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while deleting the movie');
//     }
// });

// app.delete('/api/movies/all', (req, res) => {
//     try {
//         writeMoviesData([]);
//         sendSuccessResponse(res, null, 'All movies deleted successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while deleting all movies');
//     }
// });

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// This refactored code is more modular, easier to maintain, and follows better coding practices.