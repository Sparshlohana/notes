# Let's make a list and take the square of each element in the list.
# list1 = [1, 2, 3, 4, 5]

# We can use for loop to do this.
# squared_list = []
# for i in list1:
#     squared_list.append(i**2)

# print(squared_list)


# This is the normal way to do this. But we can do this in a single line using list comprehension.
# my_list = [1, 2, 3, 4, 5]
# squared_list = [i**2 for i in my_list]
# print(squared_list)


# We can say that, List comprehension is a concise way to create lists in python.
# It is a more readable and faster way to create lists.

# Syntax:
# [expression for item in iterable]

# We can even use if statement in list comprehension.
# Syntax:
# [expression for item in iterable if condition]

# Here, Expression is the operation that you want to perform on each item in the list.
# for item in iterable is the loop that you want to perform on each item in the list.
# if condition is the condition that you want to apply on each item in the list. (Optional)

# Let's see an example of list comprehension with if statement.
# my_list = [1, 2, 3, 4, 5]
# even_squares = [i**2 for i in my_list if i % 2 == 0]
# print(even_squares)

# In the above example, we are taking the square of each element in the list and storing it in a new list.
# The condition if i % 2 == 0 filters out odd numbers, so only even numbers are squared and added to the list.

# Let's assume we have a list and in that list, we have both positive and negative numbers. We have to filter out only positive numbers.
# my_list = [1, -2, 3, -4, 5]
# positive_numbers = [i for i in my_list if i > 0]
# print(positive_numbers)

# We can even work with strings in list comprehension.
# Let's see an example of list comprehension with strings.
# my_list = ['hello', 'world', 'python']
# new_list = [i.upper() for i in my_list]
# print(new_list)


# We can even use built in functions in list comprehension.
# Using len() function in list comprehension.
# my_list = ['hello', 'world', 'python']
# new_list = [len(i) for i in my_list]
# print(new_list)

# Using str() function in list comprehension.
# my_list = [1, 2, 3, 4, 5]
# new_list = [str(i) for i in my_list]
# print(new_list)


# We can even use if-else statement in list comprehension.
# Syntax:
# [expression if condition else expression for item in iterable]

# Let's see an example of list comprehension with if-else statement.
# my_list = [1, 2, 3, 4, 5]
# new_list = [i**2 if i % 2 == 0 else i for i in my_list]
# print(new_list)

# In the above example, we are taking the square of each element in the list and storing it in a new list.
# If the number is even, then we are taking the square of that number.
# If the number is odd, then we are storing the number itself in the list.


# We can even use nested loops in list comprehension.
# Syntax:
# [expression for item in iterable for item in iterable]

# Let's see an example of list comprehension with nested loops.
# my_list = [1, 2, 3]
# new_list = [i*j for i in my_list for j in my_list]
# print(new_list)

# In the above example, we are taking the product of each element in the list with each element in the list and storing it in a new list.

# Many of you will be thinking that list comprehension is a bit difficult to understand.
# But, once you get the hang of it, you will find it very useful and easy to use.

# Let's understand the above example in a normal way.
# my_list = [1, 2, 3]
# new_list = []
# for i in my_list:
#     for j in my_list:
#         new_list.append(i*j)
# print(new_list)

# This is the normal way to do this. But we can do this in a single line using list comprehension.

# Let's understand step by step:
# Outer Loop(for i in my_list):
# The outer loop iterates over each element in my_list(i.e., 1, 2, 3).

# Inner Loop(for j in my_list):
# For every value of i in the outer loop, the inner loop iterates over each element in my_list again(i.e., 1, 2, 3).

# Expression(i * j):
# For each combination of i and j, the expression i * j is evaluated and added to the new_list.

# Execution Process
# Iteration Details:
# First Outer Loop(i=1):
# Inner loop(j=1): 1 * 1 = 1
# Inner loop(j=2): 1 * 2 = 2
# Inner loop(j=3): 1 * 3 = 3
# Result after first outer loop: [1, 2, 3]

# Second Outer Loop(i=2):
# Inner loop(j=1): 2 * 1 = 2
# Inner loop(j=2): 2 * 2 = 4
# Inner loop(j=3): 2 * 3 = 6
# Result after second outer loop: [1, 2, 3, 2, 4, 6]

# Third Outer Loop(i=3):
# Inner loop(j=1): 3 * 1 = 3
# Inner loop(j=2): 3 * 2 = 6
# Inner loop(j=3): 3 * 3 = 9
# Result after third outer loop: [1, 2, 3, 2, 4, 6, 3, 6, 9]


# Let's see an example of list comprehension with nested loops and if statement.
# my_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# new_list = [j for i in my_list for j in i if j % 2 == 0]
# print(new_list)

# In the above example, we are iterating over each element in the list and storing the even numbers in a new list.

# Let's understand the above example in a normal way.
# my_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# new_list = []
# for i in my_list:
#     for j in i:
#         if j % 2 == 0:
#             new_list.append(j)
# print(new_list)

# Let's understand step by step:
# Outer Loop(for i in my_list):
# The outer loop iterates over each element in my_list(i.e., [1, 2, 3], [4, 5, 6], [7, 8, 9]).

# Inner Loop(for j in i):
# For every value of i in the outer loop, the inner loop iterates over each element in i.

# Condition(if j % 2 == 0):
# For each element j in i, the condition j % 2 == 0 is checked. If the condition is true, then the element is added to the new_list.


# Let's see an example of list comprehension with nested loops and if-else statement.
# my_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# new_list = [j if j % 2 == 0 else j**2 for i in my_list for j in i]
# print(new_list)

# In the above example, we are iterating over each element in the list and storing the even numbers and taking the square of odd numbers in a new list.

# Let's understand the above example in a normal way.
# my_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# new_list = []
# for i in my_list:
#     for j in i:
#         if j % 2 == 0:
#             new_list.append(j)
#         else:
#             new_list.append(j**2)
# print(new_list)


# Task 1
# Create a list of numbers that add 5 to each number in a list
# Solution:
# my_list = [1, 2, 3, 4, 5]
# new_list = [i+5 for i in my_list]
# print(new_list)


# Task 2
# Create a flat list from a list of 2-element tuples.
# Solution:
# my_list = [(1, 2), (3, 4), (5, 6)]
# new_list = [j for i in my_list for j in i]
# print(new_list)


# Task 3
# Create a list of squares of even numbers, and cubes of odd numbers from a list.
# Solution:
# my_list = [1, 2, 3, 4, 5]
# new_list = [i**2 if i % 2 == 0 else i**3 for i in my_list]
# print(new_list)


# Task 4
# Calculate the sum of each row in a matrix
# Solution:
# matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
# sum_of_rows = [sum(i) for i in matrix]
# print(sum_of_rows)


# Task 5
# Create a list containing numbers greater than 10 from a given list, multiplied by 2.
# Solution:
# my_list = [1, 20, 3, 40, 5]
# new_list = [i*2 for i in my_list if i > 10]
# print(new_list)


# Task 6
# Remove vowels from each string in a list.
# Solution:
# my_list = ['hello', 'world', 'python']
# new_list = [''.join([j for j in i if j not in 'aeiou']) for i in my_list]
# print(new_list)


# Task 7
# Create a list of the first letter of each word in a given sentence.
# Solution:
# sentence = 'This is a sentence'
# first_letters = [i[0] for i in sentence.split()]
# print(first_letters)
