// We are creating backend applications right now with the help of Node Js.

// Now is the time to learn how it works behind the scenes.

// If you know how web actually works, it will be easy for you to understand backend.

// In the web, we have a client and a server.
// And let us assume that in the server we are hosting three applications:
// 1. Node JS application
// 2. Java application
// 3. Php application
// But we already know that every application has a different port number. So let us assume that Node JS application is running on port 8000, Java application is running on port 4000 and Php application is running on port 3000.
// Now we want to access node js application from the browser.

// So in our example, the browser is the client and the node js application is the server. But there can be other clients as well like mobile applications, desktop applications, etc.
// Now to access this node js application in our browser, we have to type the url of the node js application in the browser. Let us assume that the node application is hosted on a server with URL: www.mynodejsapp.com. So we will type this url in the browser and hit enter.
// If we want to visit the about page of the node js application, we will type www.mynodejsapp.com/about in the browser and hit enter.
// When I press enter, the browser will send a request to the server. And the server will send a response web page back to the browser. And the browser will render the response on the screen.

// Here what is happening is that the browser is sending a request to the server and the server is sending a response back to the browser. And this is called the request response cycle and also known as the client server architecture.

// Most of the thing about backend revolves around this architecture.

// It looks simple but there are a lot of things happening behind the scenes and it is not that simple as it looks.

// First of all when the client types the url in the browser and hits enter, how does the browser know where to send the request? How does the browser know where the server is located? To which port number the request should be sent?
// The domain name that we type in the browser is actually a human readable name and it is not the actual address of the server. It's just a nice name that is easy for us to remember. In reality, servers does not even have a name, it has something known as an IP address. And every server has a unique IP address.
// Example: our node js application is hosted on a server with IP address: 123.456.789.123.
// So when we type www.mynodejsapp.com in the browser, we need a way to convert this name to an IP address where the application is hosted. And this is done by something known as DNS (Domain Name System). So when we type www.mynodejsapp.com in the browser, the browser will send a request to the DNS server and the DNS server will send back the IP address of the server where the application is hosted. When we have an ip address, A tcp socket connection is established between the client and the server. And then an http request is sent to the server. Http stands for Hypertext Transfer Protocol and it is a protocol that defines how the communication between the client and the server should happen.

// What is a TCP socket connection?
// A TCP (Transmission Control Protocol) socket connection refers to a communication link established between two devices over a TCP/IP network
// With the help of this TCP socket connection, the client and the server are connected.

// What is a protocol?
// A protocol is a set of rules that defines how two entities should communicate with each other.

// What is http?
// Http stands for Hypertext Transfer Protocol and it is a protocol that defines how the communication between the client and the server should happen.

// These http requests are of different types. For example: GET, POST, PUT, PATCH, DELETE, etc.
// GET is used to get data from the server.
// POST is used to create data on the server.
// PUT is used to update data on the server (PUT is used to update the entire resource).
// PATCH is used to update data on the server (PATCH is used to update a part of the resource).
// DELETE is used to delete data from the server.

// There are other methods as well but we will be talking about them later.

// The http request also has information about the resource that we want to access. The information includes the path of the resource, the query string parameters, the headers and the body of the request.
// The path of the resource is the path that we type in the browser. For example: www.mynodejsapp.com/about. Here the path is /about.
// The query string parameters are the parameters that we pass in the url. For example: www.mynodejsapp.com/about?name=John&age=30. Here the query string parameters are name and age.
// The headers are the meta data about the request. For example: the type of the browser, the type of the operating system, etc.
// The body of the request is the data that we send to the server. For example: the data that we send when we submit a form.

// Let us assume that we have to create a new user in the database. So we will send a POST request to the server with the user data in the body of the request. And then the server will create a new user in the database and send back a response to the client.

// Please keep in mind that we do not have control over the request we are sending like what format the request should be in, what headers should be there, etc. All these things are handled by the browser.

// We also have something known as https. Https stands for Hypertext Transfer Protocol Secure. It is the same as http but it is secure. It means that the data that we send to the server is encrypted. And it is used when we have to send sensitive data to the server like passwords, credit card information, etc.
// The main difference between http and https is that in https, the data is encrypted using something known as SSL (Secure Sockets Layer) or TLS (Transport Layer Security) before sending it to the server. And then the server will decrypt the data and then process the request.

// Now that we have sent the request to the server, the server will process the request and then send back a http response to the client. Http response also contains a lot of information like the status code, the headers and the body of the response.
// The status code is a number that represents the status of the request. For example: 200 means OK, 404 means not found, 500 means internal server error, etc.
// The headers are the meta data about the response. For example: the type of the browser, the type of the operating system, etc.
// The body of the response is the data that we get from the server. For example: the html, css, javascript, images, etc.

// It is the work of backend developers toto make sure that the server is sending the correct response to the client.

// When the browser receives the response, it will receive the html, css, javascript, images, etc. Browser will parse the html and render it on the screen. And then it will parse the css and apply the styles to the html. And then it will parse the javascript and execute it.

// This is how the web works.