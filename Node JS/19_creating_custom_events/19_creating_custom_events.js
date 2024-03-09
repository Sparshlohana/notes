// To work with events in node js, you need to import the events module
// It is a core module/ built-in module of node js.
// To import the events module, you can use the require() method.
// const events = require('events');

// This event module gives us an EventEmitter class.
// we can create an instance of this class and use it to work with events.

// let eventEmitter = new events.EventEmitter();
// Here eventEmitter is an instance of EventEmitter class.
// In the last lecture we learned that an event emitter also emits some named events and when that event is emitted, we can listen to those events.

// Using the eventEmitter instance, we can emit events and listen to those events.
// eventEmitter.emit('userCreated');
// The above line will emit an event called userCreated.

// Now we can listen to this event using the on() method.
// eventEmitter.on('userCreated', () => { });

// The on() method takes two arguments.
// 1. The name of the event that you want to listen to.
// 2. A callback function that will be called when the event is emitted.

// The callback function will be called when the event is emitted.
// So for now, we can just log a message to the console.

// eventEmitter.on('userCreated', () => {
//     console.log('A new user has been created!');
// });

// Let us see the complete code to understand how to work with events in node js.
// const events = require('events');
// const http = require('http');

// let eventEmitter = new events.EventEmitter();

// eventEmitter.emit('userCreated');

// eventEmitter.on('userCreated', () => {
//     console.log('A new user has been created!');
// });

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// })


// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });


// If we run the above code, what do you think will be the output?
// The output will be:
// Server is running on port 8000

// There will be no output for the event that we emitted.
// Why is that?
// Because we emitted the event before we started listening to it.

// So we need to emit the event after we start listening to it.
// Let us move the emit() method after the on() method.

// const events = require('events');
// const http = require('http');

// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('userCreated', () => {
//     console.log('A new user has been created!');
// });

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// })

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// eventEmitter.emit('userCreated');

// Now we can see that the userCreated event is emitted after we started listening to it.

// You can notice that the on() method is very similar to the addEventListener() method in the browser.

// In the last chapter, we also learned that we can set multiple listeners for the same event.
// We can do the same thing here as well.
// we can listen to the same event multiple times.

// const events = require('events');
// const http = require('http');

// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('userCreated', () => {
//     console.log('A new user has been created!');
// });

// eventEmitter.on('userCreated', () => {
//     console.log('Another user has been created!');
// });

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// })

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// eventEmitter.emit('userCreated');

// Here we have two listeners for the userCreated event.

// We can even create more events for userUpdated, userDeleted, etc.

// What if we want some parameters to be passed to the callback function of the event listener?
// We can do it like this

// const events = require('events');
// const http = require('http');

// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('userCreated', (id, name) => {
//     console.log(`A new user of ${id} and ${name} has been created!`);
// });

// eventEmitter.on('userCreated', (id, name) => {
//     console.log(`Another user of ${id} and ${name} has been created!`);
// });

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// })

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// // While emitting the event, we can pass the parameters to the callback function.
// eventEmitter.emit('userCreated', 1, 'John');

// If you don't pass the parameters, The value of the parameters will be undefined.

// You can notice that, in the terminal, the messages are logged in the order in which the listeners are added which means the first listener is called first and then the second listener is called.
// Every time we run our app.js file and whenever the userCreated event is emitted, the listeners are called in the same order. This is a normal behavior of the event emitter.
// If we have multiple listeners for the same event, they will run synchronously in the order in which they are added.
// This small example is just to show you how to work with events in node js.

// But in real world projects, its a best practice to create a new class which is inherited from the node js event emitter class and then use that class to work with events.

// We will learn about it later.

// You can notice that when we were emitting an event in server object, we were not using the event emitter object. Here we are emitting the event manually using the event emitter object. But in case of server object, it is emitting the event automatically. The server object does it on its own. We don't have to emit the event manually.

// Task 1
// Create an event for update user. When the event is emitted, it should log a message to the console.
// Solution
// const events = require('events');
// const http = require('http');

// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('userUpdated', (id, name) => {
//     console.log(`A user of ${id} and ${name} has been updated!`);
// });

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// })

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// eventEmitter.emit('userUpdated', 1, 'John');


// Task 2
// Create an event for delete user. When the event is emitted, it should log a message to the console.
// Solution
// const events = require('events');
// const http = require('http');

// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('userDeleted', (id, name) => {
//     console.log(`A user of ${id} and ${name} has been deleted!`);
// });

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// })

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// eventEmitter.emit('userDeleted', 1, 'John');


// Task 3
// Create an event for user login. When the event is emitted, it should log a message to the console.
// Solution
// const events = require('events');
// const http = require('http');

// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('userLogin', (id, name) => {
//     console.log(`A user of ${id} and ${name} has been logged in!`);
// });

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// })

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// eventEmitter.emit('userLogin', 1, 'John');


// Task 4
// Now modify the above code to emit the event after the server is started.
// Solution
// const events = require('events');
// const http = require('http');

// let eventEmitter = new events.EventEmitter();

// eventEmitter.on('userLogin', (id, name) => {
//     console.log(`A user of ${id} and ${name} has been logged in!`);
// });

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// })

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
//     eventEmitter.emit('userLogin', 1, 'John');
// });

// Now the event will be emitted after the server is started.


// Task 5
// Modify the above code to make sure only a user with correct credentials can login. You can define the credentials in the code itself.
// Solution
// const events = require('events');
// const http = require('http');

// let eventEmitter = new events.EventEmitter();

// let credentials = {
//     id: 1,
//     name: 'John',
//     password: '1234'
// }

// eventEmitter.on('userLogin', (id, name, password) => {
//     if (id === credentials.id && name === credentials.name && password === credentials.password) {
//         console.log(`A user of ${id} and ${name} has been logged in!`);
//     } else {
//         console.log('Invalid credentials');
//     }
// });

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// })

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
//     eventEmitter.emit('userLogin', 1, 'John', '1234');
// });