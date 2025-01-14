# Dictionary comprehension allows you to create dictionaries in a concise way, similar to list comprehension.

# It provides a more readable and faster way to create dictionaries in Python.

# Syntax:
# {key_expression: value_expression for item in iterable}
# Like list comprehension, you can use an if statement in dictionary comprehension.

# Syntax if the condition is used:
# {key_expression: value_expression for item in iterable if condition}

# Let's see an example of dictionary comprehension without any condition.
# my_list = [1, 2, 3, 4, 5]
# squared_dict = {i: i**2 for i in my_list}
# print(squared_dict)
# In the above example, we are creating a dictionary where each number from the list is the key, and its square is the value.

# Now, let's use an if statement in dictionary comprehension.
# my_list = [1, 2, 3, 4, 5]
# even_squares_dict = {i: i**2 for i in my_list if i % 2 == 0}

# print(even_squares_dict)
# In this example, we create a dictionary that contains the squares of only the even numbers.


# We can also apply conditions for values in dictionary comprehension.
# my_list = [1, 2, 3, 4, 5]
# new_dict = {i: "even" if i % 2 == 0 else "odd" for i in my_list}
# print(new_dict)

# In the above example, the dictionary stores the number as the key and whether it is even or odd as the value.


# Just like with list comprehension, we can also use functions inside dictionary comprehension.
# Using str() function in dictionary comprehension:
# my_list = [1, 2, 3, 4, 5]
# new_dict = {i: str(i) for i in my_list}
# print(new_dict)


# Now, let's look at an example of dictionary comprehension with nested loops.
# my_list = [1, 2, 3]
# nested_dict = {i: {j: i*j for j in my_list} for i in my_list}
# print(nested_dict)
# In this example, for each element in my_list, a new dictionary is created where the keys are the values from my_list, and the values are the product of the outer loop's value and the inner loop's value.


# You can also use if-else conditions with nested loops in dictionary comprehension.
# my_list = [1, 2, 3]
# nested_dict = {i: {j: i * j if i * j % 2 == 0 else "odd" for j in my_list} for i in my_list}
# print(nested_dict)
# In the above example, the inner loop creates a dictionary where the product of the values is stored only if it is even; otherwise, the string "odd" is stored.


# Task 1
# Create a dictionary where each number in a list is the key and its value is 5 more than the number.
# Solution:
# my_list = [1, 2, 3, 4, 5]
# new_dict = {i: i+5 for i in my_list}
# print(new_dict)


# Task 2
# Create a flat dictionary from a list of 2-element tuples.
# Solution:
# my_list = [(1, 2), (3, 4), (5, 6)]
# new_dict = {k: v for k, v in my_list}
# print(new_dict)


# Task 3
# Create a dictionary where the key is a number from the list, and the value is the square if it's even, or the cube if it's odd.
# Solution:
# my_list = [1, 2, 3, 4, 5]
# new_dict = {i: (i2 if i % 2 == 0 else i3) for i in my_list}
# print(new_dict)


# Task 4
# Create a dictionary where each number is the key, and the value is the sum of its divisors.
# Solution:
# def sum_of_divisors(n):
# return sum(i for i in range(1, n+1) if n % i == 0)
# my_list = [1, 2, 3, 4, 5]
# divisors_dict = {i: sum_of_divisors(i) for i in my_list}
# print(divisors_dict)


# Task 5
# Create a dictionary where the number is the key, and the value is doubled if it's greater than 10.
# Solution:
# my_list = [1, 20, 3, 40, 5]
# new_dict = {i: i*2 for i in my_list if i > 10}
# print(new_dict)


# Task 6
# Remove vowels from each string in a list and store the result in a dictionary.
# Solution:
# my_list = ['hello', 'world', 'python']
# new_dict = {i: ''.join([j for j in i if j not in 'aeiou']) for i in my_list}
# print(new_dict)


# Task 7
# Create a dictionary where the key is the word and the value is its first letter.
# Solution:
# sentence = 'This is a sentence'
# first_letters_dict = {i: i[0] for i in sentence.split()}
# print(first_letters_dict)
