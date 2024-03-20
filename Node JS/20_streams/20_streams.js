// In this chapter lets talk about another important concept in Node.js, Streams.
// Lets understand what are streams and how to work with them in Node.js and what advantages they provide.

// But first let us understand with an example what is not a stream.

// const fs = require('fs');

// fs.readFile('source-file.txt', 'utf-8', (err, data) => {
//     fs.writeFile('destination-file.txt', data, (err) => {
//         console.log('file written from source file to destination file');
//     });
// });

// Lets say we want to read a file, for that we can use the fs.readFile method. And we want to read the source-file.txt.
// When we use readFile method to read a file, in between, a buffer is created and the entire file is read into the buffer.
// From the source file, content in read into the read buffer, here all the content is read at once and then the buffer is passed to the callback function and then it is available in our node js application

// Now we want to write the data that we have in our data variable. For that we need to use this writeFile method. Here we need to write our data in a destination-file. To do that, it creates a write buffer in between. Then it writes all the data in that buffer, and from that buffer, data is written to that destination file. Here also everything happens at once, writeFile method writes everything to the destination file at once.

// This is how normal read and write works in Node.js. But this is not a stream. This is a normal read and write operation.

// When the readFile method reads the file, it reads the entire file, that data will be stored in memory. If the file is too large, it is still going to read all the data from the file before it makes it available to use. It might take a lot of time and memory to read the entire file. Once all the data from the large file is read then only the data will be available to use. That content will be stored in systems memory and it will be available to use. The problem here is that, since we are reading a large file, and once the file is completely read, we are going to store all that data in the systems memory. So it is going to take a lot of memory to store that data. And it is going to take a lot of time to read the entire file. This is not an efficient way to read and write files.

// But with the help of streams, we can process data piece by piece instead of reading or writing the entire data at once. Therefore, we don't need to store the entire data in the memory. We can process the data piece by piece and we can write the data piece by piece.

// For example, we want to read a file in streams, we can use the fs.readStream method. This readStream method will read the content of the source file. To do that, again a read buffer will be created where the content will be read first. Think of this read buffer as the memory in your system where the content which we are reading in the source file will be stored. Since we are using the stream here, in between the source file and the read buffer, there will be a read stream which will be created, and using this stream, instead of reading all the content at once, we can read the content piece by piece/chunk by chunk. By using streaming, all the data is not stored in memory at once. We are reading a chunk, we are storing it in the memory and we are using it and then we are freeing the memory. Then we are reading another chunk and we are storing it in the memory and we are using it and then we are freeing the memory. This is how streaming works. This process is repeated until the entire file is processed. This is what a stream is.

// Think of youtube and netflix, they are both called streaming services. They stream videos using the same principle. Here, processing is done piece by piece. The video is not downloaded at once, it is downloaded piece by piece and then it is played. Video is processed in chunks so that you can start watching videos even before the entire video is downloaded. This principle does not only apply to node js. It is common in computer science in general.
// This makes stream the perfect choice for reading and writing large files. Example, for streaming live videos, live matches, live events, or creating a streaming service like youtube or netflix and also for the data we are receiving piece by piece from an external source.

// Advantages of using streams:
// Streaming makes the data processing faster and efficient in terms of memory. Because there is no need to keep all the data in the memory at once.
// In terms of performance and time also, streaming has its advantage because we can start processing the data as soon as the first chunk arrives.

// Now we know what streams are, lets see how to implement streams in Node.js.

// In node js, there are 4 types of streams:
// Readable streams
// Writable streams
// Duplex streams
// Transform streams

// Readable and writable are most common one so we are going to focus on these two.
// We will also talk about duplex and transform streams in high level later.

// Readable streams
// The readable streams are the one from where we can read or consume data chunk by chunk.
// Example: Request streams, Read file streams, etc.
// When we send the request to the server, the server sends the response in chunks. This is an example of a readable stream. When we send a request to the server, a readable stream is opened, through that readable stream, we get the request data in chunks. This means the data is not sent at once, it is sent in chunks.
// Another example is reading a file. When we read a file using the fs.readStream method, the file is read in chunks. This is also an example of a readable stream.

// Please note that streams are instances of event emitters class, which means all types of streams can emit and listen to named events. In case of readable streams, we can emit and listen to many events but most important 2 events are: data and end.
// The data event is emitted when there is a new piece/chunk of data available to consume. Example, when we are reading a file, the data will be read in chunks. So whenever a new chunk of data is available to use, the data event is emitted.
// The end event is emitted when there is no more data to read. Example, when we are reading a file, the end event is emitted when the entire file is read.

// When this event happens, we can react to these events accordingly.

// We also have important functions which are used on readable streams:
// The most important functions are the pipe and read functions.

// Read function is used to read data in chunks one after other.
// Pipe function allows us to plug streams together. It passes data from one stream to another. We can read data from a readable stream and write it to a writable stream simultaneously using the pipe function.


// Writable streams
// The writable streams are the one to which we can write data chunk by chunk. It's the opposite of readable streams.

// Example: Response streams, Write file streams, etc.
// When we send a request to the server, the server sends the response in chunks. This is an example of a writable stream. When we send a request to the server, a writable stream is opened, through that writable stream, we send the response data in chunks. This means the data is not sent at once, it is sent in chunks.
// Another example is writing a file. When we write a file using the fs.writeStream method, the file is written in chunks. This is also an example of a writable stream.
// If we want to sent a video to the client, we can use a writable stream to send the video in chunks just like Netflix and Youtube.

// The two most important events in writable streams are: drain and finish.
// The drain event is emitted when the buffer is empty and we can continue writing data to the stream.
// The finish event is emitted when all the data has been written to the stream.

// The most important function used on writable streams is the write and end functions.


// Duplex streams
// Duplex streams is simply a stream that is both readable and writable at the same time.

// Example: TCP socket, Websocket, etc.

// Websocket is basically a communication channel between the client and the server which works in both the direction once the connection is established. Simple example where web sockets are used is real life chat apps.

// Transform streams
// Transform streams are a type of duplex stream which can also modify or transform the data as it is read or written.

// Example: zlib

// Zlib is a software library used for data compression. It is used to compress and decompress data. It is a transform stream because it can transform the data as it is read or written.

// Let us understand how to work with streams practically.
// I have created a file called big.txt which is a large file.
// What we want is, we want to read this big.txt file and we have to send the content of this file in response to the client. Lets try to do it in conventional way first and then we will do it using streams.

// const server = require('http').createServer();
// const fs = require('fs');

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// server.on('request', (req, res) => {
//     fs.readFile(`${__dirname}/big.txt`, (err, data) => {
//         if (err) {
//             res.end("something went wrong");
//             console.log(err);
//             return;
//         }
//         res.end(data);
//     });
// });

// The problem with this code is that, when we read the big.txt file, the entire file is read at once and then it is sent to the client. This is not an efficient way to read and write files. We can see that it is taking lot of time to read the file and then send it to the client.
// What if we have tons of requests like this? It is going to take a lot of time and memory to read the entire file and then send it to the client. It may crash the server if we have too many requests like this.
// In the above example, we are not using a readable stream to read the file but for sending the response, we are using a writable stream. As we already know, the response object is a writable stream so yes, we are using a writable stream to send the response.

// The solution to this problem is to use streams.
// Here we will first create a readable stream to read the file

// const server = require('http').createServer();
// const fs = require('fs');

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// server.on('request', (req, res) => {
//     const rs = fs.createReadStream(`${__dirname}/big.txt`);

//     rs.on('data', (chunk) => {
//         res.write(chunk);
//         res.end();
//     });

//     rs.on('error', (err) => {
//         res.end(err.message);
//     });
// });

// Here, the user will immediately start receiving the data as soon as the first chunk is read.
// We are using the createReadStream method to read the file. This method returns a readable stream. We are listening to the data event on this readable stream. Whenever a new chunk of data is available to consume, the data event is emitted. We are writing the chunk of data to the response stream using the write method. We are also listening to the error event on the response stream. If there is an error, we are sending the error message to the client.

// But here you can notice that only the first chunk of data is being sent to the client and then the response is ending.
// Thats not what we want. We want to send the entire file to the client.

// We have already learned that we have 2 main functions to work with streams, the pipe and read functions and the read function has 2 main events, the data and end events.

// const server = require('http').createServer();
// const fs = require('fs');

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// server.on('request', (req, res) => {
//     const rs = fs.createReadStream(`${__dirname}/big.txt`);

//     rs.on('data', (chunk) => {
//         res.write(chunk);
//     });


//     res.on('error', (err) => {
//         res.end(err.message);
//     });

//     res.on('end', () => {
//         console.log('data has been sent to the client');
//         res.end();
//     });
// });

// Here, we have used the end event on the response stream. The end event is emitted when there is no more data to read. We are listening to the end event on the response stream. When the end event is emitted, we are telling the client that the data has been sent to the client and then we are ending the response.
// Here we can also notice that data is arriving in chunks and we are sending it to the client in chunks. But the loader of the browser is continuously loading and it won't stop.
// This is because, here what is happening is, there are two streams, the readable stream and the writable stream. The readable stream is reading the file in chunks and the writable stream is sending the data to the client in chunks. But the problem is, the readable stream is reading the file faster than the writable stream is sending the data to the client. So the readable stream is reading the file faster than the writable stream is sending the data to the client. This is why the loader of the browser is continuously loading and it won't stop. This problem is called back pressure. This is not an efficient way to send the data to the client.
// Back pressure is a situation where the readable stream is reading the file faster than the writable stream is sending the data to the client.
// The solution to this problem is to use the pipe function.

// const server = require('http').createServer();
// const fs = require('fs');

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// server.on('request', (req, res) => {
//     const rs = fs.createReadStream(`${__dirname}/big.txt`);
//     rs.pipe(res);
// });

// Here, we are using the pipe function to plug the readable stream and the writable stream together. The pipe function allows us to read data from a readable stream and write it to a writable stream simultaneously. Here, the readable stream is reading the file in chunks and the writable stream is sending the data to the client in chunks. The pipe function will take care of the back pressure problem. It will make sure that the readable stream is reading the file at the same speed as the writable stream is sending the data to the client. This is the most efficient way to send the data to the client.


// Task 1
// Create a readable stream to read the big.txt file and write the content of the file to the destination-file.txt file using the pipe function without creating a server.
// Solution
// const fs = require('fs');
// const rs = fs.createReadStream(`${__dirname}/big.txt`);
// const ws = fs.createWriteStream(`${__dirname}/destination-file.txt`);
// rs.pipe(ws);


// Task 2
// Create a readable stream to read the big.txt file and write the content of the file to the destination-file.txt file using the pipe function. Also, listen to the finish event on the writable stream and log a message to the console when the finish event is emitted without creating a server.
// Solution
// const fs = require('fs');
// const rs = fs.createReadStream(`${__dirname}/big.txt`);
// const ws = fs.createWriteStream(`${__dirname}/destination-file.txt`);
// rs.pipe(ws);

// ws.on('finish', () => {
//     console.log('data has been written to the destination file');
// });


// Task 3
// Create a server and send the content of the big.txt file to the new file using the pipe function.
// Solution
// const server = require('http').createServer();
// const fs = require('fs');

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// server.on('request', (req, res) => {
//     const rs = fs.createReadStream(`${__dirname}/big.txt`);
//     const ws = fs.createWriteStream(`${__dirname}/destination-file.txt`);
//     rs.pipe(ws);

//     ws.on('finish', () => {
//         console.log('data has been written to the destination file');
//     });
// });


// Task 4
// Create a server and send the content of the big.txt file to the client using the pipe function.
// Solution
// const server = require('http').createServer();
// const fs = require('fs');

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

// server.on('request', (req, res) => {
//     const rs = fs.createReadStream(`${__dirname}/big.txt`);
//     rs.pipe(res);
// });


// Task 5
// Read this file using the fs.createReadStream method and send the content of the file to the console using the pipe function.
// Solution
// const fs = require('fs');
// const rs = fs.createReadStream(`${__dirname}/big.txt`);
// rs.pipe(process.stdout);

// Explanation:
// Here process.stdout is a writable stream. We are using the pipe function to plug the readable stream and the writable stream together. The pipe function allows us to read data from a readable stream and write it to a writable stream simultaneously. Here, the readable stream is reading the file in chunks and the writable stream is sending the data to the console in chunks. The pipe function will take care of the back pressure problem. It will make sure that the readable stream is reading the file at the same speed as the writable stream is sending the data to the console. This is the most efficient way to send the data to the console.