// Controller
// const createMovie = (req, res) => {
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
// }

// router
// router.post('/', createMovie);

// Here we are just using a single middleware function to handle the request. But in some cases, we may need to use multiple middleware functions to handle the request. In such cases, we can chain multiple middleware functions in the router.
// Let's see, how we can chain multiple middleware functions in the router.
// lets assume we need a middleware function to validate the request body.
// In the helper file we can create a new function called validateMovie which will validate the request body.
// const validateMovie = (req, res, next) => {
//     const newMovie = req.body;

//     if (!newMovie.name || !newMovie.year || !newMovie.rating) {
//         return sendErrorResponse(res, 400, 'Please provide all the fields');
//     }

//     if (isNaN(newMovie.year) || isNaN(newMovie.rating)) {
//         return sendErrorResponse(res, 400, 'Year and rating should be a number');
//     }

//     next();
// }

// or

// const validateMovie = (req, res, next) => {
//     const {
//         name,
//         year,
//         rating
//     } = req.body;

//     if (!name || !year || !rating) {
//         return sendErrorResponse(res, 400, 'Please provide all the fields');
//     }

//     if (isNaN(year) || isNaN(rating)) {
//         return sendErrorResponse(res, 400, 'Year and rating should be a number');
//     }

//     next();
// };

// Now we can chain the validateMovie middleware function with the createMovie middleware function in the router.
// router.post('/', validateMovie, createMovie);

// This way we can chain multiple middleware functions in the router. The order of the middleware functions is important. The request will pass through the middleware functions in the order they are defined in the router.
// In the above example, the request will first pass through the validateMovie middleware function and then the createMovie middleware function.
// This way we can chain multiple middleware functions in the router to handle the request.