// We have learned that we use node js for creating a server side application/backend application.

// Before we start creating applications with node and express, let's first try to understand what frontend and backend development means. In order to distinguish between frontend and backend development of the website, remember that:
// Frontend development means everything that happens on the client, i.e, web browser. It is all about designing and building a final website that is visible to the user. It is called as frontend because it is basically about designing the UI and it will be in front of the user that he can see and interact with. Frontend development requires basic technologies like HTML, CSS, and JavaScript. These three technologies together forms the frontend of the website.
// In modern frontend stack, developers also add many other frontend frameworks and libraries like react, angular, vue, etc. These technologies helps frontend easier and faster to develop. All these technologies which a developer decides to use for frontend development are called as frontend stack.

// Backend development means everything that happens on the server. In simple terms, backend development means everything that is invisible to the user. Since we are talking about server side now, lets understand what does server really means?
// Server is a computer that is connected to the internet which can be accessed by other computers or devices. A server stores a websites static files like HTML, CSS, images, etc.
// It also runs am HTTP server which is capable of understanding URLs, receiving requests and also delivering responses. This http server is what communicates with the browser/client using the requests and responses. You can think of it as a bridge between the client and the server.
// A simple server which serves static files is called as a static server. This is because the server is only serving the static files and not doing any other operations. If you want to host a simple websites which justs has html, css, images, etc, then you can use a static server.
// If you want to create a dynamic website that has a backend application which can talk to the database and use that data and display to the user, in that case, we need to use a server that is capable of running dynamic backend application. This backend application contains the code for processing data which we receive from the frontend and also for sending responses and handling the requests. These backend applications are created using technologies like php, asp.net or node js, or any other backend technologies. This is a dynamic server. On this server, we have our backend application running, we also have an http server and of course the static files and all of them now are talking to each other.

// Usually, when we build a dynamic website, we also use a database. This database can be accessed by the backend application to store and retrieve data. So a backend application also has code to talk to the database. In the database, we store information like user details, product details, application data or some text to fill up the website template, etc. Keep in mind that in any serious web application, there will always be a database which stores application related data and the backend application is capable of talking to the database.
// Example: In the backend application, we can have the logic to create user and store it in the db, or we can have logic to fetch all the products from the db and send it to the frontend, etc.

// So for a backend stack, we need a programming language to write the backend code, a server to run the backend code and an http server to communicate with the client. We also need a database to store the data. All these technologies together forms the backend stack.
// We'll be using node js as the programming language, express js as the server, and mongodb as the database. We'll also use mongoose which is a library to talk to the mongodb database. We'll also use a http server which is inbuilt in express js.

// We talked about frontend and backend development. Now let's talk about full stack development. Full stack development means a developer who is capable of working on both frontend and backend development. A full stack developer can work on both frontend and backend technologies. He can create a website from scratch, design the UI, write the backend code, talk to the database, etc. A full stack developer is capable of creating a complete website from scratch.