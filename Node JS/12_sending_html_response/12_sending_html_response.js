// Currently in our node application, we are sending the response as a string. But we can also send the response as an HTML file.
// Instead of sending the response as a string, we can send the response as an HTML file.

// We can use the fs module to read the HTML file and then send the response.

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const index = fs.readFileSync(`${__dirname}/index.html`);
//     const about = fs.readFileSync(`${__dirname}/about/about.html`);

//     if (url === '/') {
//         res.end(index);
//     } else if (url === '/about') {
//         res.end(about);
//     } else {
//         res.end("<h1>404 Page Not Found</h1>");
//     }

// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// Here we have sent index.html for the home page and about.html for the about page.
// But you might have noticed that when we use external css file, the css does not work.
// This is because the HTML file is not able to find the css file.
// Here node js is not able to find this style.css file and this is because of the way, how node js works.
// In node js, we cannot directly use static files like css, images, etc.

// We will learn how to use static files soon. But for now, we can use the following code to send the response as an HTML file.

// But if we use internal css and internal js, they will work just like we did in our index.html file.

// Let us create a navbar and use it to navigate between some pages.
// We will create a navbar in the index.html file and then use it to navigate between the home, about, and contact pages.

// Now we have created our index.html file with a navbar.
// Now we need to dynamically change the content of the page when we click on the navbar.

// The content we want to change in html should be a placeholder.
// <div>
// <h1>I am Home page</h1>
// </div>

// Here, this is the content of the home page, now to apply placeholder, we will do this:
// <div>
//     <h1>{{%CONTENT%}}</h1>
// </div>
// Here, we have used {{%CONTENT%}} as a placeholder.
// And then we will replace this placeholder with the content of the page.
// Please note that we can use any placeholder, the CONTENT could be anything.
// But make sure when you are using placeholder, the same name should be used in back-end code like this:
// To change the content of the page, we will use the replace method of the string.

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const navBarHtml = fs.readFileSync(`${__dirname}/navbar/index.html`, 'utf-8');

//     if (url === '/') {
//         res.end(navBarHtml.replace("{{%CONTENT%}}", "I am Home page"));
//     } else if (url === '/about') {
//         res.end(navBarHtml.replace("{{%CONTENT%}}", "I am About page"));
//     } else if (url === '/contact') {
//         res.end(navBarHtml.replace("{{%CONTENT%}}", "I am Contact page"));
//     }
//     else {
//         res.end(navBarHtml.replace("{{%CONTENT%}}", "404 Page Not Found"));
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// Here we are just replacing the placeholder with the content of the page.
// Now we can use the navbar to navigate between the pages.


// Task 1
// Create a navbar and show the dynamic content which you studied earlier.
// Solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const navBarHtml = fs.readFileSync(`${__dirname}/navbar/index.html`, 'utf-8');

//     if (url === '/') {
//         res.end(navBarHtml.replace("{{%CONTENT%}}", "I am Home page"));
//     } else if (url === '/about') {
//         res.end(navBarHtml.replace("{{%CONTENT%}}", "I am About page"));
//     } else if (url === '/contact') {
//         res.end(navBarHtml.replace("{{%CONTENT%}}", "I am Contact page"));
//     }
//     else {
//         res.end(navBarHtml.replace("{{%CONTENT%}}", "404 Page Not Found"));
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });


// Task 2
// Create a route about and contact and send about.html and contact.html as a response and now these pages should be linked with the working navbar.
// Solution

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const navBarHtml = fs.readFileSync(`${__dirname}/navbar/index.html`, 'utf-8');
//     const about = fs.readFileSync(`${__dirname}/about/about.html`);
//     const contact = fs.readFileSync(`${__dirname}/contact/contact.html`);

//     if (url === '/') {
//         res.end(navBarHtml);
//     } else if (url === '/about') {
//         res.end(about);
//     } else if (url === '/contact') {
//         res.end(contact);
//     }
//     else {
//         res.end(navBarHtml.replace("{{%CONTENT%}}", "404 Page Not Found"));
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });


// Task 3
// Create a 404 page and send 404.html as a response.
// Solution
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const navBarHtml = fs.readFileSync(`${__dirname}/navbar/index.html`, 'utf-8');
//     const about = fs.readFileSync(`${__dirname}/about/about.html`);
//     const contact = fs.readFileSync(`${__dirname}/contact/contact.html`);
//     const notFound = fs.readFileSync(`${__dirname}/404/404.html`);

//     if (url === '/') {
//         res.end(navBarHtml);
//     } else if (url === '/about') {
//         res.end(about);
//     } else if (url === '/contact') {
//         res.end(contact);
//     }
//     else {
//         res.end(notFound);
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });


// Task 4
// Create an index.html while which should have different styles.css and script.js files and then send the index.html as a response. Does the css and js work?
// Solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const index = fs.readFileSync(`${__dirname}/index.html`);

//     if (url === '/') {
//         res.end(index);
//     } else {
//         res.end("<h1>404 Page Not Found</h1>");
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

//  No the css and js will not work because we are not able to use static files in node js. We will learn how to use static files in the next section.


// Task 5
// Create an index.html while which should have an image and then send the index.html as a response. Does the image work? But what if you have passed the url instead of relative path? Will the image work?
// Solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const index = fs.readFileSync(`${__dirname}/index.html`);

//     if (url === '/') {
//         res.end(index);
//     } else {
//         res.end("<h1>404 Page Not Found</h1>");
//     }
// });

// server.listen(8000, () => {
//     console.log("Server is running on port 8000");
// });

// Test and tell me the answer.