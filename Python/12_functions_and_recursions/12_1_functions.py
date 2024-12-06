# A group of statements performing a specific task is called function.

# When a program gets bigger in size and its complexity increases, it becomes very difficult to manage the code.

# Its very difficult to maintain the code when it becomes long and complicated. To reduce the complexity, we use functions.

# Let's take an example by creating a program to take average of 3 numbers.
# a = 15
# b = 30
# c = 45
# avg = (a + b + c) / 3
# print(avg)

# Here, if we want to take average of some other numbers so we have to write the same code again and again.
# To avoid this, we use functions.

# With the help of functions, we can write the code once and use it multiple times.
# def avg():
#     a = 15
#     b = 30
#     c = 45
#     avg = (a + b + c) / 3
#     print(avg)

# We have just copy pasted the code in the function.
# If we run this code, it will not all print any output.
# This is because, right now, you have separated the logic of the code but you have not said when to use this logic. To use the logic, we have to call the function.

# To call the function, we just have to write the name of the function.
# def avg():
#     a = 15
#     b = 30
#     c = 45
#     avg = (a + b + c) / 3
#     print(avg)

# avg()

# Now, if we run this code, it will print the average of the numbers.
# Here, now we have called the function. So, the code inside the function will run.

# What if we want to take average of some other numbers which are input by the user?
# We can use this:
# def avg():
#     a = int(input("Enter first number: "))
#     b = int(input("Enter second number: "))
#     c = int(input("Enter third number: "))
#     avg = (a + b + c) / 3
#     print(avg)

# avg()

# Now, if we run this code, it will ask for the input and then print the average of the numbers.
# If we want to take average of some other numbers, we can call the function multiple times.
# def avg():
#     a = int(input("Enter first number: "))
#     b = int(input("Enter second number: "))
#     c = int(input("Enter third number: "))
#     avg = (a + b + c) / 3
#     print(avg)

# avg()
# avg()
# avg()
# avg()

# Now, we have called the function multiple times and it will ask for the input and print the average of the numbers.


# Lets understand functions with a simple example.
# def greet():
#     print("Good Morning")

# This is called defining a function or function definition.

# To call the function, we just have to write the name of the function.
# greet()
# This is called calling a function or function calling.

# When we call the function, the code inside the function will run.
# Here, the code inside the function is print("Good Morning") so it will print Good Morning.

# We can call the function multiple times.
# greet()
# greet()
# greet()

# Now, if we run this code, it will print Good Morning 3 times.


# Types of functions in Python:
# 1. Built-in functions
# 2. User-defined functions

# Built-in functions are the functions which are already defined in Python.
# For example: print(), input(), len(), sum(), etc.

# User-defined functions are the functions which are defined by the user.
# For example: greet(), avg(), etc.

# What if we want to print the name of a person after greeting?
# We can use this:
# def greet(person):
#     print("Good Morning ", person)

# Here, person is a parameter.
# We can pass the name of the person while calling the function.
# greet("Sparsh")
# Here, Sparsh is an argument.


# The difference between parameter and argument is:
# Parameter is a variable in the function definition.
# Argument is the value passed to the function.

# We can pass multiple parameters to the function.
# def greet(person, msg):
#     print("Good Morning ", person, msg)

# greet("Sparsh", "How are you?")
# greet("Saumya", "What's up?")

# Here, we have passed 2 parameters and 2 arguments to the function.
# The first argument will be passed to the first parameter and the second argument will be passed to the second parameter.

# In functions, we have something known as return statement.
# If we want to return something from the function, we can use return statement.

# We can store the value returned by the function in a variable.
# Lets do it with greet function.

# def greet(person, msg):
#     print("Good Morning ", person, msg)


# a = greet("Sparsh", "How are you?")
# print(a)

# Here, if we run this code, we will get None.
# This is because we have not returned anything from the function.

# To return something from the function, we can use return statement.
# def greet(person, msg):
#     return "Good Morning " + person + msg

# a = greet("Sparsh,", "How are you?")
# print(a)

# Now, if we run this code, it will print Good Morning Sparsh, How are you?.
# Here, we have returned the value from the function and stored it in a variable a.

# Lets see another example of a function.
# def add(a, b):
#     return a + b

# a = add(5, 10)
# print(a)
# a = add(15, 20)
# print(a)

# Here, we have created a function to add 2 numbers.
# We have passed 2 arguments to the function and stored the value returned by the function in a variable a.
# We have called the function multiple times and stored the value returned by the function in a variable a.


# Default parameters value in functions:
# We can give default values to the parameters.
# If we don't pass the value to the parameter, it will take the default value.
# def greet(person="Sparsh"):
#     print("Good Morning ", person)

# greet()
# greet("Saumya")

# Here, we have given the default value to the parameter person.
# If we don't pass the value to the parameter, it will take the default value.
# If we pass the value to the parameter, it will take the value passed to the parameter.
# For example, if we don't pass the value to the parameter, it will take the default value Sparsh.
# If we pass the value to the parameter, it will take the value passed to the parameter. "Saumya" in this case.
