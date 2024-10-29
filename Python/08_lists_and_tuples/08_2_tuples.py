# Tuples are just like lists, but you can't change their values.
# The values that you give it first up, are the values that you are stuck with for the rest of the program.
# Example: tup1 = ('physics', 'chemistry', 1997, 2000)

# Accessing Values in Tuples
# To access values in tuple, use the square brackets for slicing along with the index or indices to obtain value available at that index.
# tup1 = ('physics', 'chemistry', 1997, 2000)
# print(tup1[0]) # physics
# print(tup1[1]) # chemistry
# print(tup1[2]) # 1997
# print(tup1[3]) # 2000

# If I do type(tup1), it will return <class 'tuple'>.

# We can even create an empty tuple:
# tup1 = ()
# print(tup1) # ()

# To write a tuple containing a single value you have to include a comma, even though there is only one value:
# tup1 = (50,)
# print(tup1) # (50,)

# If I try to change the value of a tuple, it will give me an error:
# tup1 = (12, 34.56)
# tup1[0] = 100
# print(tup1) # TypeError: 'tuple' object does not support item assignment

# Tuple Methods
# 1. len(tuple)
# Gives the total length of the tuple.
# tup1 = ('physics', 'chemistry', 1997, 2000)
# print(len(tup1)) # 4
# It is the same as the list.

# 2. max(tuple)
# Returns the items from the tuple with the maximum value.
# tup1 = (5, 10, 15, 20, 25)
# print(max(tup1)) # 25

# 3. min(tuple)
# Returns the items from the tuple with the minimum value.
# tup1 = (5, 10, 15, 20, 25)
# print(min(tup1)) # 5

# 4. Count
# This method returns the number of times a specified value occurs in a tuple.
# tup1 = (5, 10, 15, 20, 25)
# print(tup1.count(10)) # 1

# 5. Index
# This method returns the first index at which a specified value occurs.
# tup1 = (5, 10, 15, 20, 25)
# print(tup1.index(15)) # 2

# Does pop, append, remove, insert, sort, reverse work on tuples?
# No, they don't. They will give an error.
# tup1 = (5, 10, 15, 20, 25)
# tup1.pop()
# print(tup1) # AttributeError: 'tuple' object has no attribute 'pop'

# Tuple Operations
# 1. Concatenation
# To add two tuples, you can use the + operator.
# tup1 = (1, 2, 3)
# tup2 = (4, 5, 6)
# tup3 = tup1 + tup2
# print(tup3) # (1, 2, 3, 4, 5, 6)

# 2. Repetition
# To repeat a tuple, you can use the * operator.
# tup1 = ('Hi!',)
# print(tup1 * 4) # ('Hi!', 'Hi!', 'Hi!', 'Hi!')

# 3. Membership
# To check if an item is present in the tuple, you can use the in keyword.
# tup1 = ('Hi!',)
# print('Hi!' in tup1) # True
# print('Hello World!' in tup1) # False

# 4. Iteration
# To iterate through the items of a tuple, you can use a for loop.
# tup1 = ('Hi!', 'Hello World!')
# for x in tup1:
#     print(x)
# Hi!
# Hello World!

# 5. Slicing
# To slice a tuple, you can use the colon operator.
# tup1 = ('Hi!', 'Hello World!', 'How are you?')
# print(tup1[1:]) # ('Hello World!', 'How are you?')

# Tuple Packing
# When we create a tuple, we normally assign values to it. This is called "packing" a tuple.
# tup1 = ('physics', 'chemistry', 1997, 2000)
# print(tup1) # ('physics', 'chemistry', 1997, 2000)

# Tuple Unpacking
# If we want to assign the values of a tuple to different variables, we can do so.
# tup1 = ('physics', 'chemistry', 1997, 2000)
# subject1, subject2, year1, year2 = tup1
# print(subject1) # physics
# print(subject2) # chemistry
# print(year1) # 1997
# print(year2) # 2000
# Basically unpacking means same as destructuring in JavaScript.


# Task 1
# Write a program to store seven fruits in a list entered by the user.
# Solution
# fruits = []
# for i in range(7):
#     fruit = input('Enter a fruit: ')
#     fruits.append(fruit)
# print(fruits)

# Without using loops, we can do this by:
# fruits = []
# fruit1 = input('Enter a fruit: ')
# fruits.append(fruit1)
# fruit2 = input('Enter a fruit: ')
# fruits.append(fruit2)
# fruit3 = input('Enter a fruit: ')
# fruits.append(fruit3)
# fruit4 = input('Enter a fruit: ')
# fruits.append(fruit4)
# fruit5 = input('Enter a fruit: ')
# fruits.append(fruit5)
# fruit6 = input('Enter a fruit: ')
# fruits.append(fruit6)
# fruit7 = input('Enter a fruit: ')
# fruits.append(fruit7)
# print(fruits)

# Task 2
# Write a program to accept marks of 6 students and display them in a sorted manner.
# Solution
# marks = []
# for i in range(6):
#     mark = int(input('Enter marks: '))
#     marks.append(mark)
# marks.sort()
# print(marks)
# This will sort the marks in ascending order.

# Without using loops, we can do this by:
# marks = []
# mark1 = int(input('Enter marks: '))
# marks.append(mark1)
# mark2 = int(input('Enter marks: '))
# marks.append(mark2)
# mark3 = int(input('Enter marks: '))
# marks.append(mark3)
# mark4 = int(input('Enter marks: '))
# marks.append(mark4)
# mark5 = int(input('Enter marks: '))
# marks.append(mark5)
# mark6 = int(input('Enter marks: '))
# marks.append(mark6)
# marks.sort()
# print(marks)

# Task 3
# Check that a type cannot be changed in python.
# Solution
# tup1 = (12, 34.56)
# tup1[0] = 100
# print(tup1) # TypeError: 'tuple' object does not support item assignment

# Task 4
# Write a program to sum a list with 4 numbers.
# Solution
# numbers = [1, 2, 3, 4]
# print(sum(numbers))

# Without using sum function, we can do this by:
# numbers = [1, 2, 3, 4]
# total = 0
# for number in numbers:
#     total += number
# print(total)

# Task 5
# Write a program to count the number of zeros in the following tuple:
# a = (7, 0, 8, 0, 0, 9)
# Solution
# a = (7, 0, 8, 0, 0, 9)
# print(a.count(0))

# Task 6
# Write a program to get the 4th element and 4th element from last of a tuple.
# a = (7, 0, 8, 0, 0, 9)
# Solution
# a = (7, 0, 8, 0, 0, 9)
# print(a[3]) # 0
# print(a[-4]) # 8
