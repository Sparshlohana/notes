// In this chapter, we will learn about params middleware in Express.js.
// Params middleware is used to extract the parameters from the URL.
// const router = require('express').Router();

// router.param('id', (req, res, next, value) => {
//     console.log('The value of Id is ', value);
//     next();
// });

// router.get('/user/:id', (req, res) => {
//     res.status(200).json({
//         message: 'User Id is extracted'
//     });
// });

// router.get('/users', (req, res) => {
//     res.status(200).json({
//         message: 'Users are listed'
//     });
// });

// module.exports = router;

// Here, we have created a router object and defined a param middleware using the param() method.
// The param middleware is used to extract the parameters from the URL.
// The param middleware is executed before the request handler function.
// The param middleware will only be executed when the URL contains the parameter id.
// The value of the parameter id is extracted using the param middleware.

// If we hit the URL http://localhost:3000/user/123, the output will be:
// The value of Id is 123

// But if we hit the URL http://localhost:3000/users, the middleware will not be called.


// Lets use it in our own application

// This is our already existing code in our movieController.js file
// const getSingleMovie = (req, res) => {
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
// }

// const updateMoviePut = (req, res) => {
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
// }

// const deleteSingleMovie = (req, res) => {
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
// }

// These are the functions which contains the use of req.params.id
// Instead of using req.params.id in each function we can use a middleware to extract the id from the URL and return an appropriate response

// In helper file in the utils folder, add the following code
// const checkId = (req, res, next, value) => {
//     console.log('The value of Id is ', value);

//     let movies = moviesData.find((item) => item.id === parseInt(value));

//     if (!movies) {
//         return sendErrorResponse(res, 404, 'Movie not found');
//     }

//     next();
// };

// In the routes folder, import this checkId function and use it in the movieRouter.js file
// const router = require('express').Router();
// const { checkId } = require('../utils/helpers');

// router.param('id', checkId);

// router.get('/:id', getSingleMovie);
// router.put('/:id', updateMoviePut);
// router.delete('/:id', deleteSingleMovie);

// module.exports = router;

// And in the controller file, remove the unnecessary code

// const getSingleMovie = (req, res) => {
//     try {
//         const { id } = req.params;
//         const movies = readMoviesData();
//         const movie = movies.find((item) => item.id === parseInt(id));

//         sendSuccessResponse(res, { movie }, 'Movie retrieved successfully');
//     } catch (error) {
//         sendErrorResponse(res, 500, 'An error occurred while retrieving the movie');
//     }
// }

// const updateMoviePut = (req, res) => {
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
// }

// const deleteSingleMovie = (req, res) => {
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
// }

// this is how we can use params middleware in our application.