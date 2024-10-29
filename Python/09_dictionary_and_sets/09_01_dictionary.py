# Dictionaries are a collection of key-value pairs.
# Dictionaries are mutable, unordered, and indexed.
# Dictionaries are written with curly brackets, and have keys and values.
# Dictionaries are used to store data values in key:value pairs.

# In JavaScript, dictionaries are called objects. In PHP, dictionaries are called associative arrays. In Java, dictionaries are called hashmaps. In C++, dictionaries are called maps.

# Dictionary cannot have two items with the same key.

# Create a dictionary
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# print(dict1) # {'brand': 'Ford', 'model': 'Mustang', 'year': 1964}
# print(type(dict1)) # <class 'dict'>

# Accessing Items
# We could access values of a particular index of a list by using an index.
# l1 = [1, 2, 3, 4, 5]
# print(l1[0]) # 1

# But if we try to access a value of a particular key of a dictionary by using an index, we will get an error.
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# print(dict1[0]) # KeyError: 0

# We could access values of a particular key of a dictionary by using the key.
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# print(dict1["brand"]) # Ford
# print(dict1["model"]) # Mustang
# print(dict1["year"]) # 1964

# Use case of dictionary
# If I have a large number of data, and I want to store them in a variable, I could use a dictionary and we can retrieve the data by using the key. It is easier and faster to use.

# Lets create a marks dictionary
# marks = {
#     "John": 90,
#     "Alice": 85,
#     "Bob": 80,
#     "Charlie": 75,
#     "David": 70
# }
# print(marks) # {'John': 90, 'Alice': 85, 'Bob': 80, 'Charlie': 75, 'David': 70}

# But if try to create a marks list, it will be difficult to retrieve the marks of a particular student.
# marks = [ ["John", 90], ["Alice", 85], ["Bob", 80], ["Charlie", 75], ["David", 70] ]
# Here, we can't directly access the marks of a particular student. We have to loop through the list to find the marks of a particular student.

# Change Values
# We could change the value of a particular key of a dictionary by using the key.
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# dict1["year"] = 2024
# print(dict1) # {'brand': 'Ford', 'model': 'Mustang', 'year': 2021}

# Add Items
# We could add new items to a dictionary by using a new key.
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# dict1["color"] = "red"
# print(dict1) # {'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'red'}

# Dictionary Methods
# 1. clear()
# Removes all the elements from the dictionary
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# dict1.clear()
# print(dict1) # {}

# 2. copy()
# Returns a copy of the dictionary
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# dict2 = dict1.copy()
# print(dict2) # {'brand': 'Ford', 'model': 'Mustang', 'year': 1964}

# 3. fromkeys()
# Returns a dictionary with the specified keys and values
# dict1 = dict.fromkeys(["brand", "model", "year"], "unknown")
# print(dict1)  # {'brand': 'unknown', 'model': 'unknown', 'year': 'unknown'}
# Here, the first argument is the keys and the second argument is the value of the keys.
# dict is the class name of the dictionary. So, we could use the fromkeys() method to create a dictionary.

# 4. get()
# Returns the value of the specified key
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# print(dict1.get("brand")) # Ford
# print(dict1.get("model")) # Mustang
# print(dict1.get("year")) # 1964
# The difference between get() and [] is that get() returns None if the key does not exist, but [] will raise an error.

# 5. items()
# Returns a list containing a tuple for each key value pair
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# print(dict1.items()) # dict_items([('brand', 'Ford'), ('model', 'Mustang'), ('year', 1964)])
# This is a list of tuples. We could loop through the list to get the key-value pairs.

# 6. keys()
# Returns a list containing the dictionary's keys
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# print(dict1.keys()) # dict_keys(['brand', 'model', 'year'])
# This is a list of keys.

# 7. pop()
# Removes the element with the specified key
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# dict1.pop("model")
# print(dict1) # {'brand': 'Ford', 'year': 1964}

# 8. popitem()
# Removes the last inserted key-value pair
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# dict1.popitem()
# print(dict1) # {'brand': 'Ford', 'model': 'Mustang'}

# 9. setdefault()
# Returns the value of the specified key. If the key does not exist: insert the key, with the specified value
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# print(dict1.setdefault("brand")) # Ford
# print(dict1.setdefault("color", "red")) # red
# print(dict1) # {'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'red'}

# 10. update()
# Updates the dictionary with the specified key-value pairs
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# dict1.update({"color": "red"})
# print(dict1) # {'brand': 'Ford', 'model': 'Mustang', 'year': 1964, 'color': 'red'}

# 11. values()
# Returns a list of all the values in the dictionary
# dict1 = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964
# }
# print(dict1.values()) # dict_values(['Ford', 'Mustang', 1964])

# There are many other methods in the dictionary class. You could check them out in the official documentation.
