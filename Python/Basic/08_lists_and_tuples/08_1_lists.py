# In python, lists are used to store multiple items in a single variable.
# In other programming languages, lists are called arrays.
# Lists are created using square brackets.
# Lists are ordered, changeable and allow duplicate values.

# In python, List are containers to store a set of values of any data type.
# Eg: l1 = ["apple", 1, True, 2.5, False]
# List can store any data type values.

# If I print the list, it will print all the values in the list.
# l1 = ["apple", 1, True, 2.5, False]
# print(l1)  # ['apple', 1, True, 2.5, False]

# We can access the list values using the index.
# l1 = ["apple", 1, True, 2.5, False]
# print(l1[0])  # apple
# print(l1[1])  # 1
# print(l1[2])  # True
# print(l1[3])  # 2.5
# print(l1[4])  # False
# print(l1[5])  # IndexError: list index out of range

# We can also access the list values using the negative index.
# l1 = ["apple", 1, True, 2.5, False]
# print(l1[-1])  # False
# print(l1[-2])  # 2.5
# print(l1[-3])  # True
# print(l1[-4])  # 1
# print(l1[-5])  # apple
# print(l1[-6])  # IndexError: list index out of range

# We studied strings, and now we know that strings are immutable but on the other hand, lists are mutable.
# If I want to change the value of the list, I can do that.
# l1 = ["apple", 1, True, 2.5, False]
# l1[0] = "banana"
# print(l1)  # ['banana', 1, True, 2.5, False]
# See here, I changed the value of the list at index 0 from "apple" to "banana".

# List can store duplicate values.
# l1 = ["apple", 1, True, 2.5, False, "apple", 1, True, 2.5, False]
# print(l1)  # ['apple', 1, True, 2.5, False, 'apple', 1, True, 2.5, False]

# List methods:
# 1. append()
# Adds an element at the end of the list.
# l1 = ["apple", 1, True, 2.5, False]
# l1.append("banana")
# print(l1)  # ['apple', 1, True, 2.5, False, 'banana']

# 2. insert()
# Adds an element at the specified position.
# l1 = ["apple", 1, True, 2.5, False]
# l1.insert(2, "banana")
# print(l1)  # ['apple', 1, 'banana', True, 2.5, False]
# It will insert the value "banana" at index 2.

# 3. remove()
# Removes the first item with the specified value.
# l1 = ["apple", 1, True, 2.5, False]
# l1.remove("apple")
# print(l1)  # [1, True, 2.5, False]
# It will remove the first occurrence of "apple" from the list.

# 4. pop()
# Removes the element at the specified position.
# l1 = ["apple", 1, True, 2.5, False]
# l1.pop(2)
# print(l1)  # ['apple', 1, 2.5, False]
# It will remove the value at index 2.

#  5. clear()
# Removes all the elements from the list.
# l1 = ["apple", 1, True, 2.5, False]
# l1.clear()
# print(l1)  # []

# 6. copy()
# Returns a copy of the list.
# l1 = ["apple", 1, True, 2.5, False]
# l2 = l1.copy()
# print(l2)  # ['apple', 1, True, 2.5, False]
# It will create a copy of the list l1 and store it in l2.

# 7. count()
# Returns the number of elements with the specified value.
# l1 = ["apple", 1, True, 2.5, False, "apple", 1, True, 2.5, False]
# print(l1.count("apple"))  # 2
# It will return the number of occurrences of "apple" in the list.

# 8. index()
# Returns the index of the first element with the specified value.
# l1 = ["apple", 1, True, 2.5, False, "apple", 1, True, 2.5, False]
# print(l1.index("apple"))  # 0
# It will return the index of the first occurrence of "apple".

# 9. reverse()
# Reverses the order of the list.
# l1 = ["apple", 1, True, 2.5, False]
# l1.reverse()
# print(l1)  # [False, 2.5, True, 1, 'apple']
# It will reverse the order of the list.

# 10. sort()
# Sorts the list.
# l1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
# l1.sort()
# print(l1)  # [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
# It will sort the list in ascending order.

# These are some of the list methods. There are many more methods available in the list. Study them from the official documentation.

# Slicing in List:
# We can slice the list using the slicing operator.
# l1 = ["apple", 1, True, 2.5, False]
# print(l1[1:4])  # [1, True, 2.5]
# It will print the values from index 1 to 3.

# Slicing works the same as in strings. It includes the start index but excludes the end index.

# Negative Slicing:
# l1 = ["apple", 1, True, 2.5, False]
# print(l1[-4:-1])  # [1, True, 2.5]
# It will print the values from index -4 to -2.
