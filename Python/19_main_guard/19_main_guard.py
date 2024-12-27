# Let's create a file called module.py and write a function called mainFunc() to it.
# def mainFunc():
#     print("This is the main function of the module.")

# mainFunc()


# Let's create another file called main.py and import the module.py file.
# from module import mainFunc

# Just by writing this one line, we were able to call the mainFunc in main.py


# How this works?
# When we import a module, Python executes the code in the module.
# So, when we import module.py in main.py, Python executes the code in module.py.
# This is why we were able to call the mainFunc in main.py.

# Let's add this code to module.py
# print(__name__)

# When we run module.py, the __name__ variable is set to __main__.

# When we import module.py in main.py, the __name__ variable is set to module.
# So basically, when __name__ is used to check whether the module is being run directly or being imported.

# Let's add this code to module.py
# def mainFunc():
#     print("This is the main function of the module.")

# if __name__ == "__main__":
#     print("This is running from module.py")
#     mainFunc()
#     print(__name__)


# Now if we run module.py, we will see the output:
# This is running from module.py
# This is the main function of the module.
# __main__

# But if we import module.py in main.py, we will see the output:
# module

# This is because when we import module.py in main.py, the __name__ variable is set to module.
# So, the code inside the if __name__ == "__main__": block will not run.

# This is how we can use the __name__ variable to check whether the module is being run directly or being imported.

# This is called main guard.
# This is a common practice to put the code that should run only when the module is run directly inside the if __name__ == "__main__": block.

# One more common practice is to put the if __name__ == "__main__": block at the end of the module because it makes the code more readable.
