# What if we want to tell a variable that you should be of this type only?
# We can use types in Python to do that.

# Let's say we have a variable num, and we only want numbers to store in it. We can do it like this:
# num: int = 10
# print(num)

# What if I type a string in it?
# num: int = 'Hello'
# print(num)

# What do you think will happen?
# We get the output as 'Hello'. It means that Python does not restrict the type of variable.

# Here, The : int is a type hint in Python. Type hints are optional and do not enforce type checking at runtime.
# It is for the developer to understand what type of data is expected in the variable.

# If I already know that the datatype of the variable is, let's say string, then I can use type hint like this:
# name: str = 'SRL'

# So basically, Type hints are added using colon (:) after the variable name and -> is for return type hint.

# Types in functions
# We can also use types in functions. Let's say we have a function that takes two integers and returns their sum.
# As we already know that every variable will be a number/int.
# It will also return a number/int.

# def sum(a: int, b: int) -> int:
#     return a + b
# print(sum(10, 20))

# Here, a: int and b: int are the type hints for the function sum.
# And -> int is the return type hint for the function sum.

# It makes other developers understand what type of data is expected in the function and what type of data it will return.


# Advance types
# These advance types are used to define the type of data that is not a simple data type like int, float, string, etc.
# These are the types that are used to define the complex data types like List, Tuple, Dict, Set, etc.
# We can use typing module to define these types.

# We can import the typing module like this:
# from typing import List, Tuple, Dict, Set

# List
# List is a collection of items. We can define a list like this:
# num_list: List[int] = [1, 2, 3, 4]
# print(num_list)
# str_list: List[str] = ['Hello', 'World']
# print(str_list)

# What if we have multiple data types in the list?
# We can define it like this:
# mixed_list: List[Union[int, str]] = [1, 'Hello']
# print(mixed_list)
# Here, we have to use Union because List expects one type argument, not multiple comma-separated types

# Tuple
# Tuple is a collection of items. We can define a tuple like this:
# num_tuple: Tuple[int, int, int] = (1, 2, 3)
# print(num_tuple)
# str_tuple: Tuple[str, str] = ('Hello', 'World')
# print(str_tuple)

# What if we have multiple data types in the tuple?
# We can define it like this:
# mixed_tuple: Tuple[int, str] = (1, 'Hello')

# Dict
# Dict is a collection of key-value pairs. We can define a dict like this:
# num_dict: Dict[str, int] = {'one': 1, 'two': 2}
# print(num_dict)
# str_dict: Dict[int, str] = {1: 'one', 2: 'two'}
# print(str_dict)


# Set
# Set is a collection of unique items. We can define a set like this:
# num_set: Set[int] = {1, 2, 3}
# print(num_set)
# str_set: Set[str] = {'Hello', 'World'}
# print(str_set)

# What if we have multiple data types in the set?
# We can define it like this:
# mixed_set: Set[int, str] = {1, 'Hello'}
# This will give an error because Set expects one type argument, not multiple comma-separated types.

# So, these are the advance types that we can use in Python to define the complex data types.

# We also have a type called Union.
# It is used to define the multiple types of data that a variable can store.
# We can define it like this:
# from typing import Union

# num_or_str: Union[int, str] = 10
# print(num_or_str)
# num_or_str = 'Hello'
# print(num_or_str)

# Basically, Union is used to define the multiple types of data that a variable can store.

# Like we have typescript in JavaScript, we can also use types in Python to define the type of data that a variable can store.


# Type Enforcement in Python
# Python is a dynamically typed language. It means that we do not have to define the type of variable.
# We can store any type of data in a variable.
# Type hints, introduced in PEP 484, are purely optional and are designed to help developers write more readable and maintainable code.
# While Python itself does not enforce these types, there are tools and techniques to simulate type enforcement during development

# 1. Static Type Enforcement with Tools
# Tools like mypy, pyright, or IDE features(e.g., in PyCharm, VSCode) perform static type checking. These tools analyze your code before execution and verify if the type hints are being adhered to.

# Let's use mypy to check the type enforcement in Python.
# To install mypy, run the following command:
# pip install mypy

# x: int = "Hello"  # This is a type error
# y: str = 10       # Another type error

# Let's run the file with mypy.
# mypy your_file.py

# It will show the type errors in the file.
# example.py: 1: error: Incompatible types in assignment(expression has type "str", variable has type "int")
# example.py: 2: error: Incompatible types in assignment(expression has type "int", variable has type "str")

# 2. Dynamic Type Enforcement with Runtime Tools
# Enforce types during runtime, you can use libraries like pydantic, typeguard, or manually validate types using isinstance().

# Let's use typeguard to check the type enforcement in Python.
# To install typeguard, run the following command:
# pip install typeguard

# from typeguard import typechecked

# @typechecked
# def add(a: int, b: int) -> int:
#     return a + b


# print(add(1, 2))  # Works
# print(add(1, "2"))  # Raises TypeError at runtime

# Error:
# TypeError: type of argument "b" must be int; got str instead

# 3. Manual Type Checking in Functions
# You can manually check the types of arguments in functions using isinstance.
# def add(a: int, b: int) -> int:
#     if not isinstance(a, int) or not isinstance(b, int):
#         raise TypeError("Both arguments must be integers")
#     return a + b


# print(add(1, 2))      # Works
# print(add(1, "hello"))  # Raises TypeError

# Error:
# TypeError: Both arguments must be integers


# Benefits of Type Enforcement
# Error Reduction: Catch bugs early during development.
# Improved Readability: Type hints make it easier for others (or future you) to understand the expected types.
# Better Tooling: IDEs and linters provide better auto-completions and error detection.
# Compatibility with Large Codebases: Ensures consistency and maintainability.


# "Any" type
# Any is a special type in Python that can be used to represent any type of data.
# It is used when we do not know the type of data that a variable can store.
# The Any type in Python is part of the typing module and represents a variable or value that can have any type.

# We can import Any like this:
# from typing import Any

# from typing import Any

# data: Any = 10  # Initially an integer
# print(data)

# data = "Hello, World!"  # Now a string
# print(data)

# data = [1, 2, 3]  # Now a list
# print(data)


# We can even use any as a type hint in functions.
# from typing import Any


# def process(data: Any) -> Any:
#     # Performs some operation based on type
#     if isinstance(data, int):
#         return data + 1
#     elif isinstance(data, str):
#         return data.upper()
#     else:
#         return "Unsupported type"


# print(process(42))       # Output: 43
# print(process("hello"))  # Output: HELLO
# print(process([1, 2]))   # Output: Unsupported type


# Optional Type
# In some cases, we might want to indicate that a variable or a function argument can either be a specific type or `None`.
# For example, a function might accept an integer or no value at all. For such cases, we use `Optional`.

# Importing Optional
# from typing import Optional

# # Defining a variable that can hold an integer or None
# num: Optional[int] = 10
# print(num)

# num = None  # Now it holds None
# print(num)

# # Optional in Functions
# # Let's say we have a function that accepts an integer or None.


# def greet(name: Optional[str]) -> str:
#     if name is None:
#         return "Hello, Guest!"
#     return f"Hello, {name}!"


# print(greet("Alice"))  # Output: Hello, Alice!
# print(greet(None))     # Output: Hello, Guest!

# # Optional is essentially shorthand for Union with None.
# # For example, Optional[int] is equivalent to Union[int, None].

# Literal Type
# Literal allows us to specify that a variable or function argument must take on a specific set of predefined values.
# This is useful when a variable should only contain certain values, like configuration options.

# # Importing Literal
# from typing import Literal

# # Using Literal for a specific set of values
# status: Literal["online", "offline", "busy"] = "online"
# print(status)

# # Changing to a valid value
# status = "offline"
# print(status)

# # Invalid value will raise a type-checking error with tools like mypy
# # status = "away"  # Error: Invalid value

# # Literal in Functions
# def set_status(user_status: Literal["active", "inactive"]) -> str:
#     return f"Status set to {user_status}."


# print(set_status("active"))    # Output: Status set to active.
# print(set_status("inactive"))  # Output: Status set to inactive.

# Uncommenting the below line will raise a type-checking error
# print(set_status("unknown"))  # Error: Invalid value


# Final Type
# Final is used to indicate that a variable should not be reassigned or a class should not be subclassed.
# It helps prevent accidental modifications or inheritance.

# Importing Final
# from typing import final
# from typing import Final

# # Using Final for constants
# PI: Final[float] = 3.14159
# print(PI)

# Attempting to reassign a Final variable will raise a type-checking error
# PI = 3.14  # Error: Cannot reassign a Final variable

# Final in Classes
# @final
# class Base:
#     def greet(self) -> str:
#         return "Hello from Base!"

# Attempting to subclass a final class will raise a type-checking error
# class Derived(Base):  # Error: Cannot inherit from final class
#     pass


# TypedDict
# TypedDict allows us to define the expected structure of a dictionary, specifying the keys and their corresponding types.

# Importing TypedDict
# from typing import TypedDict

# Defining a TypedDict
# class User(TypedDict):
#     name: str
#     age: int
#     active: bool


# Creating a dictionary following the TypedDict structure
# user: User = {"name": "Alice", "age": 30, "active": True}
# print(user)

# Adding or modifying keys outside the defined structure will raise a type-checking error
# Error: Key 'email' is not defined in 'User'
# user["email"] = "alice@example.com"
# print(user)


# Task 1
# Create a function that takes a list of integers and returns the sum of all the elements in the list.
# Solution
# from typing import List


# def sum_list(numbers: List[int]) -> int:
#     return sum(numbers)


# print(sum_list([1, 2, 3, 4, 5]))


# Task 2
# Create a function that takes a string and returns the string in uppercase if it's a palindrome, else in lowercase.
# Solution
# def check_palindrome_case(text: str) -> str:
#     if text == text[::-1]:
#         return text.upper()
#     return text.lower()


# print(check_palindrome_case("radar"))
# print(check_palindrome_case("hello"))


# Task 3
# Create a function that takes a dictionary with keys "name" and "age" and returns a greeting message.
# Solution
# from typing import TypedDict

# class Person(TypedDict):
#     name: str
#     age: int

# def greet_person(person: Person) -> str:
#     return f"Hello, {person['name']}! You are {person['age']} years old."

# print(greet_person({"name": "Alice", "age": 30}))
# print(greet_person({"name": "Bob", "age": 25}))


# Task 4
# Create a function that takes a string and returns the string in title case if it contains both uppercase and lowercase letters.
# Solution
# def title_case(text: str) -> str:
#     if any(char.islower() for char in text) and any(char.isupper() for char in text):
#         return text.title()
#     return text

# print(title_case("hello World"))
# print(title_case("HELLO WORLD"))


# Task 5
# Create a function that takes a list of integers and returns the product of all the elements in the list.
# Solution
# from typing import List

# def product_list(numbers: List[int]) -> int:
#     result = 1
#     for num in numbers:
#         result *= num
#     return result

# print(product_list([1, 2, 3, 4, 5]))
# print(product_list([2, 4, 6, 8]))
