# list.join() method
# The join() method is a string method and returns a string in which the elements of sequence have been joined by str separator.
# Syntax: str.join(sequence)

# l1 = ["a", "b", "c", "d"]
# print("".join(l1))

# Basically, the join() joins the elements of the list with the string on which it is called.

# l1 = ["a", "b", "c", "d"]
# print("-".join(l1))

# Here, the elements of the list are joined with the string "-" and the result is a-b-c-d.

# l1 = ["a", "b", "c", "d"]
# print(" ".join(l1))

# Here, the elements of the list are joined with the string " " and the result is a b c d.


# str.format() method
# The format() method formats the specified value(s) and insert them inside the string's placeholder.
# The placeholder is defined using curly brackets: {}.
# Syntax: string.format(value1, value2...)

# print("Hello {}, your balance is {}.".format("Adam", 230.2346))

# Basically, .format() method is used to format the string in a particular way.
# The curly braces {} are used as placeholders.
# We can specify the values inside the curly braces {}.
# The values are passed as arguments to the format() method.
# The values are then formatted and placed in the string at the position of the curly braces {}.

# Nowadays, f-strings are used to format the strings. They are more readable and faster than the .format() method.


# map() function
# The map() function executes a specified function for each item in an iterable. The item is sent to the function as a parameter.
# Syntax: map(function, iterable)

# def square(n):
#     return n * n

# numbers = [1, 2, 3, 4]
# result = map(square, numbers)
# print(list(result))

# In the above example, the square() function is defined which returns the square of a number.
# The numbers list contains the numbers [1, 2, 3, 4].
# The map() function is used to apply the square() function to each item in the numbers list.
# The result is a map object which is converted to a list and printed.

# def square(n):
#     return n * n

# numbers = [1, 2, 3, 4]
# result = map(square, numbers)
# for i in result:
#     print(i)

# In the above example, the square() function is defined which returns the square of a number.
# The numbers list contains the numbers [1, 2, 3, 4].
# The map() function is used to apply the square() function to each item in the numbers list.
# The result is a map object which is iterated using a for loop and printed.


# filter() function
# The filter() function constructs an iterator from elements of an iterable for which a function returns true.
# Syntax: filter(function, iterable)

# def is_even(n):
#     return n % 2 == 0

# numbers = [1, 2, 3, 4, 5, 6, 7, 8]
# result = filter(is_even, numbers)
# print(list(result))

# In the above example, the is_even() function is defined which returns True if the number is even.
# The numbers list contains the numbers [1, 2, 3, 4, 5, 6, 7, 8].
# The filter() function is used to filter the even numbers from the numbers list.
# The result is a filter object which is converted to a list and printed.

# zip() function
# The zip() function returns an iterator where the matching index of elements from each iterable is paired together into a tuple.
# The zip() function takes iterables (can be zero or more), aggregates them in a tuple, and returns it.
# Make sure the number of elements in each iterable is the same.
# If the iterables are of different lengths, the resulting iterator will be the same length as the shortest iterable.
# Syntax: zip(iterable1, iterable2, iterable3...)

# names = ["Alice", "Bob", "Charlie"]
# ages = [24, 30, 28]
# result = zip(names, ages)
# print(list(result))


# reduce() function
# The reduce() function is defined in the functools module.
# The reduce() function applies a function of two arguments cumulatively to the items of an iterable, optionally starting with an initial argument.
# Syntax: reduce(function, iterable, initializer)

# The reduce() function is used to apply a particular function passed in its argument to all of the list elements mentioned in the sequence passed along.
# This function is defined in the functools module.
# Working: At first step, the first two elements of the sequence are applied to the function and the result is returned.
# In the next step, the result is again applied to the function along with the next element.
# This process continues till no more elements are left in the container.

# from functools import reduce

# def add(a, b):
#     return a + b


# numbers = [1, 2, 3, 4]
# result = reduce(add, numbers)
# print(result)

# In the above example, the add() function is defined which returns the sum of two numbers.
# The numbers list contains the numbers [1, 2, 3, 4].
# The reduce() function is used to find the sum of the numbers list.
# The result is printed.

# Reduce() with 3rd argument
# from functools import reduce

# def add(a, b):
#     return a + b

# numbers = [1, 2, 3, 4]
# result = reduce(add, numbers, 10)
# print(result)

# In the above example, the add() function is defined which returns the sum of two numbers.
# The numbers list contains the numbers [1, 2, 3, 4].
# The reduce() function is used to find the sum of the numbers list.
# The initial value is 10.
# The result is printed.

# Task 1
# Use reduce() to calculate the product of all the elements in the list numbers = [2, 3, 4].
# Define a function multiply(a, b) that returns the product of two numbers.
# Solution
# from functools import reduce

# def multiply(a, b):
#     return a * b

# numbers = [2, 3, 4]
# result = reduce(multiply, numbers)
# print(result)


# Task 2
# Given the template string "Hello, my name is {0} and I am {1} years old.", use the .format() method to fill in the placeholders with "John" for the name and 30 for the age using positional arguments.
# Solution
# template = "Hello, my name is {0} and I am {1} years old."
# result = template.format("John", 30)
# print(result)


# Task 3
# Use the map() function and a lambda function to square each number in the list numbers = [3, 6, 9, 12] and return the result.
# Solution
# numbers = [3, 6, 9, 12]
# result = map(lambda x: x * x, numbers)
# print(list(result))


# Task 4
# Format the string "My name is {}, I am {} years old, and my height is {} meters." by inserting "Alice", 28, and 1.75 using the .format() method.
# Solution
# template = "My name is {}, I am {} years old, and my height is {} meters."
# result = template.format("Alice", 28, 1.75)
# print(result)


# Task 5
# Given the list words = ['hello', 'world', 'python', 'programming'], use the map() function to convert all words to uppercase.
# Solution
# words = ['hello', 'world', 'python', 'programming']
# result = map(lambda x: x.upper(), words)
# print(list(result))
