# Whenever a python program is run, it is loaded in the memory.
# The memory here is called RAM (Random Access Memory).
# Ram is volatile memory, which means that the data is lost when the power is turned off.

# In order to persist the data, we need to store it in a non-volatile memory.
# Non-volatile memory is the memory that retains the data even when the power is turned off.
# This is where the concept of file handling comes into play.

# A file is data stored in a storage device.
# A python program can talk to the file by reading content from it and writing content to it.

# For storing data, we can use files, databases, or cloud storage.
# Files are the simplest way to store data.
# Files are stored on the disk, which is a non-volatile memory.

# If a program is run, the data is loaded into the RAM. The data is lost when the power is turned off or the program is terminated.

# Types of files:
# 1. Text files: These files contain human-readable characters.
# 2. Binary files: These files contain binary data.

# Lets create a file and write some data to it.
# Lets create a file called test.txt and write some data to it.
# ("This is a test file.")

# Reading from a file:
# For reading a file, we need to open the file in read mode.
# To open a file, we use the open() function.
# The open() function takes two arguments: the file name and the mode.
# The mode can be read mode, write mode, or append mode.

# The open() function returns a file object.
# The file object has methods for reading and writing data.
# The read() method reads the content of the file.
# The write() method writes the content to the file.

# Lets open the file test.txt in read mode and read the content of the file.
# The read() method reads the content of the file and returns it as a string.
# The read() method reads the entire content of the file.

# We also need to close the file after reading it.
# To close the file, we use the close() method.

# file = open("Python/15_file_input_output/test.txt", "r")
# content = file.read()
# print(content)
# file.close()

# If we run the above code, we will get the following output:
# This is a test file.

# Here we have red the content of the file test.txt in read mode and printed it.

# It is necessary to close the file after reading it because the file remains open until the program is terminated.

# By default, the open() function opens the file in read mode.

# Writing to a file:
# To write to a file, we need to open the file in write mode.
# To open a file in write mode, we use the open() function with the mode as "w".
# The write() method writes the content to the file.

# Lets open the file test.txt in write mode and write some content to it.
# If the file does not exist, it will be created.
# If the file exists, it will be overwritten.

# file = open("Python/15_file_input_output/write.txt", "w")
# file.write("This is a write file.")
# file.close()

# If we run the above code, a file called write.txt will be created with the content "This is a write file." If the file already exists, it will be overwritten.

# Other methods to read from a file:
# 1. read(n): This method reads n characters from the file.
# 2. readline(): This method reads a line from the file.
# 3. readlines(): This method reads all the lines from the file and returns them as a list.

# 1. read(n): This method reads n characters from the file.
# Lets read the first 5 characters from the file test.txt.

# file = open("Python/15_file_input_output/test.txt", "r")
# content = file.read(5)
# print(content)
# file.close()

# If we run the above code, we will get the following output:
# This

# 2. readline(): This method reads a line from the file.
# Lets read the first line from the file test.txt.

# file = open("Python/15_file_input_output/test.txt", "r")
# content = file.readline()
# print(content)
# file.close()

# If we run the above code, we will get the following output:
# This is a test file.

# 3. readlines(): This method reads all the lines from the file and returns them as a list.
# Lets read all the lines from the file test.txt.

# file = open("Python/15_file_input_output/test.txt", "r")
# content = file.readlines()
# print(content)
# file.close()

# If we run the above code, we will get the following output:
# ['This is a test file.']

# The readlines() method reads all the lines from the file and returns them as a list.


# Modes of opening a file:
# There are different modes to open a file.
# The modes are as follows:
# 1. r: This mode opens the file in read mode. It is the default mode.
# 2. w: This mode opens the file in write mode. If the file does not exist, it will be created. If the file exists, it will be overwritten.
# 3. a: This mode opens the file in append mode. If the file does not exist, it will be created. If the file exists, the content will be appended to the end of the file.
# 4. r+: This mode opens the file in read and write mode.
# 5. w+: This mode opens the file in write and read mode. If the file does not exist, it will be created. If the file exists, it will be overwritten.
# 6. a+: This mode opens the file in append and read mode. If the file does not exist, it will be created. If the file exists, the content will be appended to the end of the file.
# 7. x: This mode opens the file in exclusive creation mode. If the file exists, the operation will fail.
# 8. rb: This mode opens the file in read mode for binary files.
# 9. wb: This mode opens the file in write mode for binary files.
# 10. ab: This mode opens the file in append mode for binary files.
# 11. rt: This mode opens the file in read mode for text files.
# 12. wt: This mode opens the file in write mode for text files.
# 13. at: This mode opens the file in append mode for text files.
# There are many more modes available to open a file.

# Lets open the file test.txt in append mode and append some content to it.

# file = open("Python/15_file_input_output/append.txt", "a")
# file.write("This is an append file. ")
# file.close()

# If we run the above code, a file called append.txt will be created with the content "This is an append file." If the file already exists, the content will be appended to the end of the file.


# With statement:
# The with statement is used to open a file and close it automatically.
# The with statement is used to simplify the code and make it more readable.
# The with statement ensures that the file is closed after the block of code is executed.

# Lets open the file test.txt using the with statement and read the content of the file.

# with open("Python/15_file_input_output/test.txt", "r") as file:
#     content = file.read()
#     print(content)

# If we run the above code, we will get the following output:
# This is a test file.

# The with statement is used to open the file test.txt in read mode and read the content of the file.
# The with statement ensures that the file is closed after the block of code is executed.
# You don't need to close the file explicitly when using the with statement.

# The with statement is used to open the file and close it automatically.

# Task 1
# Write a program to read the text from a given file 'poems.txt' and find out whether it contains the word 'twinkle'.
# Solution:
# with open("Python/15_file_input_output/poems.txt", "r") as file:
#     content = file.read()
#     if "twinkle" in content:
#         print("The file contains the word 'twinkle'.")
#     else:
#         print("The file does not contain the word 'twinkle'.")


# Task 2
# The game() function in a program lets a user play a game and returns the score as an integer. You need to read a file 'Hi-score.txt' which is either blank or contains the previous Hi-score. You need to write a program to update the Hi-score whenever the game() function breaks the Hi-score.
# Solution:
# def game():
#     return 100

# with open("Python/15_file_input_output/Hi-score.txt", "r") as file:
#     content = file.read()
#     if content == "":
#         hi_score = 0
#     else:
#         hi_score = int(content)

# score = game()
# if score > hi_score:
#     with open("Python/15_file_input_output/Hi-score.txt", "w") as file:
#         file.write(str(score))
#     print("Congratulations! You have broken the Hi-score.")
# else:
#     print("You have not broken the Hi-score.")


# Task 3
# Write a program to generate multiplication tables from 2 to 20 and write it to the different files. Place these files in a folder for a 13 — year old.
# Solution:
# import os

# os.mkdir("Python/15_file_input_output/13_year_old")
# for i in range(2, 21):
#     with open(f"Python/15_file_input_output/13_year_old/multiplication_table_of_{i}.txt", "w") as file:
#         for j in range(1, 11):
#             file.write(f"{i} X {j} = {i*j}\n")

# print("Files created successfully.")


# Task 4
# A file contains a word "Donkey" multiple times. You need to write a program which replace this word with ##### by updating the same file.
# Solution:
# with open("Python/15_file_input_output/donkey.txt", "r") as file:
#     content = file.read()

# content = content.replace("Donkey", "#####")

# with open("Python/15_file_input_output/donkey.txt", "w") as file:
#     file.write(content)

# print("The word 'Donkey' has been replaced with '#####'.")


# Task 5
# Repeat program 4 for a list of such words to be censored.
# Solution:
# with open("Python/15_file_input_output/donkey.txt", "r") as file:
#     content = file.read()

# words = ["Donkey", "Monkey", "Elephant", "Dog"]
# for word in words:
#     content = content.replace(word, "#####")

# with open("Python/15_file_input_output/donkey.txt", "w") as file:
#     file.write(content)

# print("The words have been replaced with '#####'.")


# Task 6
# Write a program to mine a log file and find out whether it contains 'python'.
# Solution:
# with open("Python/15_file_input_output/log.txt", "r") as file:
#     content = file.read()
#     if "python" in content.lower():
#         print("The log file contains 'python'.")
#     else:
#         print("The log file does not contain 'python'.")


# Task 7
# Write a program to find out the line number where python is present from ques 6.
# Solution:
# with open("Python/15_file_input_output/log.txt", "r") as file:
#     content = file.readlines()
#     for i in range(len(content)):
#         if "python" in content[i].lower():
#             print(f"Python is present in line {i+1}.")
#             break
#     else:
#         print("Python is not present in the file.")


# Task 8
# Write a program to make a copy of a text file "this. txt"
# Solution:
# with open("Python/15_file_input_output/this.txt", "r") as file:
#     content = file.read()

# with open("Python/15_file_input_output/this_copy.txt", "w") as file:
#     file.write(content)

# print("The file has been copied successfully.")


# Task 9
# Write a program to find out whether a file is identical & matches the content of another file.
# Solution:
# with open("Python/15_file_input_output/this.txt", "r") as file:
#     content1 = file.read()

# with open("Python/15_file_input_output/this_copy.txt", "r") as file:
#     content2 = file.read()

# if content1 == content2:
#     print("The files are identical.")
# else:
#     print("The files are not identical.")


# Task 10
# Write a program to wipe out the content of a file using python.
# Solution:
# with open("Python/15_file_input_output/this.txt", "w") as file:
#     file.write("")
# print("The content of the file has been wiped out.")


# Task 11
# Write a python program to rename a file to "renamed_by_ python.txt.
# Solution:
# import os

# os.rename("Python/15_file_input_output/this.txt", "Python/15_file_input_output/renamed_by_python.txt")
# print("The file has been renamed successfully.")
