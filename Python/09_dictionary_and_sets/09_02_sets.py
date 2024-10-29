# What if I create something like this:
# s = {}
# This is an empty dictionary.

# But what if I do this:
# s = {1, 2, 3, 4, 5}
# print(s)
# This is a set.

# What is a set?
# A set is a collection which is unordered and un-indexed. In Python sets are written with curly brackets.

# Both sets and dictionaries are written with curly brackets. But sets do not have key-value pairs.
# Sets are used to store multiple items in a single variable.

# How to create an empty set?
# s = set()
# print(s) # set()

# The main advantage of using a set, as opposed to a list, is that it has a highly optimized method for checking whether a specific element is contained in the set. This is based on a data structure known as a hash table.
# In sets, a value can't be repeated. If we try to add a repeated value, it will not be added.
# s = {1, 2, 3, 4, 5, 5, 5, 5, 5}
# print(s) # {1, 2, 3, 4, 5}

# Sets does not maintain the order of the elements.
# s = {5, 4, 3, 2, 1}
# print(s) # {1, 2, 3, 4, 5}

# We can't access the elements of a set by using an index.
# s = {1, 2, 3, 4, 5}
# print(s[0]) # TypeError: 'set' object is not subscriptable


# Sets methods
# 1. add()
# Adds an element to the set
# s = {1, 2, 3, 4, 5}
# s.add(6)
# print(s) # {1, 2, 3, 4, 5, 6}

# 2. clear()
# Removes all the elements from the set
# s = {1, 2, 3, 4, 5}
# s.clear()
# print(s) # set()

# 3. copy()
# Returns a copy of the set
# s = {1, 2, 3, 4, 5}
# s1 = s.copy()
# print(s1) # {1, 2, 3, 4, 5}

# 4. difference()
# Returns a set containing the difference between two or more sets
# s1 = {1, 2, 3, 4, 5}
# s2 = {4, 5, 6, 7, 8}
# s3 = s1.difference(s2)
# print(s3) # {1, 2, 3}
# This will return a set containing the elements that are only in s1, but not in s2.
# We can do the opposite by using s2.difference(s1)

# 5. difference_update()
# Removes the items in this set that are also included in another, specified set
# s1 = {1, 2, 3, 4, 5}
# s2 = {4, 5, 6, 7, 8}
# s1.difference_update(s2)
# print(s1) # {1, 2, 3}
# This will remove the items that are in s2 from s1.

# 6. discard()
# Remove the specified item
# s = {1, 2, 3, 4, 5}
# s.discard(3)
# print(s) # {1, 2, 4, 5}

# 7. intersection()
# Returns a set, that is the intersection of two other sets (the items that are present in both sets)
# s1 = {1, 2, 3, 4, 5}
# s2 = {4, 5, 6, 7, 8}
# s3 = s1.intersection(s2)
# print(s3) # {4, 5}

# 8. intersection_update()
# Removes the items in this set that are not present in other, specified set(s)
# s1 = {1, 2, 3, 4, 5}
# s2 = {4, 5, 6, 7, 8}
# s1.intersection_update(s2)
# print(s1) # {4, 5}

# 9. isdisjoint()
# Returns whether two sets have a intersection or not (no common elements)
# s1 = {1, 2, 3, 4, 5}
# s2 = {6, 7, 8, 9, 10}
# print(s1.isdisjoint(s2)) # True
# s3 = {5, 6, 7, 8, 9}
# print(s1.isdisjoint(s3)) # False

# 10. issubset()
# Returns whether another set contains this set or not (all elements of this set are in the other set)
# s1 = {1, 2, 3, 4, 5}
# s2 = {1, 2, 3}
# print(s2.issubset(s1)) # True
# s3 = {6, 7, 8}
# print(s3.issubset(s1)) # False

# 11. issuperset()
# Returns whether this set contains another set or not (all elements of the other set are in this set)
# s1 = {1, 2, 3, 4, 5}
# s2 = {1, 2, 3}
# print(s1.issuperset(s2)) # True
# s3 = {6, 7, 8}
# print(s1.issuperset(s3)) # False

# 12. pop()
# Removes an element from the set
# s = {1, 2, 3, 4, 5}
# s.pop()
# print(s) # {2, 3, 4, 5}
# This will remove a random element from the set.

# 13. remove()
# Removes the specified element
# s = {1, 2, 3, 4, 5}
# s.remove(3)
# print(s) # {1, 2, 4, 5}

# The difference between remove() and discard() is that if the element is not present in the set, remove() will raise an error, but discard() will not.

# 14. symmetric_difference()
# Returns a set with the symmetric differences of two sets (the elements that are not present in both sets)
# s1 = {1, 2, 3, 4, 5}
# s2 = {4, 5, 6, 7, 8}
# s3 = s1.symmetric_difference(s2)
# print(s3) # {1, 2, 3, 6, 7, 8}

# 15. symmetric_difference_update()
# Inserts the symmetric differences from this set and another (the elements that are not present in both sets)
# s1 = {1, 2, 3, 4, 5}
# s2 = {4, 5, 6, 7, 8}
# s1.symmetric_difference_update(s2)
# print(s1) # {1, 2, 3, 6, 7, 8}

# 16. union()
# Return a set containing the union of sets (all items from both sets, but no duplicates)
# s1 = {1, 2, 3, 4, 5}
# s2 = {4, 5, 6, 7, 8}
# s3 = s1.union(s2)
# print(s3) # {1, 2, 3, 4, 5, 6, 7, 8}

# 17. update()
# Update the set with the union of this set and others (all items from both sets, but no duplicates)
# s1 = {1, 2, 3, 4, 5}
# s2 = {4, 5, 6, 7, 8}
# s1.update(s2)
# print(s1) # {1, 2, 3, 4, 5, 6, 7, 8}
# This will update s1 with the union of s1 and s2.

# The difference between update() and union() is that update() will update the set in place, but union() will return a new set without changing the original set.

# There are more methods for sets. You can check them out in the Python documentation.


# Task 1
# Write a program to create a dictionary of Hindi words with values as their English translation. Provide user with an option to look it up!
# Solution
# words = {
#     "pani": "water",
#     "roti": "bread",
#     "aag": "fire",
#     "mitti": "soil",
#     "patta": "leaf"
# }

# word = input("Enter a word you want meaning for: ")
# print(words[word])

# Task 2
# Write a program to input eight numbers from the user and display all the unique numbers (once).
# Solution
# s = set()
# for i in range(8):
#     num = int(input("Enter a number: "))
#     s.add(num)
# print(s)

# Without using a loop
# s = set()
# num1 = int(input("Enter a number: "))
# s.add(num1)
# num2 = int(input("Enter a number: "))
# s.add(num2)
# num3 = int(input("Enter a number: "))
# s.add(num3)
# num4 = int(input("Enter a number: "))
# s.add(num4)
# num5 = int(input("Enter a number: "))
# s.add(num5)
# num6 = int(input("Enter a number: "))
# s.add(num6)
# num7 = int(input("Enter a number: "))
# s.add(num7)
# num8 = int(input("Enter a number: "))
# s.add(num8)
# print(s)

# Task 3
# Can we have a set with 18 (int) and "18" (str) as a value in it?
# Solution
# Yes, we can have a set with 18 (int) and "18" (str) as a value in it. They are different values, so they can be stored in the same set.
# s = {18, "18"}
# print(s) # {18, '18'}

# Task 4
# What will be the length of the following set s:
# s = set()
# s.add(20)
# s.add(20.0)
# s.add("20")
# Solution
# The length of the set s will be 2.
# s = set()
# s.add(20)
# s.add(20.0)
# s.add("20")
# print(s) # {20, '20'}
# print(len(s)) # 2
# Here, 20 and 20.0 are the same values, so only one of them will be stored in the set. But "20" is a different value, so it will be stored in the set.

# Task 5
# s = {}, what is the type of s?
# Solution
# The type of s will be a dictionary.
# s = {}
# print(type(s)) # <class 'dict'>

# Task 6
# Create an empty dictionary. Allow 4 friends to enter their favorite language as value and use key as their names. Assume that the names are unique.
# Solution
# friends = {}
# for i in range(4):
#     name = input("Enter your name: ")
#     lang = input("Enter your favorite language: ")
#     friends[name] = lang
# print(friends)

# Without using a loop
# friends = {}
# name1 = input("Enter your name: ")
# lang1 = input("Enter your favorite language: ")
# friends[name1] = lang1
# name2 = input("Enter your name: ")
# lang2 = input("Enter your favorite language: ")
# friends[name2] = lang2
# name3 = input("Enter your name: ")
# lang3 = input("Enter your favorite language: ")
# friends[name3] = lang3
# name4 = input("Enter your name: ")
# lang4 = input("Enter your favorite language: ")
# friends[name4] = lang4
# print(friends)

# Task 7
# Create an empty dictionary. Allow 4 friends to enter their favorite language as value and use key as their names. Assume that the names are unique.
# Solution
# friends = {}
# for i in range(4):
#     name = input("Enter your name: ")
#     lang = input("Enter your favorite language: ")
#     friends[name] = lang
# print(friends)

# Without using a loop

# friends = {}
# name1 = input("Enter your name: ")
# lang1 = input("Enter your favorite language: ")
# friends[name1] = lang1
# name2 = input("Enter your name: ")
# lang2 = input("Enter your favorite language: ")
# friends[name2] = lang2
# name3 = input("Enter your name: ")
# lang3 = input("Enter your favorite language: ")
# friends[name3] = lang3
# name4 = input("Enter your name: ")
# lang4 = input("Enter your favorite language: ")
# friends[name4] = lang4
# print(friends)

# Task 8
# If languages of two friends are same; what will happen to the program in problem 6?
# Solution
# If the languages of two friends are the same, the program will work fine. The dictionary will store the last value for the key.
# friends = {}
# friends["Ritika"] = "Python"
# friends["Rahul"] = "Python"
# print(friends) # {'Ritika': 'Python ', 'Rahul': 'Python'}

# Task 9
# Can you change the values inside a list which is contained in set S?
# s = {8, 7, 12, "SRL", [1, 2]}
# Solution
# No, we can't change the values inside a list which is contained in set S. Lists are mutable, so they can't be stored in a set.
# s = {8, 7, 12, "SRL", [1, 2]}
# print(s) # TypeError: unhashable type: 'list'
