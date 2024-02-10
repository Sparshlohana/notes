// Lets create a json file named fruits.json and add some data to it.

// The data you can see in the json file is the json data.
// Json stands for JavaScript Object Notation.
// Json is a data format just like xml.
// In json data format, we store data just like javascript objects.
// The data is stored in key value pairs.
// But unlike js objects, both the key and value are enclosed in double quotes.


// Why are we talking about json data?
// When we create real world applications using node js, we'll be having a database server. And if we are using a no-sql database like mongodb, where the data is stored in json format, we'll be using json data a lot.
// When we fetch data from the mongodb database, we'll be getting the data in json format.
// Then we'll have to transform the json data into javascript objects and then display the data in the web page.

// So in this chapter, you'll get the overview of how json data works.

// Lets create a server and read the json data at /fruits route.
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === '/fruits') {
//         fs.readFile(`${__dirname}/fruits.json`, 'utf-8', (err, data) => {
//             if (err) throw err;
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(data);
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });

// Here, you can notice that we are reading the fruits.json file using the fs module, then we are using the async readFile method to read the file, and then we are sending the data to the client using the res.end method.
// Notice that for sending json data, we are using the 'application/json' content type.

// When we are creating a web application, we generally do not send json data. We send html data at that time, but when we are creating apis, we send json data.
// Here the data we have sent is in json format which means that we have created an api that sends fruits data in response.

// Now what if we want to send html data at our /fruits route and display data on that page.

// Let us modify the code to do so.

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === '/fruits') {
//         fs.readFile(`${__dirname}/fruits.json`, 'utf-8', (err, data) => {
//             if (err) throw err;
//             let fruits = JSON.parse(data);
//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(data);
//         });
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });

// Here, we have used the JSON.parse method to convert the json data into javascript objects.
// Here we have an issue, whenever someone requests the /fruits route, the fruits.json file is read and sent to the client.
// But what if we have a lot of requests for the /fruits route, then the file will be read again and again.
// This is not efficient.

// So, we can read the file once and store the data in a variable and then send the data to the client whenever the /fruits route is requested.

// Lets modify the code to do so.
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const fruits = fs.readFileSync(`${__dirname}/fruits.json`, 'utf-8');
//     const fruitsData = JSON.parse(fruits);
//     if (req.url === '/fruits') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(`You are at fruits route`);
//         console.log(fruitsData);
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });

// Now we can see the data in the console. We can use this data to display the data on the web page.
// But we are not sending the data to the client. We are just sending a message to the client.
// We have to send the json data to the client and then display the data on the web page.

// Lets create a fruits.html file and display the data on the web page.

// Now we can read the html file and send it to the client.

// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const fruits = fs.readFileSync(`${__dirname}/fruits.json`, 'utf-8');
//     const fruitsData = JSON.parse(fruits);
//     const fruitsPage = fs.readFileSync(`${__dirname}/fruits.html`, 'utf-8');

//     if (req.url === '/fruits') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(fruitsPage);
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// Here we have sent the html file to the client. Now we can display the data on the web page.

// We can see that in our html. The values are static and we have to change the values in the html file to display the data, but what we actually want is, we have to loop over the fruitsData and for each iteration, we want to use properties of fruits object to display the data.

// Let us create placeholders in the html file and then replace the placeholders with the actual data.
// This is the default html file.
{/* <div>
    <h1>Fruits Title</h1>
    <div class="fruitsDescription">
        <div>
            <span>Fruit Color:</span>
            <span>Color</span>
        </div>
        <div>
            <span>Fruit Taste:</span>
            <span>Taste</span>
        </div>
    </div>
</div> */}

// Now let us replace the placeholders with the actual data.
{/* <div>
    <h1>{{%TITLE%}}</h1>
    <div class="fruitsDescription">
        <div>
            <span>Fruit Color:</span>
            <span>{{%COLOR%}}</span>
        </div>
        <div>
            <span>Fruit Taste:</span>
            <span>{{%TASTE%}}</span>
        </div>
    </div>
</div> */}

// Now, let us loop over the fruitsData first:
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const fruits = fs.readFileSync(`${__dirname}/fruits.json`, 'utf-8');
//     const fruitsData = JSON.parse(fruits);
//     let fruitsPage = fs.readFileSync(`${__dirname}/fruits.html`, 'utf-8');

//     const fruitsDataMapped = fruitsData.map((item, index) => {
//         let output = fruitsPage.replace('{{%TITLE%}}', item.name);
//         output = fruitsPage.replace('{{%COLOR%}}', item.color);
//         output = fruitsPage.replace('{{%TASTE%}}', item.taste);

//         return output;
//     })

//     if (req.url === '/fruits') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end("You are in products page");
//         console.log(fruitsDataMapped);
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });

// Here we have used the map method to loop over the fruitsData and then we have replaced the placeholders with the actual data.
// In the console, we can see the multiple html data with the actual data.
// We can see that each fruit data is separated by a comma.
// So we can join the data and then send it to the client.

// Lets modify the code to do so.
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const fruits = fs.readFileSync(`${__dirname}/fruits.json`, 'utf-8');
//     const fruitsData = JSON.parse(fruits);
//     let fruitsPage = fs.readFileSync(`${__dirname}/fruits.html`, 'utf-8');

//     const fruitsDataMapped = fruitsData.map((item, index) => {
//         let output = fruitsPage.replace('{{%TITLE%}}', item.name);
//         output = output.replace('{{%COLOR%}}', item.color);
//         output = output.replace('{{%TASTE%}}', item.taste);

//         return output;
//     })

//     if (req.url === '/fruits') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(fruitsDataMapped.join(','));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');

//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// This is how we can display the json data on the web page.


// Task 1
// Create a json file named students.json and add some data to it and show the data on the web page.
// solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const students = fs.readFileSync(`${__dirname}/students.json`, 'utf-8');
//     const studentsData = JSON.parse(students);
//     let studentsPage = fs.readFileSync(`${__dirname}/students.html`, 'utf-8');

//     const studentsDataMapped = studentsData.map((item, index) => {
//         let output = studentsPage.replace('{{%NAME%}}', item.name);
//         output = output.replace('{{%AGE%}}', item.age);
//         output = output.replace('{{%CITY%}}', item.city);

//         return output;
//     })

//     if (req.url === '/students') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(studentsDataMapped.join(','));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');

//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// Task 2
// Create a json file named employees.json and add some data to it and show the data on the web page.
// solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     const employees = fs.readFileSync(`${__dirname}/employees.json`, 'utf-8');
//     const employeesData = JSON.parse(employees);
//     let employeesPage = fs.readFileSync(`${__dirname}/employees.html`, 'utf-8');

//     const employeesDataMapped = employeesData.map((item, index) => {
//         let output = employeesPage.replace('{{%NAME%}}', item.name);
//         output = output.replace('{{%AGE%}}', item.age);
//         output = output.replace('{{%CITY%}}', item.city);

//         return output;
//     })

//     if (req.url === '/employees') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(employeesDataMapped.join(','));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');

//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// Task 3
// Create a navbar and include the links to the students and employees page. When the user clicks on the students link, the students data should be displayed and when the user clicks on the employees link, the employees data should be displayed.
// solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === '/students') {
//         const students = fs.readFileSync(`${__dirname}/students.json`, 'utf-8');
//         const studentsData = JSON.parse(students);
//         let studentsPage = fs.readFileSync(`${__dirname}/students.html`, 'utf-8');

//         const studentsDataMapped = studentsData.map((item, index) => {
//             let output = studentsPage.replace('{{%NAME%}}', item.name);
//             output = output.replace('{{%AGE%}}', item.age);
//             output = output.replace('{{%CITY%}}', item.city);

//             return output;
//         })

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(studentsDataMapped.join(','));
//     } else if (req.url === '/employees') {
//         const employees = fs.readFileSync(`${__dirname}/employees.json`, 'utf-8');
//         const employeesData = JSON.parse(employees);
//         let employeesPage = fs.readFileSync(`${__dirname}/employees.html`, 'utf-8');

//         const employeesDataMapped = employeesData.map((item, index) => {
//             let output = employeesPage.replace('{{%NAME%}}', item.name);
//             output = output.replace('{{%AGE%}}', item.age);
//             output = output.replace('{{%CITY%}}', item.city);

//             return output;
//         })

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(employeesDataMapped.join(','));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// Task 4
// Create a car.json api
// solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === '/cars') {
//         const cars = fs.readFileSync(`${__dirname}/cars.json`, 'utf-8');
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(cars);
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });


// Task 5
// Now include the link to the cars page in the navbar. When the user clicks on the cars link, the cars data should be displayed.
// solution
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req, res) => {
//     if (req.url === '/students') {
//         const students = fs.readFileSync(`${__dirname}/students.json`, 'utf-8');
//         const studentsData = JSON.parse(students);
//         let studentsPage = fs.readFileSync(`${__dirname}/students.html`, 'utf-8');

//         const studentsDataMapped = studentsData.map((item, index) => {
//             let output = studentsPage.replace('{{%NAME%}}', item.name);
//             output = output.replace('{{%AGE%}}', item.age);
//             output = output.replace('{{%CITY%}}', item.city);

//             return output;
//         })

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(studentsDataMapped.join(','));
//     } else if (req.url === '/employees') {
//         const employees = fs.readFileSync(`${__dirname}/employees.json`, 'utf-8');
//         const employeesData = JSON.parse(employees);
//         let employeesPage = fs.readFileSync(`${__dirname}/employees.html`, 'utf-8');

//         const employeesDataMapped = employeesData.map((item, index) => {
//             let output = employeesPage.replace('{{%NAME%}}', item.name);
//             output = employeesPage.replace('{{%AGE%}}', item.age);
//             output = employeesPage.replace('{{%CITY%}}', item.city);

//             return output;
//         })

//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(employeesDataMapped.join(','));
//     } else if (req.url === '/cars') {
//         const cars = fs.readFileSync(`${__dirname}/cars.json`, 'utf-8');
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(cars);
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/html' });
//         res.end('<h2>Page not found</h2>');
//     }
// });

// server.listen(8000, () => {
//     console.log('Server is running at port 8000');
// });