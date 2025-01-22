# Generator functions allow you to declare a function that behaves like an iterator, i.e. it can be used in a for loop.
# The yield statement is used to define a generator, replacing the return of a function to provide a result to its caller without destroying local variables.

# Generator produces items lazily, on the fly, and you can iterate over it using a for loop.
# Lazily means that the generator would only produce the next element when it is needed, i.e. when the for loop asks for it, not all at once.

# A generator function is defined like a normal function, but whenever it needs to generate a value, it does so with the yield keyword rather than return.

# A generator function that yields 1 for first time, 2 for second time and 3 for third time.
# def simple_generator():
#     yield 1
#     yield 2
#     yield 3


# for value in simple_generator():
#     print(value)

# Output:
# 1
# 2
# 3

# This is a simple example of a generator function.


# Instead of using a for loop, you can also use the next() function to iterate over the generator.
# gen = simple_generator()
# print(next(gen))  # Output: 1
# print(next(gen))  # Output: 2
# print(next(gen))  # Output: 3

# print(next(gen))  # Output: StopIteration error


# The generator function can also take arguments.
# def generator_with_arguments(max):
#     count = 1
#     while count <= max:
#         yield count
#         count += 1


# for value in generator_with_arguments(3):
#     print(value)

# Output:
# 1
# 2
# 3

# Here, yield count is used to return the value of count to the caller and the state of the function is saved.
# When the function is called again it resumes from the last yield statement.


# Generators are memory efficient because they only load the data they need to return to the caller.
# When the generator is called, it returns an object (iterator) but does not start the function.
# The function is only started when the next() method is called on the iterator.


# The generator function can also be used to generate an infinite sequence.
# def infinite_sequence():
#     num = 0
#     while True:
#         yield num
#         num += 1


# for i in infinite_sequence():
#     print(i)


# Output:
# 0
# 1
# 2
# 3......... and so on till infinity.


# Generator expressions:
# Generator expressions are similar to list comprehensions, but they return an iterator.

# Syntax:
# (expression for item in iterable)
# gen = (x**2 for x in range(5))
# print(next(gen))  # Output: 0
# print(next(gen))  # Output: 1

# for i in gen:
#     print(i)


# Output:
# 4
# 9
# 16


# Advantages of Generators
# 1. Easy to implement
# 2. Memory efficient
# 3. Represent infinite stream
# 4. Pipelining Generators
# 5. Generator expressions are memory efficient


# Disadvantages of Generators
# 1. Hard to understand
# 2. Hard to debug


# Handling Large Data
# Generators are best for calculating large sets of results (particularly in calculations that involve loops themselves) where you don’t want to allocate the memory for all results at the same time.

# def read_large_file(file_path):
#     with open(file_path, 'r') as file:
#         for line in file:
#             yield line


# for line in read_large_file('large_text_file.txt'):
#     print(line.strip())


# Generators are a great way to optimize memory usage, but they can only be iterated over once.


# Fibonacci Series using Generators
# def fibonacci(n):
#     a, b = 0, 1
#     for _ in range(n):
#         yield a
#         a, b = b, a + b


# for i in fibonacci(10):
#     print(i)


# Output:
# 0
# 1
# 1
# 2
# 3
# 5
# 8
# 13
# 21
# 34


# Generator Lifecycle
# Created: When the generator function or expression is invoked, it returns a generator object but does not execute any code.
# Running: Each call to next() or send() executes the generator function until the next yield statement or the function ends.
# Suspended: After yielding a value, the generator pauses execution and maintains its state.
# Closed: When the generator finishes(either naturally or via close()), it cannot be resumed.


# Task 1:
# Write a generator function that generates the squares of numbers up to n.
# Solution:
# def square_generator(n):
#     for i in range(n):
#         yield i**2


# for i in square_generator(5):
#     print(i)


# Task 2:
# Write a generator function that writes multiplication tables up to n.
# Solution:
# def multiplication_table(n):
#     for i in range(1, 11):
#         yield f'{n} x {i} = {n*i}'

# for i in multiplication_table(5):
#     print(i)


# Task 3:
# Write a generator function that generates the first n prime numbers.
# Solution:
# def is_prime(num):
#     if num < 2:
#         return False
#     for i in range(2, num):
#         if num % i == 0:
#             return False
#     return True


# def prime_generator(n):
#     count = 0
#     num = 2
#     while count < n:
#         if is_prime(num):
#             yield num
#             count += 1
#         num += 1


# for i in prime_generator(5):
#     print(i)
