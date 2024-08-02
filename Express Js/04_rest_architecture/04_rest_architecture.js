// Rest architecture is the most popular architecture for building web apis.
// Rest stands for REpresentational State Transfer.

// When we build an API, it can be build by us, or it can be build by others.
// We need to make the process of consuming the API as simple as possible.

// To build a RESTful API, (apis which follow the REST architecture), we need to follow some rules.
// 1. Separate the API into logical resources.
// A resource is an object or representation of something, which has data associated to it. Any information that can be named can be a resource.
// eg. a photo, a user, a comment, a status update, a video, etc.

// 2. Expose structured, resource-based URLs.
// These resources should then be exposed, i.e, they should be available using structured resource-based URLs that the client can interact with.
// eg. https://sparshlohana.com/addMovie
// This is a url.
// addMovie is an api endpoint.
// There can be many endpoints like /addMovie, /deleteMovie, /updateMovie, /getMovie, etc.
// Each of these endpoints will send data back to the client or perform some action.
// eg. /getMovie will send the data of the movie to the client.

// There is something wrong with these endpoints.
// Endpoints should only be nouns, not verbs.
// All theses endpoints contains verbs.
// To perform different actions like add, delete, update, get, etc, we should use HTTP methods.

// 3. Use HTTP methods explicitly.
// Lets understand with an example.
// Here, /getMovie is an endpoint. It gets data from the db and sends it to the client.
// What we can do here is, we can send the endpoint as /movies and use the HTTP method GET.
// Here we don't have a verb, we only have a noun.
// In simple words, when client hits get request on /movies, it will get the data of the movie.
// It is common practice to use the resource name in plural form.

// What if we want only one particular movie?
// For that, we can use /movie/:id
// Here, :id is a parameter.
// This is a dynamic endpoint.
// We can get the data of the movie with the id passed in the url.
// eg. /movie/1 will get the data of the movie with id 1.

// We can also use search queries
// We can also use name of the movies instead of the id or we can use some other unique identifiers as out requirements
// When I hit a get request to /movie/1, I will get the data of the movie with id 1.
// So we can say that get http method is used to read the data.

// If the client wants to create a new movie then post http method is used.
// A post request is used to send data to the server.
// We can use post method to create a new movie.
// In case of post request, usually no id is passed in the url as the server will automatically generate the id for the new movie.
// If you notice, the endpoint is still /movie for both get and post requests, the only difference is the http method.
// If, client hits a post request to /movie, then a new movie will be created and if client hits a get request to /movie, then the data of all the movies will be sent to the client.

// We can update a particular movie, for this either we can use put or patch http method.
// The difference between put and patch is that put is used to update the entire movie and patch is used to update only some fields of the movie. Both of them has the ability to send data to the server. But with put or patch, we can update an existing resource.
// As we have already discussed, we can use /movie/:id to update a particular movie.

// Finally, we can delete a movie using delete http method.
// We also use /movie/:id to delete a particular movie.
// As we need an id to delete a movie, we can use delete http method to delete a particular movie.

// These are the five main http methods that we use to interact with the server.
// With all these methods, we can perform all the CRUD operations.
// CRUD stands for Create, Read, Update, Delete.

// There are cases which are not related to CRUD operations like login, search, etc.
// For these cases, we can use custom endpoints.

// Lets say, we want to create an endpoint where we want to get all the movies a user has rented.
// For this, we can create an API endpoint like /getMoviesByUsers.
// But this is not a good practice.
// It contains a verb.
// We can use /user/:id/movies
// /user/2/movies will get all the movies rented by the user with id 2.

// 4. Send JSON data in response
// When we hit an http request to the server with any method like get, post, put, patch, delete, etc, the data that we send back to the client in the response body or the data that we receive from the client in the request body should be usually in JSON format.

// JSON stands for JAVA SCRIPT OBJECT NOTATION.
// It is a lightweight data-interchange format which is heavily used in web apis for any programming language.
// We can send the data which we received from the database as it is, but we usually do some response formatting before sending the data to the client.
// There are many ways to format the response.
// We will use JSend format.
// The format is as follows:
// {
//     status: "success",
//     data: {
//         movies: [
//             {
//                 id: 1,
//                 name: "movie1"
//             },
//             {
//                 id: 2,
//                 name: "movie2"
//             }
//         ]
//     }
// }
// In this format, we have a status key which can have two values, success or error or it can send 0 or 1. Here, 0 can be used for error and 1 can be used for success.
// We have a data key which contains the data of the movies.
// The data key can have many keys like movies, users, etc.
// We can add more properties but for now, we will only use status and data.
// There are other formats like JSON:API, OData JSON Protocol, you can explore them on your own

// 5. API must be stateless
// What do you mean by stateless?
// It means, All the state is handled by the client. This means that each request must contain all the information necessary to process a certain request.
// The server should not store any information about the client session.
// It should not have to remember previous requests.
// Eg. If a client sends a request to get the data of the movie with id 1, then the server should not remember that the client has requested the data of the movie with id 1.
// If the client wants the data of the movie with id 1 again, then the client should send the request again.
// In case of pagination, the server should not remember the page number of the client.
// The client should send the page number in each request.