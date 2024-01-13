// What is a block in JavaScript?
// {}
// A block is defined by these curly braces and this is a perfectly valid js code even though it doesn't do anything.

// So why do we use it? what is the use of blocks?
// First of all let me tell you, block is also known as COMPOUND STATEMENT.

// {
//      console.log("Compound statement");
// }

// As we already know that blocks are used to combine multiple statements into a single group.

// {
//      let a = 10;
//      console.log(a);
// }
// So what is this block doing? It is combining two statements into a single group.

// But whats the need to group the statements together?
// We need to group the statements together so that we can use multiple statements in a place where JS expects only one statement.

// Let us understand it with an example.
// if (true)
// It will give us an syntax error saying expected end of a statement which means javascript expects a (single) statement after if condition but we are not giving it any statement. It can be any statement:
// if (true) true;
// This is also a valid statement but it is not doing anything. So we can use blocks to group multiple statements together.

// But if you have to write multiple statements then you can use blocks to group them together.
// if (true) {
//     let a = 10;
//     console.log(a);
// }

// So if it expects a single statement here then we can use a block to group multiple statements together.
// This block here is grouping multiple statements together and now we can use it here.

// Please note that "if" only expects a single statement after it, so there is no need to use curly braces if you don't have multiple statements, But if you have multiple statements then you can use curly braces to group them together, which is also known as a block.

// Now we know what is a block and why do we use it, Now let us understand what is block scope.
// It means what all variables and functions are accessible inside a block.

// Let us understand it with an example.
// {
// var a = 10;
// let b = 20;
// const c = 30;
// }

// Let us see, how these three behaves behind the scenes.
// Lets go in the browser and open the console.
// Lets put a debugger at the very first line of the block and reload the page.
// We can see that, b and c are inside the block scope. This let and const are inside the block scope.
// And in case of a, which is declared with var, it is not inside the block scope, it is inside the global scope.
// So we can say that let and const are block scoped.
// When the code is finished executing, the block scope is destroyed and the variables declared with let and const are also destroyed, so they are not accessible outside the block.
// But the variable declared with var is accessible outside the block because it is not block scoped.

// {
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
// }
// We can see that we can access all the variables inside the block.

// {
// var a = 10;
// let b = 20;
// const c = 30;
// }
// console.log(a);
// console.log(b);
// console.log(c);
// we can see that we can access the variable declared with var outside the block but we cannot access the variables declared with let and const outside the block.
// It throws an error saying b is not defined and c is not defined.

// When I put a debugger in the line console.log(b) and reload the page, we can't see any block, but we can see that a is inside the global scope and it prints 10, and then gives an error saying b is not defined.


// Now let us understand what is shadowing.
// Shadowing is a concept where a variable declared in a certain scope has the same name as a variable declared in an outer scope.
// Let us understand it with an example.
// var a = 100;
// {
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(a);
// console.log(b);
// console.log(c);
// }
// Here, we can see that we have declared a variable with the same name inside the block and outside the block. So what will happen?
// It will overwrite the value of the variable declared outside the block.
// So when we print the value of a, it will print 10.
// Here, the variable a inside the block shadows the variable a outside the block.
// This means the value outside the block is now overwritten by the value inside the block.
// This is known as shadowing.

// Now
// var a = 100;
// {
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(b);
// console.log(c);
// }
// console.log(a);
// Here we can see that I have moved the console.log(a) outside the block.
// So what will happen now?

// If you expect that the value of a will be 100 then you are wrong. It will print 10, because the variable a inside the block shadows the variable a outside the block. The value of a got modified inside the block and now it is 10.
// This occurs because they both are pointing to the same memory location.
// As we can see that both the a were in the same scope, i.e, global scope, so they both are pointing to the same memory location.
// So when we modify the value of a inside the block, it will also modify the value of a outside the block.

// This is not the case with let.
// let b = 100;
// {
// var a = 10;
// let b = 20;
// const c = 30;
// console.log(b);
// }
// console.log(b);
// Inside the block, the value of b is 20 and outside the block the value of b is 100.
// This is because they both are in different memory locations.
// So when we modify the value of b inside the block, it will not modify the value of b outside the block.
// So the value of b outside the block will be 100.

// Let us put a debugger in the line console.log(b) and reload the page.
// We can see that b is in two different memory locations.
// One is in scope and other is in some script.
// So, now we can say that let and const are block scoped and var is not block scoped.

// Same thing happens with const.


// Shadowing is not just about blocks, it can also happen with functions.
// Even if we have a function, shadowing works in the same way.
// Let us understand it with an example.
// let a = 100;
// function shadow() {
//     let a = 10;
//     console.log(a);
// }
// shadow();
// console.log(a);
// Here we can see that we have a function shadow and inside the function we have a variable a.
// And outside the function we have a variable a.
// So what will happen now?

// It works the same way, The output will be 10 and 100.
// Because the variable a inside the function shadows the variable a outside the function.
// So the value of a inside the function is 10 and outside the function is 100.

// Now let us see what is an illegal shadowing.
// let a = 10;
// {
//     var a = 20;
// }
// Can we do this?
// No, we cannot do this.
// Because we cannot shadow a variable declared with var using let or const.
// We cannot shadow a let using var.

// But what about this?
// var a = 20;
// {
//     let a = 10;
// }
// Js will not throw any error here.
// Because we can shadow a variable declared with var using let or const.

// As we already know that a let variable cannot be redeclare.
// So the var should not cross the boundary of the block.

// let a = 10;
// {
//     var a = 20;
// }
// Here what are the boundaries of the var?
// var is a function scoped variable.

// if I do this:
// let a = 10;
// function x() {
//     var a = 20;
// }
// Here the var is inside the function scope.
// Now it won't throw any error.
// This is fine, this is not a illegal shadowing.

// Its the same in case of const.

// Do you remember we learnt about lexical scope in previous chapter?
// Block scope also follows lexical scope.
// Let us understand it with an example.
// const a = 10;
// {
//     const a = 20;
//     {
//         const a = 30;
//         console.log(a);
//     }
//     console.log(a);
// }
// When I say lexically, it means one inside another.

// Let us put a debugger in the line console.log(a) and reload the page.
// We can see blocks and blocks and blocks.
// So it follows lexical scope.
// It follows the lexical scope chain pattern.

// This works exactly same way in arrow functions too.