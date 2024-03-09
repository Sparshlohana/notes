// In this chapter lets talk about another important concept in Node.js, Streams.
// Lets understand what are streams and how to work with them in Node.js and what advantages they provide.

// But first let us understand with an example what is not a stream.

const fs = require('fs');

fs.readFile('source-file.txt', 'utf-8', (err, data) => {
    fs.writeFile('destination-file.txt', data, (err) => {
        console.log('file written from source file to destination file');
    });
});

// Lets say we want to read a file, for that we can use the fs.readFile method. And we want to read the source-file.txt.
// When we use readFile method to read a file, in between, a buffer is created and the entire file is read into the buffer.
// From the source file, content in read into the read buffer, here all the content is read at once and then the buffer is passed to the callback function and then it is available in our node js application

// Now we want to write the data that we have in our data variable. For that we need to use this writeFile method. Here we need to write our data in a destination-file. To do that, it creates a write buffer in between. Then it writes all the data in that buffer, and from that buffer, data is written to that destination file. Here also everything happens at once, writeFile method writes everything to the destination file at once.

// This is how normal read and write works in Node.js. But this is not a stream. This is a normal read and write operation.

// When the readFile method reads the file, it reads the entire file, that data will be stored in memory. If the file is too large, it is still going to read all the data from the file before it makes it available to use. It might take a lot of time and memory to read the entire file. Once all the data from the large file is read then only the data will be available to use. That content will be stored in systems memory and it will be available to use. The problem here is that, since we are reading a large file, and once the file is completely read, we are going to store all that data in the systems memory. So it is going to take a lot of memory to store that data. And it is going to take a lot of time to read the entire file. This is not an efficient way to read and write files.

// But with the help of streams, we can process data piece by piece instead of reading or writing the entire data at once. Therefore, we don't need to store the entire data in the memory. We can process the data piece by piece and we can write the data piece by piece.

// For example, we want to read a file in streams, we can use the fs.readStream method. This readStream method will read the content of the source file. To do that, again a read buffer will be created where the content will be readd first. Think of this read buffer as the memory in your system where the content which we are reading in the source file will be stored. Since we are using the stream here, in between the source file and the read buffer, there will be a read stream which will be created, and using this stream, instead of reading all the content at once, we can read the content piece by piece/chunk by chunk. By using streaming, all the data is not stored in memory at once. We are reading a chunk, we are storing it in the memory and we are using it and then we are freeing the memory. Then we are reading another chunk and we are storing it in the memory and we are using it and then we are freeing the memory. This is how streaming works. This process is repeated until the entire file is processed. This is what stream is.

// Think of youtube and netflix, they are both called streaming services. They stream videos using the same principle. Here, processing is done piece by piece. The video is not downloaded at once, it is downloaded piece by piece and then it is played. Video is processed in chunks so that you can start watching videos even before the entire video is downloaded. This principle does not only apply to node js. It is common in computer science in general.
// This makes stream the perfect choice for reading and writing large files. Example, for streaming live videos, live matches, live events, or creating a streaming service like youtube or netflix and also for the data we are receiving piece by piece from an external source.

// Advantages of using streams:
// Streaming makes the data processing faster and efficient in terms of memory. Because there is no need to keep all the data in the memory at once.
// In terms of performance and time also, streaming has its advantage because we can start processing the data as soon as the first chunks arrives.

// Now we know what streams are, lets see how to implement streams in Node.js.

// In node js, there are 4 types of streams:
// Readable streams
// Writable streams
// Duplex streams
// Transform streams

// Readable and writable are most common one so we are going to focus on these two.