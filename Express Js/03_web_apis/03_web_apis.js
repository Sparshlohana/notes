// What is a Web api? Why it is such a good option in creating a web and mobile applications these days?
// To understand this, lets compare static and dynamic websites with web api powered websites.

// Static Websites:
// As we already know that there is a client and a server in a web application.
// A static website is a simplest type of website.
// In a static website, developers upload the final, ready-to-serve HTML, CSS, and JavaScript files to a web server.
// These are the exact files which will be sent to client by the server when the website is requested.
// Then the browser renders the HTML, CSS, and JavaScript files to display the website to the user.
// In case of static websites, there is no work done on server, there is no backend code. Also, there is no backend application running on the server.
// The server is simply serving the files to the client.

// You might say that, when there is javascript on the page, there are usually dynamic effects like animations or other things. That dynamic is different type of dynamic. It is in the context of frontend development.
// Eg. When you click on a button and a modal opens, that is a dynamic effect. But that is not dynamic in the context of backend development.
// When we talk about web application, which has a backend, there the word dynamic has nothing to do with frontend effects.

// On the other hand, dynamic websites usually contains the database, in case of a dynamic website, we also have a backend application running on a server. This backend application can be created using node js, python, java, php etc. Basically a backend application is created using a backend programming language.
// This backend application fetches data from the database, together with the pre-defined templates, it builds each page that the user requests dynamically based on the data from the database. Here, we are not serving any html, css or javascript files directly to the client. Instead, we are building the website / we are building a template which contains html, css and javascript and it also contains the data which we have retrieved from the database. This template is then sent to the client.
// Each time the browser requests a page, the web page is build as html, css and js file and is sent back to the browser. And then, the browser renders the dynamically generated html, css and js files to display the website to the user. This whole process is called server side rendering. (SSR)
// Here, the webpage is rendered in the browser, it is created on the server. This type of website is called dynamic website as the content of the website is build from the content coming from the database. This content can change all the time according to content of the database or according to users action on the website.
// Eg. If you are logged in to instagram, you will be shown the different posts and some other person will be shown different posts. This is because the content is dynamic and it is changing according to the user.

// In case of static website, you will always see the same content, no matter who is visiting the website.

// Keep in mind that, dynamic websites are often called web applications. So when someone says web application, they are usually talking about a dynamic website. As it contains some functionality like login, sign up, posting, commenting etc.

// Traditionally, there were only two types of websites, static and dynamic. But now, we see OMO websites. These websites are build using web apis. Lets see, how these api powered websites work and how we can use node js to create such api powered websites.

// API stands for Application Programming Interface.
// API is a piece of software that can be used by another piece of software in order to allow applications to talk to each other.
// In simple terms, api allows two different software applications to communicate with each other.
// In this, we have database on the server, we have an app that fetches data from the database each time the user requests a page.
// Api powered websites are similar to dynamic websites, i.e., both works dynamically. But the difference is that, in case of dynamic websites, the server builds the webpage and sends it to the client. But in case of api powered websites, the server only sends the data to the client (in json format). We don't send the html, css and js files to the client.
// The data which we sent in response is in json format. The client then uses this data to build the webpage. This is called client side rendering. (CSR)
// When building a web api powered websites, there are always 2 parts, building the api and building the client side application which consumes the api.
// 1. Building the api: In this part, we create an api which is hosted in the server, on the client side, the website is assembled using the data from the api.
// 2. Building the client side application: In this part, we create a client side application which consumes the api. This is done by frontend frameworks and libraries like react, angular, vue etc.
// When building an api powered website, the building phase of the website is moved to backend to frontend or we can also say that, we are moving the building phase of the website from server to client.

// Many times you will see that dynamic websites are called server side rendered websites because they are actually build on server. On the other hand, api powered websites are called client side rendered websites because they are build on client side.

// The main advantage of using web api is that, it can not only be consumed by browsers but also by other clients like mobile applications, desktop applications etc. This is the reason why web api is such a good option in creating web and mobile applications these days.

// Lets say, you have a website and you want to create a mobile application for the same website. If you have a web api, you can use the same api to fetch the data for the mobile application. This way, you don't have to create a new api for the mobile application. This is the main advantage of using web api.
// The data will be sent in json format, so the client can use this data to build the webpage or mobile application.
// This advantage of using web api is called code reusability. This means that, we can reuse the same code for different clients like web, mobile, desktop etc. It is not necessary to create a new api for each client. This is not possible in case of dynamic websites.

// There are complex situations where you need a website, a mobile application and a desktop application. In such cases, you can use the same api for all the clients. This will not be possible in case of dynamic websites because in dynamic websites, the server sends the html, css and js files to the client. This is not possible in case of mobile applications or desktop applications.

// There are third party apis also, like there are companies which sells the data. You can use their apis to fetch the data. Eg. weather api, news api etc.

// Node js is a very common tool to create web apis. It is very easy to create web apis using node js. It can also be used to build dynamic server side rendered websites. But it is mostly used to create web apis.

// Web apis are the most common types of apis, but in fact, apis are only used to send data and they aren't always related to web development. 

// We learned that api stands for Application Programming Interface. So here the term, "Application" doesn't mean a web application. It can be any type of application. It can be a web application, a mobile application, a desktop application etc. So, api is a piece of software that can be used by another piece of software in order to allow applications to talk to each other. This is the main purpose of api.
// We have used fs and http modules in node js. These modules are also apis. They are used to interact with the file system and to create a server respectively. So, these are also apis. But these are not web apis. These are called native apis. These are the apis which are provided by the programming language itself. These are used to interact with the programming language itself. These are not used to interact with other applications.
// Browsers also have apis. These are called DOM apis. These are used to interact with the browser. These are used to interact with the browser itself. These are not used to interact with other applications. Eg. document object, window object, fetch api, etc
// A class in a programming language is also an api. It is a piece of software that can be used by another piece of software in order to allow applications to talk to each other. A class is used to create objects. So, a class is also an api. It is used to interact with the programming language itself. It is not used to interact with other applications.