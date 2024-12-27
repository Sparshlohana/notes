# The enumerate() function adds a counter to an iterable(like a list, tuple, or string) and returns it as an enumerate object.
# It is useful when you want to loop over an iterable and have an automatic counter.

# It's syntax is:
# enumerate(iterable, start=0)
# iterable: The sequence(e.g., list, tuple, string) you want to enumerate.
# start(optional): The starting value for the counter(default is 0).

# How it works:
# The enumerate() function takes two parameters: an iterable and a start value.
# It returns an enumerate object, which is an iterator that generates a tuple of the count and the values from the iterable.
# You can convert the enumerate object to a list, tuple, or dictionary.

# In simple words, enumerate() wraps the iterable with an index counter and then each item in the iterable is returned as a tuple (index, value) during iteration.

# Example
# fruits = ['apple', 'banana', 'cherry']

# for index, fruit in enumerate(fruits):
#     print(index, fruit)


# We will get the following output:
# 0 apple
# 1 banana
# 2 cherry


# We can even specify the start value for the counter. For example, if we want the counter to start at 1 instead of 0, we can do this:
# fruits = ['apple', 'banana', 'cherry']

# for index, fruit in enumerate(fruits, start=1):
#     print(index, fruit)

# We will get the following output:
# 1 apple
# 2 banana
# 3 cherry

# By default, the counter starts at 0. If you want to start the counter at a different number, you can specify the start parameter.

# You can use enumerate() with any iterable, such as lists, tuples, strings, etc.

# Example
# Creating dictionary from list using enumerate
# fruits = ['apple', 'banana', 'cherry']

# fruits_dict = dict(enumerate(fruits))
# print(fruits_dict)

# We will get the following output:
# {0: 'apple', 1: 'banana', 2: 'cherry'}

# In this example, we created a dictionary from a list using enumerate(). The keys of the dictionary are the index of the items in the list, and the values are the items themselves.
