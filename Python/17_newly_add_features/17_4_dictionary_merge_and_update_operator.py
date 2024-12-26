# New operators for dictionary merge and update
# 1. Merge operator: |
# The merge operator | can be used to merge two dictionaries. The merge operator returns a new dictionary containing all the key-value pairs from both dictionaries.
# If the same key exists in both dictionaries, the value from the second dictionary is used.
# Example:
# dict1 = {'a': 1, 'b': 2}
# dict2 = {'b': 3, 'c': 4}
# merged_dict = dict1 | dict2
# print(merged_dict)
# Output: {'a': 1, 'b': 3, 'c': 4}
# Note: The merge operator creates a new dictionary, leaving the original dictionaries unchanged.


# 2. Update operator: |=
# The update operator |= can be used to update the first dictionary with the key-value pairs from the second dictionary.
# If the same key exists in both dictionaries, the value from the second dictionary will overwrite the value in the first dictionary.
# Example:
# dict1 = {'a': 1, 'b': 2}
# dict2 = {'b': 3, 'c': 4}
# dict1 |= dict2
# print(dict1)
# Output: {'a': 1, 'b': 3, 'c': 4}
# Note: The update operator modifies the first dictionary in place.

# The merge and update operators are available in Python 3.9 and later versions.


# Task 1
# Create a function that takes two dictionaries and merges them using the merge operator ( | ). The function should return the merged dictionary.
# Solution:
# def merge_dicts(dict1, dict2):
#     return dict1 | dict2


# dict1 = {'a': 1, 'b': 2}
# dict2 = {'b': 3, 'c': 4}
# print(merge_dicts(dict1, dict2))


# Task 2
# Create a function that updates the first dictionary in place using the update operator (|=), and returns the updated dictionary.
# def update_dict(dict1, dict2):
#     dict1 |= dict2
#     return dict1


# dict1 = {'a': 1, 'b': 2}
# dict2 = {'b': 3, 'c': 4}
# print(update_dict(dict1, dict2))


# Task 3
# Create a function that takes two dictionaries, checks for common keys, and returns a dictionary that contains only those common key-value pairs.
# Solution:
# def common_keys(dict1, dict2):
#     return {key: dict1[key] for key in dict1 if key in dict2}


# dict1 = {'a': 1, 'b': 2, 'c': 3}
# dict2 = {'b': 3, 'c': 4, 'd': 5}
# print(common_keys(dict1, dict2))


# Task 4
# Create a function that accepts two dictionaries, checks if any key in the first dictionary is missing from the second, and returns a list of such keys.
# Solution:
# def missing_keys(dict1, dict2):
#     return [key for key in dict1 if key not in dict2]


# dict1 = {'a': 1, 'b': 2, 'c': 3}
# dict2 = {'b': 2, 'c': 4}
# print(missing_keys(dict1, dict2))
