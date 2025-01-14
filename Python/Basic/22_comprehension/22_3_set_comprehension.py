# Set comprehension allows you to create sets in a concise way, similar to list and dictionary comprehension.
# It provides a more readable and efficient way to create sets in Python.

# Syntax:
# {expression for item in iterable}

# Like with list and dictionary comprehension, you can also use an if statement in set comprehension.
# Syntax:
# {expression for item in iterable if condition}

# Set comprehension without any condition
# my_list = [1, 2, 3, 4, 5]
# squared_set = {i**2 for i in my_list}
# print(squared_set)  # Output: {1, 4, 9, 16, 25}

# Set comprehension with an if statement
# my_list = [1, 2, 3, 4, 5]
# even_squares_set = {i**2 for i in my_list if i % 2 == 0}
# print(even_squares_set)  # Output: {4, 16}

# Using if-else in set comprehension
# my_list = [1, 2, 3, 4, 5]
# new_set = {i**2 if i % 2 == 0 else i for i in my_list}
# print(new_set)  # Output: {1, 4, 9, 16, 25}

# Using a function inside set comprehension (str conversion)
# my_list = [1, 2, 3, 4, 5]
# new_set = {str(i) for i in my_list}
# print(new_set)  # Output: {'1', '2', '3', '4', '5'}

# Set comprehension with nested loops
# my_list = [1, 2, 3]
# nested_set = {i*j for i in my_list for j in my_list}
# print(nested_set)  # Output: {1, 2, 3, 4, 6, 9}

# Using if-else inside nested loops in set comprehension
# my_list = [1, 2, 3]
# nested_set = {i*j if i*j % 2 == 0 else "odd" for i in my_list for j in my_list}
# print(nested_set)  # Output: {1, 2, 3, 4, 6, 9, 'odd'}

# Task 1: Create a set of numbers that add 5 to each number in a list.
# my_list = [1, 2, 3, 4, 5]
# new_set = {i+5 for i in my_list}
# print(new_set)  # Output: {6, 7, 8, 9, 10}

# Task 2: Create a set from a list of 2-element tuples (flattening the tuples).
# my_list = [(1, 2), (3, 4), (5, 6)]
# new_set = {j for i in my_list for j in i}
# print(new_set)  # Output: {1, 2, 3, 4, 5, 6}

# Task 3: Create a set of squares of even numbers, and cubes of odd numbers from a list.
# my_list = [1, 2, 3, 4, 5]
# new_set = {i**2 if i % 2 == 0 else i**3 for i in my_list}
# print(new_set)  # Output: {1, 4, 9, 16, 25}

# Task 4: Create a set of numbers that are greater than 10 from a given list, multiplied by 2.
# my_list = [1, 20, 3, 40, 5]
# new_set = {i*2 for i in my_list if i > 10}
# print(new_set)  # Output: {40, 80}

# Task 5: Remove vowels from each string in a list and store the result in a set.
# my_list = ['hello', 'world', 'python']
# new_set = {''.join([j for j in i if j not in 'aeiou']) for i in my_list}
# print(new_set)  # Output: {'hll', 'wrld', 'pythn'}

# Task 6: Create a set of the first letters of each word in a sentence.
# sentence = 'This is a sentence'
# first_letters_set = {i[0] for i in sentence.split()}
# print(first_letters_set)  # Output: {'T', 'i', 'a', 's'}

# Task 7: Create a set of squares from a list, but exclude the ones that are divisible by 3.
# my_list = [1, 2, 3, 4, 5, 6]
# new_set = {i**2 for i in my_list if i**2 % 3 != 0}
# print(new_set)  # Output: {1, 4, 16, 25}
