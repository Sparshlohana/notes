# Python 3.10 introduced a new feature called match case.
# It is similar to switch case in other programming languages.

# The basic syntax of the match statement involves matching a variable against several cases using the case keyword.

# Example
# def status_code(status):
#     match status:
#         case 200:
#             return "OK"
#         case 400:
#             return "Bad Request"
#         case 404:
#             return "Not Found"
#         case _:
#             return "Unknown Status Code"


# print(status_code(200))
# print(status_code(400))
# print(status_code(404))
# print(status_code(500))

# Match case is used to compare the value of a variable against several patterns.
# The patterns are defined using the case keyword.
# The match statement is similar to the switch statement in other programming languages like C++, Java, and JavaScript.


# The underscore (_) acts as a "catch-all" for unmatched cases, similar to "default" in switch.


# Match case is not limited to integers or simple values; you can also match patterns.

# Advanced Pattern Matching
# Matching nested structures or sequences.
# def process_data(data):
#     match data:
#         case [x, y, z]:
#             return f"List with three elements: {x}, {y}, {z}"
#         case {"type": "error", "code": code}:
#             return f"Error with code: {code}"
#         case _:
#             return "Unknown format"


# print(process_data([1, 2, 3]))  # Output: List with three elements: 1, 2, 3
# print(process_data({"type": "error", "code": 404})) # Output: Error with code: 404
# print(process_data("unexpected"))  # Output: Unknown format


# Best Practices:
# Use match when handling multiple distinct cases for clarity and readability.
# Avoid using match for overly simple conditions; an if-elif-else might be more appropriate.

# The match statement is a powerful feature that can be used to simplify code that would otherwise require multiple if-elif-else statements.

# The match statement is a new feature in Python 3.10, so it may not be available in older versions of Python.

# Task 1
# Create a function that takes a day number(1 to 7) and returns the name of the corresponding day of the week.
# Solution:
# def day_of_week(day_number):
#     match day_number:
#         case 1:
#             return "Monday"
#         case 2:
#             return "Tuesday"
#         case 3:
#             return "Wednesday"
#         case 4:
#             return "Thursday"
#         case 5:
#             return "Friday"
#         case 6:
#             return "Saturday"
#         case 7:
#             return "Sunday"
#         case _:
#             return "Invalid day number"


# print(day_of_week(3))
# print(day_of_week(7))
# print(day_of_week(10))


# Task 2
# Create a function that checks the type of a variable (e.g., int, float, string, etc.) and returns a corresponding message.
# Solution:
# def check_type(variable):
#     match variable:
#         case int():
#             return "This is an integer"
#         case float():
#             return "This is a float"
#         case str():
#             return "This is a string"
#         case list():
#             return "This is a list"
#         case dict():
#             return "This is a dictionary"
#         case _:
#             return "Unknown type"


# print(check_type(42))
# print(check_type(3.14))
# print(check_type("hello"))
# print(check_type([1, 2, 3]))


# Task 3
# Create a function that matches a tuple with either two or three elements and returns a specific message.
# Solution:
# def process_tuple(data):
#     match data:
#         case (x, y):
#             return f"Tuple with two elements: {x}, {y}"
#         case (x, y, z):
#             return f"Tuple with three elements: {x}, {y}, {z}"
#         case _:
#             return "Unknown format"


# print(process_tuple((1, 2)))
# print(process_tuple((1, 2, 3)))
# print(process_tuple((1, 2, 3, 4)))


# Task 4
# Create a function that matches a dictionary with a specific structure({"action": "start"} or {"action": "stop"}) and returns an appropriate message.
# Solution:
# def process_action(action_dict):
#     match action_dict:
#         case {"action": "start"}:
#             return "Action started"
#         case {"action": "stop"}:
#             return "Action stopped"
#         case _:
#             return "Unknown action"


# print(process_action({"action": "start"}))
# print(process_action({"action": "stop"}))
# print(process_action({"action": "pause"}))


# Task 5
# Create a function that matches a list with exactly two elements and returns a message based on the elements.
# Solution:
# def match_two_elements(lst):
#     match lst:
#         case [x, y]:
#             return f"List with two elements: {x} and {y}"
#         case _:
#             return "List does not have two elements"


# print(match_two_elements([1, 2]))
# print(match_two_elements([1]))
# print(match_two_elements([1, 2, 3]))
