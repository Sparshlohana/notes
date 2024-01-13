// Are let and const declarations hoisted in JavaScript?
// What is temporal dead zone?
// What is the difference between syntax error, reference error and type error?

// The ans to the first question is yes, let and const declarations are hoisted in JavaScript but there are hoisted very differently than a var declaration.

// In any interview, if you say that let and const declarations are not hoisted, you will be wrong. You can say that these are in the temporal dead zone in the time being.

// Let us understand this with an example.

// let a = 10;
// var b = 100;

// We have already seen that the variable declared using var can be accessed even before its initialization
// In other languages you won't be able to do this.
// console.log(b);
// let a = 10;
// var b = 100;

// But in JavaScript, it behaves very differently.
// In javascript as we already know that the memory is allocated to the variable and function even before executing a single line of code.
// So that is why even before initializing b, we can access it and we don't get any error, In fact, we get a special placeholder called undefined. This is called hoisting in case of var.

// console.log(a);
// let a = 10;
// var b = 100;
// Now if let is also hoisted then we should be able to access it? right?
// But if I run this code, it will give us an error.
// It gives an reference error saying cannot access "a" before initialization.
// So this error tells us that, you can only access "a" after it has been initialized.

// Which means after this...
// let a = 10;
// console.log(a);
// var b = 100;
// We can access "a".

// Then how to know whether this variable was hoisted or not?

// Now lets go inside browser and see what happens when we run this code? Does it allocate memory to "a" or not? Will it behave like var or not?
// Lets go to sources tab and put the debugger on the first line of the code and hit reload.
// We can see something interesting here.
// In the scope section, Inside the script section, we can see that there is a variable called "a" and it has a value of value-not-accessible.
// Which means javascript has allocated memory to "a" even before executing a single line of code.
// We also have b with us in scope but it is in Global scope, while "a" is in local scope.
// In case of var, it is in global scope and in case of let, it is in some script scope. What is this script?
// The variable b which was declared using var is in global scope which means it is attached to the global object which is window in case of browser.
// But in case of let and const, there are also allocated memory which is called hoisting but they are not attached to the global object, they are stored in different memory scope then the global scope.
// Thats why you cannot access the value of a before it has some value assigned to it.
// This is what is called hoisting in case of let and const.

// Now let us try to execute code line by line and see what happens behind the scenes.
// Now we can see that "a" has been assigned with a value of 10 and it is still in the separate memory space and now it is available to us for accessing.
// Now when I execute the next line, we can see that the value of a is printed in the console and "b will still be undefined".
// When I execute the next line, we can see that the value of b is also assigned and it is also available to us for accessing.

// Now let me tell you what is a temporal dead zone?
// Temporal dead zone is the time since when the let/const variable is hoisted and till the time it is initialized with some value.
// The time between these two is called temporal dead zone.

// In this case,
// console.log(a);
// let a = 10;
// var b = 100;
// Lets see in the browser what happens when we run this code.

// Lets put a debugger on the first line and reload the page.
// Now the console.log(a) is not yet executed and we can see that the value of a is value-unavailable which means variables were hoisted.
// But it is not yet initialized with some value.
// So this phase is called temporal dead zone, until it goes in the next line and gets initialized with some value, this is when the temporal dead zone ends and the value of a is available to us for accessing.

// As the variable is in temporal dead zone, We can't access it and hence we will get reference error.
// They can only be accessed after they are initialized with some value.

// Have you seen this reference error before?
// If I try to access any variable which is not even declared, for example,
// console.log(x);
// let a = 10;
// var b = 100;
// We get a reference error saying x is not defined, which means when Javascript engine tries to find the variable x, it is not able to find it anywhere in the memory which means there was no reference to x inside the memory.

// But if I try to access "b" here, we get undefined.
// But in case of "a", It throws a reference error.
// It clearly states that, cannot access "a" before initialization which means a is in temporal dead zone for the time being and you can access it anywhere only after its initialization.

// let a = 10;
// console.log(a);
// var b = 100;
// Let go in console and see what happens:
// Lets write window and hit enter.
// These var declarations are attached to the window object, so whenever we try to access b, it will be available to us as it is attached to the window object.
// So if we write window.b, we get 100.
// But in case of "a", will it be attached to the window object?
// As we already know, they are maintained in a separate memory space, so if we write window.a, we get undefined. It gets treated like any other variable which is not present with us.
// As we remember, at global level, "this" points to window object, so if we do this.b, we'll get 100.
// But if we do this.a, we get undefined.

// As we have observed, let is a little more strict than var.
// There is one more level of strictness over here.
// We cannot do something like redeclaration of let/const variable.

// So if I try to do something like this:
// let a = 10;
// let a = 100;
// It will throw an error

// This time the error is a Syntax error which means you have written something which is not allowed in JavaScript saying Identifier 'a' has already been declared.
// Please note that, if there is a syntax error in the program, the program will not run at all.

// So if I try to do something like this:
// console.log("Hello world");
// let a = 10;
// let a = 100;
// It will not print anything in the console as there is a syntax error in the program.
// So if there is a syntax error in the program, Not a single line of code will be executed.

// It is the same in case of let with var.
// If I try to do something like this:
// console.log("Hello world");
// let a = 10;
// var a = 100;

// It will again throw a syntax error saying Identifier 'a' has already been declared and not a single line of code will be executed.
// We cannot use the same variable name in the same scope.

// But we can do this in case of var:
// console.log("Hello world");
// var a = 10;
// var a = 100;
// console.log(a);

// It will print 100 in the console.
// So we can use the same variable name in the same scope in case of var but not in case of let and const.

// Now let us see in case of const
// if I have a const declaration, it behaves very much similar to let.
// But there is a difference, it is even more strict than let.
// It behaves the same way in hoisting and temporal dead zone.
// You can go and check it in the browser.

// But if I say if const is more strict than let, then how?
// Lets see an example:
// If I do something like this:
// let a;

// We can initialize it later at any point of time and anywhere in program.
// Eg:
// let a;

// const b = 10;
// a = 100;
// console.log(a);
// This is completely valid.

// But you cannot do the same thing in case of const.
// let a;

// const b;
// b = 10;
// a = 100;
// console.log(b);

// it will throw a syntax error saying Missing initializer in const declaration. Hence not a single line of code will be executed.

// Now let us see another error:
// let a;

// const b = 1000;
// b = 10;
// a = 100;
// console.log(b);
// If I assign a value to b which is a const variable, and then try to assign another value to it, it will throw an error know as type error saying Assignment to constant variable.

// Now let us see the difference between syntax error, reference error and type error.
// In the above program, we can see that we are getting a type error.
// It says that we are trying to assign a value to a constant variable which is not allowed in JavaScript.
// So why is it called a type error?
// Because this variable "b" is of type const and we are trying to assign a value to it which is not allowed in JavaScript. It is a constant, it has to be initialized with some value and it cannot be changed later on.
// So this is called a type error, because we are trying to assign a value to a constant variable.

// What was a syntax error?
// If I try to do something like this:
// let a = 1000;
// const b;

// a = 10;
// console.log(a);
// This will throw a syntax error saying Missing initializer in const declaration because here we have a missing syntax. The syntax expects that there would be an initializer in const declaration but we have not provided it.
// Remember we also got an error in case of let when we tried to redeclare a variable.

// And what was the reference error?
// When js engine tries to find a variable in the memory and it is not able to find it, it throws a reference error.
// eg: console.log(x);

// or

// console.log(a);
// let a = 10;
 
// in the above case, we get a reference error because the variable "a" is not yet initialized with some value and hence it is not available to us for accessing.

// As we know now, we have three ways to declare a variable in JavaScript.
// var, let and const.

// So which should we use?
// I would like to suggest to use const as much as possible.
// Whenever you can use const, you should use it.
// Whenever you know that the value of the variable which is not going to change, you should use const.

// if not const, try to use let whenever and wherever possible.
// Because let has a temporal dead zone, and you will not run into errors like undefined or stuff.
// And YES, IN NORMAL DAY TO DAY PROGRAMMING, KEEP VAR ASIDE, DO NOT USE IT.

// There are some cases where you have to use var, but in normal day to day programming, you should not use var. If you are using var, do it very carefully.

// There are sometimes where a TEMPORAL DEAD ZONE can mess up life of a developer like you and me. Sometimes it can lead to unexpected errors. So the best way to avoid these errors is to use your declaration on the top of your program scope. As, when you declare a variable on the top of your program scope, The execution starts from the top and goes to the bottom and it will get initialized before you try to access it and the chances of getting an error will be very less. 

// We can say that we are shrinking our temporal dead zone to 0 by declaring our variables on the top of our program scope.