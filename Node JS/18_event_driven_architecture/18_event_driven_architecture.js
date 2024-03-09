// In this chapter, lets dive deep in node js and learn about event driven architecture.

// What is Event Driven Architecture?
// In an event-driven architecture, we have three main players:
// 1. Event emitters
// 2. Event listeners
// 3. Event handlers

// Event Emitters
// An event emitter emits named events when something important happens in our application.
// Eg: A server emits an event each time a request is received, a file stream emits an event when the file is opened, read, or closed, etc.
// Whoever is responsible for emitting events, it is called an event emitter.

// Event Listeners
// When an event is emitted/raised, event can be picked up by event listeners.
// Basically, an even listener is going to listen an event/wait for an event to happen.
// These event listeners will then fire up the callback function attached to the event listener.

// Event Handlers
// This callback function is called an event handler.
// It is the code that is executed in response to the event being emitted.


// So here, on one hand we have event emitters and on other, we have event listeners that will react to emitted events by calling the event handlers function.

// Most of the node js core like http, fs and timers are built around an event driven architecture. We can also use this architecture as our advantage in our own code.

// Lets understand event driven architecture with an example.
// Lets understand, how node uses event driven architecture to handle http requests.

// const server = require('http').createServer();

// server.listen(8000, () => {
//     console.log('Listening to requests');
// });

// server.on('request', (req, res) => {
//     res.end('Request received');
// });

// When we want to create a server, we use createServer method of http module and then we assign it to a variable called server cause the createServer method returns a server object.
// This implementation which we did right now is bit different from the previous implementation of creating a server but it works the same way.
// Whenever the request is going to hit the server, the server is going to emit a named event called 'request'.
// So here, 'request' is the named event and the server is the event emitter because here, server is the one who is going to emit the request event.
// Now, when the named event is emitted, we can listen to it using the on method. Here we are using the on method on the server object to listen to the request event.
// To this on method, we pass two arguments, the first one is the name of the event that we want to listen to and the second one is the callback function that we want to execute when the event is emitted.
// Since this on method is waiting for the event to happen, it is listening to the request event, so the on method is an event listener.
// To this on method, we pass the second argument as a callback function. This callback function will be called whenever the request event is emitted. So basically, this callback function is going to handle the request event by executing the code inside it. So in this case this callback function is an event handler.

// Let us use the event driven architecture to do something more interesting.

const http = require('http');

const server = http.createServer();

server.listen(8000, () => {
    console.log('Listening to requests');
});

server.on('request', (req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else if (req.url === '/about') {
        res.end('Here is our short history');
    } else {
        res.end('Page not found');
    }
    res.end('Request received');
});

// This is a simple server that listens to the requests and sends back the response based on the url.
// Here, we are using the event driven architecture to handle the requests.


// Please note that, here we are able to listen to events on server objects because the server object is an instance of the EventEmitter class.
// The server object inherits all the methods and properties of the EventEmitter class. So, we can use the on method to listen to the events emitted by the server object.

// In this way, whichever object is an instance of the EventEmitter class, we can use the event driven architecture to handle the events emitted by that object.


// The Event Emitting and Event Listening logic is called as Observer Pattern in javascript programming in general.
// So the idea here is, there is an observer (in this case, an event listener) that keeps waiting/observing for the event to happen that the listener is interested in. The subject (in this case, the event emitter) is the one that is going to emit the event and the observer is going to react to it.
// The opposite of this pattern is is simply the function calling other function which is something that we have been doing all along in our code. But the observer pattern is a bit more advanced and it is a very important pattern in javascript programming in general. It is used in many other places in javascript programming as well. So, it is a good idea to understand this pattern well.

// The observer pattern is designed to react rather than to call, that is because there is a huge benefits of using this architecture which is the fact that everything is more decoupled and more flexible. So, it is a good idea to use this pattern whenever we can.

// Also, using an event driven architecture makes it way more straightforward to react multiple events at the same time. We can have multiple event listeners listening to the same event and they can all react to it in their own way. This is something that is not possible with the function calling other function pattern.