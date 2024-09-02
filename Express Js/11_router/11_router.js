// Till now, in this course we have created a single file for all the routes and middlewares and api's.
// But in real world applications, we have to create multiple files for different routes and middlewares.
// For this, we use express router.
// Express router is a middleware and routing system for Express. It is used to define the routes in different files and then export them to the main file.
// Let's see how to use express router.
// const express = require('express');
// const router = express.Router();

// Now we can use the router object to define the routes.
// lets assume, we have 2 routes and separate api's for them, one for user and one for movies

// So we can create 2 different routers for them.
// const userRouter = express.Router();
// const movieRouter = express.Router();

// Why are we creating 2 routers?
// So that we can move them in separate files and folders and then import them in the main file.

// Please note that, express.Router() returns a middleware which means it itself is a middleware

// We have already learned how to use a middleware.
// To use these middlewares we have to use app.use() method.

// app.use(userRouter);
// app.use(movieRouter);

// Here, we have used both of our middlewares in the main file.
// But, there is a problem here, these middlewares will be called for each and every request.
// We only want to call these middlewares when the request is for the specific route.
// So, we have to define the routes in these middlewares.
// app.use('/api/users', userRouter);
// app.use('/api/movies', movieRouter);


// Now these middlewares will only be called when the request is for the specific route.
// Let's see how to define routes in these middlewares.
// userRouter.get('/', (req, res) => {
//     res.send('User API');
// });

// movieRouter.get('/', (req, res) => {
//     res.send('Movie API');
// });


// Now, we have defined the routes in the middlewares.
// If we need some more routes, we can define them in the same way.
// userRouter.get('/profile', (req, res) => {
//     res.send('User Profile API');
// });

// movieRouter.get('/list', (req, res) => {
//     res.send('Movie List API');
// });

// Now, we have defined 4 routes in 2 different middlewares.
// But what will be full route for these routes?
// The full route will be the combination of the route defined in the middleware and the route defined in the main file.
// For example, the full route for user profile api will be /api/users/profile
// And the full route for movie list api will be /api/movies/list


// Now what we can do is, we can create separate functions for each route and then pass them as a parameter to the router object.
// Let's see how to do it.
// const express = require('express');
// const app = express();

// const userRouter = express.Router();
// const movieRouter = express.Router();

// app.use('/api/users', userRouter);
// app.use('/api/movies', movieRouter);

// const userApi = (req, res) => {
//     res.send('User API');
// };

// const movieApi = (req, res) => {
//     res.send('Movie API');
// };

// const userProfileApi = (req, res) => {
//     res.send('User Profile API');
// };

// const movieListApi = (req, res) => {
//     res.send('Movie List API');
// };

// userRouter.get('/', userApi);
// movieRouter.get('/', movieApi);
// userRouter.get('/profile', userProfileApi);
// movieRouter.get('/list', movieListApi);

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// This is how we can define the routes in the middlewares.

// Now let's see how to move these middlewares in separate files and folders.
// lets create a folder named routes and create 2 files in it, user.js and movie.js
// user.js
// const express = require('express');
// const router = express.Router();

// const userApi = (req, res) => {
//     res.send('User API');
// };

// const userProfileApi = (req, res) => {
//     res.send('User Profile API');
// };

// router.get('/', userApi);
// router.get('/profile', userProfileApi);

// module.exports = router;


// movie.js
// const express = require('express');
// const router = express.Router();

// const movieApi = (req, res) => {
//     res.send('Movie API');
// };

// const movieListApi = (req, res) => {
//     res.send('Movie List API');
// };

// router.get('/', movieApi);
// router.get('/list', movieListApi);

// module.exports = router;

// Now, we have moved the middlewares in separate files.
// Now, we have to import these files in the main file.
// const express = require('express');
// const app = express();

// const userRouter = require('./routes/user');
// const movieRouter = require('./routes/movie');

// app.use('/api/users', userRouter);
// app.use('/api/movies', movieRouter);

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// This is how we can use express router to define the routes in separate files and folders.

// Now we create a folder called controllers and move the functions in the controllers cause our routes are getting bigger and bigger
// Where are we going to use the controllers and why are we naming the folder as controllers?
// Controllers are used to define the functions for the routes.
// We are naming the folder as controllers because it is a common practice to name the folder as controllers as we are going to use MVC pattern.
// MVC stands for Model View Controller.
// Model is used to define the schema for the database.
// View is used to define the UI.
// Controller is used to define the functions for the routes.

// Let's create a folder called controllers and move the functions in it.
// controllers/userController.js
// const userApi = (req, res) => {
//     res.send('User API');
// };

// const userProfileApi = (req, res) => {
//     res.send('User Profile API');
// };

// module.exports = {
//     userApi,
//     userProfileApi
// };


// controllers/movieController.js
// const movieApi = (req, res) => {
//     res.send('Movie API');
// };

// const movieListApi = (req, res) => {
//     res.send('Movie List API');
// };

// module.exports = {
//     movieApi,
//     movieListApi
// };

// Now, we have moved the functions in the controllers.
// Now our routes files are looking like this.

// routes/user.js
// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// router.get('/', userController.userApi);
// router.get('/profile', userController.userProfileApi);

// module.exports = router;

// Or we can just import the functions directly by destructuring
// const express = require('express');
// const router = express.Router();
// const { userApi, userProfileApi } = require('../controllers/userController');

// router.get('/', userApi);
// router.get('/profile', userProfileApi);

// module.exports = router;


// routes/movie.js
// const express = require('express');
// const router = express.Router();
// const { movieApi, movieListApi } = require('../controllers/movieController');

// router.get('/', movieApi);
// router.get('/list', movieListApi);

// module.exports = router;

// Its better to use the destructuring method to import the functions directly from the controllers.

// Now, we have moved the functions in the controllers and imported them in the routes.
// Our app file will remain the same.
// const express = require('express');
// const app = express();

// const userRouter = require('./routes/user');
// const movieRouter = require('./routes/movie');

// app.use('/api/users', userRouter);
// app.use('/api/movies', movieRouter);

// app.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

