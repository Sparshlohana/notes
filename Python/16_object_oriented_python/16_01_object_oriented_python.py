# Object oriented programming in Python is a way to write programs that are more modular and easier to understand.
# There are two types of programming paradigms: procedural and object-oriented.
# In this chapter, we will learn about object-oriented programming in Python.

# Solving a problem by creating an object is one of the most popular ways to write code. This is called object-oriented programming.
# This uses the concept of dry (Don't Repeat Yourself) and code reusability.

# In object-oriented programming, we create classes and objects.

# A class is a blueprint for the object.

# Let's understand it with an example:
# Let's assume you have to give an exam, and for that exam, you have to submit a form. In that form, you will enter your name, email, age, etc.
# Once the form is filled by you, it will be your own form. If I submit the form, it will be my form. If Vatsal submits that form, it will be vatsal's form.

# Why would it be different? 
# Because the data in the form will be different for each person.

# But when the form was empty, who owned the form?
# No one, the form was owned by no one. It was just a black form.

# It was just a class, a blueprint for the form. Once you fill the form, it becomes an object.

# A class contains all the placeholders (variables) and functions (methods) that an object will have.

# Syntax:
# class ClassName:

# Class is defined in pascal case. It is a naming convention in which the first letter of each word in a compound word is capitalized.
# For example, MyName, MyAge, MyForm, etc.

# Let's create a basic class in Python.
# class MyClass:
#     name = "Sparsh"
#     language = "Python"
#     age = 20


# Now let's create an object of this class.
# myObj = MyClass()
# print(myObj.name)
# print(myObj.language)
# print(myObj.age)
# print(
#     f"My name is {myObj.name}. I am {myObj.age} years old. I love {myObj.language}.")

# Here, myObj is an object of the MyClass class.

# An object is an instance of a class. When a class is defined, a template (info) is defined.
# Memory is not allocated for the template. Memory is allocated when an object is created.

# Objects of a given class can access the variables and methods of that class. It can invoke the methods of that class without revealing the implementation details to the user. This is called encapsulation.

# Modelling a problem in OOPS
# We identify the following in a problem:
# 1. nouns: class: Employee, Student, Car, etc.
# 2. verbs: methods: getEmployee, getStudent, getCar, etc.
# 3. adjectives: attributes: name, age, salary, etc.

# Lets create a class named Employee.
# class Employee:
#     name = "Sparsh"
#     age = 20
#     salary = 10000


# emp = Employee()
# print(emp.name)
# print(emp.age)
# print(emp.salary)

# Here, we have created a class named Employee. It has three attributes: name, age, and salary.
# But the problem is that all the objects of the Employee class will have the same name, age, and salary.
# This is not the correct way to create a class.


# Let's remove the name attribute from the class and create an object of the Employee class cause we don't want all the objects to have the same name. We can have same age and salary for all for now.

# class Employee:
#     age = 20
#     salary = 10000

# sparsh = Employee()
# print(sparsh.age)
# print(sparsh.salary)

# vatsal = Employee()
# print(vatsal.age)
# print(vatsal.salary)

# Here, we have created two objects of the Employee class. Both objects have the same age and salary.

# But we don't have name attribute in the class. So, we can add the name attribute as:
# class Employee:
#     age = 20
#     salary = 10000


# sparsh = Employee()
# sparsh.name = "Sparsh"
# print(sparsh.name, sparsh.age, sparsh.salary)

# vatsal = Employee()
# vatsal.name = "Vatsal"
# print(vatsal.name, vatsal.age, vatsal.salary)

# Here, we have added the name attribute to the Employee class. Now, we can create objects of the Employee class with different names.

# Here, name is an instance attribute. It is not a class attribute. It is specific to the object. While age and salary are class attributes as they are common to all objects of the Employee class.

# Note: Instance attributes takes preference over class attributes during assignments and retrieval.
# This means that if we have an instance attribute with the same name as a class attribute, the instance attribute will be used.

# Let's see an example:
# class Employee:
#     age = 20
#     salary = 10000


# sparsh = Employee()
# sparsh.name = "Sparsh"
# sparsh.age = 25
# print(sparsh.name, sparsh.age, sparsh.salary)

# Here, name is an instance attribute, and age is both a class and instance attribute. When we print the age, it will print the instance attribute value as it takes preference over the class attribute. If we remove the age attribute from the object, it will print the class attribute value. If we remove the class attribute, it will throw an error.


# self parameter
# The self parameter is a reference to the current instance of the class. It is used to access variables that belong to the class. It is used to access the attributes and methods of the class. It is not a keyword in Python. You can use any other name instead of self.
# self refers to an instance of the class. It is automatically passed to the function call from an object.

# We can also add a method to the class. A method is a function that belongs to a class. It is a function that is defined inside a class.
# class Employee:
#     age = 20
#     salary = 10000

#     def getInfo():
#         print(f"The age is {age} and the salary is {salary}")

# Here, getInfo is a method of the Employee class. It is a function that belongs to the Employee class.

# Now, let's create an object of the Employee class and call the getInfo method.
# sparsh = Employee()
# sparsh.getInfo()

# If we run the above code, it will throw an error saying that getInfo() takes 0 positional arguments but 1 was given.
# This is because when we call a method of a class, the object itself is passed as the first argument.
# When we call a function of a class, it works like this:
# Employee.getInfo(sparsh)

# But we have not defined any parameter in the getInfo method. So, it will throw an error.

# To fix this, we have to add the self parameter to the getInfo method.
# class Employee:
#     age = 20
#     salary = 10000

#     def getInfo(self):
#         print(f"The age is {self.age} and the salary is {self.salary}")


# sparsh = Employee()
# sparsh.getInfo()

# Here, self is a reference to the current instance of the class. It is used to access the attributes of the class. It is used to access the age and salary attributes of the Employee class.

# In every method of a class, the first parameter is self. It is a reference to the current instance of the class. It is used to access the attributes and methods of the class.

# Lets add another method to the Employee class.
# class Employee:
#     age = 20
#     salary = 10000

#     def getInfo(self):
#         print(f"The age is {self.age} and the salary is {self.salary}")

#     def greet(self):
#         print("Good Morning")


# sparsh = Employee()
# sparsh.getInfo()
# sparsh.greet()

# Even if we are not using the self parameter in the greet method, we have to add it. It is a convention to add self as the first parameter in every method of a class.
# It will throw an error if we don't add self as the first parameter in the method.
# It is not necessary to use self as the name of the parameter. We can use any name instead of self. But it is a convention to use self as the name of the parameter.

# Static methods
# Static methods are the methods that are bound to the class rather than the object of the class. They do not require a class instance creation. So, they are not dependent on the state of the object.
# In simple words, static methods are the methods that do not have access to the instance of the class. They do not have access to the self parameter. They are not bound to the object of the class.

# Here our greet method is not dependent on the state of the object. It does not have access to the instance of the class.
# Still we are passing self as the parameter. There is no use of self in the greet method. So, we can make it a static method.

# class Employee:
#     age = 20
#     salary = 10000

#     def getInfo(self):
#         print(f"The age is {self.age} and the salary is {self.salary}")

#     @staticmethod
#     def greet():
#         print("Good Morning")


# sparsh = Employee()
# sparsh.getInfo()
# sparsh.greet()

# Here, we have added the @staticmethod decorator to the greet method. It makes the greet method a static method. It does not need the self parameter now.


# __init__ constructor
# It is a special method which runs as soon as the object is created.
# __init__ is also known as a constructor in object-oriented programming. It is used to initialize the object's state.
# It takes self as the first parameter and can take other parameters as well.

# What is a constructor?
# A constructor is a special method that is called when an object is created. It is used to initialize the object's state. It is used to set the initial values of the object's attributes.

# Lets modify the Employee class and add the __init__ method to it.
# class Employee:
#     def __init__(self):
#         print("Constructor is called")

#     age = 20
#     salary = 10000

#     def getInfo(self):
#         print(f"The age is {self.age} and the salary is {self.salary}")

#     @staticmethod
#     def greet():
#         print("Good Morning")


# sparsh = Employee()
# sparsh.getInfo()
# sparsh.name = "Sparsh"
# print(sparsh.name)
# sparsh.greet()

# If we run the above code, it will print "Constructor is called". We did not call the __init__ method explicitly. Why so?
# When an object is created, the __init__ method is called automatically. It is called as soon as the object is created.

# The methods starting from __ and ending with __ are called dunder methods. Dunder stands for double underscore.

# Is there a way to make sparsh.name = "Sparsh" a simple task and also all other attributes of the Employee class should not have same values anymore?
# Yes, we can do this by adding the name attribute to the __init__ method and passing it as a parameter to the __init__ method.

# class Employee:
#     def __init__(self, name, age, salary):
#         self.name = name
#         self.age = age
#         self.salary = salary

#     def getInfo(self):
#         print(
#             f"The name is {self.name}. The age is {self.age} and the salary is {self.salary}")

#     @staticmethod
#     def greet():
#         print("Good Morning")


# sparsh = Employee("Sparsh", 20, 10000)
# sparsh.getInfo()
# sparsh.greet()

# vatsal = Employee("Vatsal", 21, 20000)
# vatsal.getInfo()
# vatsal.greet()


# Task 1
# Create a Class "Programmer" for storing information of few programmers working at Microsoft.
# Solution:
# class Programmer:
#     def __init__(self, name, age, salary, company):
#         self.name = name
#         self.age = age
#         self.salary = salary
#         self.company = company

#     def getInfo(self):
#         print(
#             f"The name is {self.name}. The age is {self.age}. The salary is {self.salary}. The company is {self.company}")


# sparsh = Programmer("Sparsh", 20, 10000, "Microsoft")
# sparsh.getInfo()

# vatsal = Programmer("Vatsal", 21, 20000, "Microsoft")
# vatsal.getInfo()

# Task 2
# Write a class "calculator" capable of finding square, cube and square root of a number.
# Solution:
# import math


# class Calculator:
#     def __init__(self, num):
#         self.num = num

#     def square(self):
#         print(f"The square of {self.num} is {self.num**2}")

#     def cube(self):
#         print(f"The cube of {self.num} is {self.num**3}")

#     def squareRoot(self):
#         print(f"The square root of {self.num} is {math.sqrt(self.num)}")


# num = Calculator(9)
# num.square()
# num.cube()
# num.squareRoot()


# Task 3
# Create a class with a class attribute a; create an object from it and set 'a' directly using object.a = o. Does this change the class attribute?
# Solution:
# class Sample:
#     a = "Sparsh"


# obj = Sample()
# print(obj.a)
# obj.a = "Vatsal"
# print(obj.a)
# print(Sample.a)

# Here, we have created a class named Sample with a class attribute a. We have created an object of the Sample class and set the value of a using the object. It does not change the class attribute. It creates an instance attribute with the same name as the class attribute. It does not change the class attribute. It creates an instance attribute with the same name as the class attribute.


# Task 4
# Add a static method in problem 2, to greet the user with hello.
# Solution:
# import math


# class Calculator:
#     def __init__(self, num):
#         self.num = num

#     def square(self):
#         print(f"The square of {self.num} is {self.num**2}")

#     def cube(self):
#         print(f"The cube of {self.num} is {self.num**3}")

#     def squareRoot(self):
#         print(f"The square root of {self.num} is {math.sqrt(self.num)}")

#     @staticmethod
#     def greet():
#         print("Hello")


# num = Calculator(9)
# num.square()
# num.cube()
# num.squareRoot()
# num.greet()


# Task 5
# Write a class Train which has methods to book a ticket, get status(no of seats) and get fare information of train running under Indian Railways.
# Solution:
# class Train:
#     def __init__(self, name, fare, seats):
#         self.name = name
#         self.fare = fare
#         self.seats = seats

#     def getStatus(self):
#         print(f"The name of the train is {self.name}")
#         print(f"The seats available are {self.seats}")

#     def fareInfo(self):
#         print(f"The price of the ticket is: Rs {self.fare}")

#     def bookTicket(self):
#         if self.seats > 0:
#             print(f"Your ticket has been booked. Your seat number is {self.seats}")
#             self.seats -= 1
#         else:
#             print("Sorry this train is full! Kindly try in tatkal")

#     def cancelTicket(self):
#         pass # We will do this later


# intercity = Train("Intercity Express: 14015", 90, 2)
# intercity.getStatus()
# intercity.bookTicket()

# vande = Train("Vande Bharat Express: 22439", 120, 3)
# vande.getStatus()
# vande.bookTicket()


# Task 6
# Can you change the self-parameter inside a class to something else (say "srl"). Try changing self to "slf" or "srl" and see the effects.
# Solution:
# class Sample:
#     def __init__(slf):
#         slf.name = "Sparsh"

#     def printName(slf):
#         print(slf.name)


# obj = Sample()
# obj.printName()

# Here, we have changed the self parameter to slf. It is not a keyword in Python. We can use any name instead of self. But it is a convention to use self as the name of the parameter.
