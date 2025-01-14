# A lambda function is a small anonymous function defined without a name using the lambda keyword. It's often used for short-term tasks where defining a full function is unnecessary.

# Syntax:
# lambda arguments: expression
# Lambda: keyword
# arguments: parameters
# expression: single expression

# Normal Example:
# def square(x):
#     return x * x

# print(square(5))

# Lambda Example:
# square = lambda x: x * x
# print(square(5))

# Lambda functions can take any number of arguments, but can only have one expression.


# Lambda functions with multiple arguments:
# add = lambda x, y: x + y
# print(add(5, 3))


# Lambda functions with no arguments:
# greet = lambda: 'Hello, World!'
# print(greet())


# Lambda functions can be used inside other functions:
# def myFunc(n):
#     return lambda a: a * n

# double = myFunc(2)
# triple = myFunc(3)
# print(double(11))
# print(triple(11))


# We can do quick calculations using lambda functions:
# result = (lambda x, y: x**2 + y**2)(3, 4)
# print(result)

# Here, we are calculating the square of 3 and 4 and adding them together. 3 and 4 are the arguments passed to the lambda function.


# Task 1
# Check Even or Odd using Lambda Function
# Solution:
# is_even = lambda x: "Even" if x % 2 == 0 else "Odd"
# print(is_even(4))
# print(is_even(7))


# Task 2
# Add two numbers using Lambda Function
# Solution:
# add = lambda x, y: x + y
# print(add(5, 3))


# Task 3
# Use a lambda function to return the length of a string.
# Solution:
# length = lambda x: len(x)
# print(length("Hello, World!"))


# Task 4
# Check if a Number is Positive
# Solution:
# is_positive = lambda x: "Positive" if x > 0 else "Negative"
# print(is_positive(5))


# Task 5
# Find the Last Character of a String
# Solution:
# last_char = lambda x: x[-1]
# print(last_char("Hello, World!"))
