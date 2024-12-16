# Inheritance
# Inheritance is a way of creating a new class for using details of an existing class without modifying it.

# Let's understand it with an example
# class Employee:
#     company = "SRL's Org."

#     def show(self):
#         print(f"The name of employee is {self.name} and age is {self.age}")

# Let's create another class which has the same show method


# class Programmer:
#     company = "Vatsal's Org."

#     def show(self):
#         print(f"The name of programmer is {self.name} and age is {self.age}")

#     def favLanguage(self):
#         print(f"The favorite language of programmer is {self.language}")


# let's now create instances of both the classes
# a = Employee()
# b = Programmer()
# print(a.company)
# print(b.company)


# What we did here was just copying the company attribute and show method from Employee class to Programmer class. What if we had more methods or attributes in Employee class? We would have to copy all of them to Programmer class. This is not a good practice.

# What if I have to change show method of employee class? I would have to change it in all the classes where I have copied it. Won't this be a tedious task?
# Here comes the concept of inheritance. We can inherit the properties of Employee class in Programmer class. Let's see how we can do this.
# class Employee:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def show(self):
#         print(f"The name of employee is {self.name} and age is {self.age}")


# class Programmer(Employee):
#     def __init__(self, name, age, language):
#         self.name = name
#         self.age = age
#         self.language = language

#     def favLanguage(self):
#         print(f"The favorite language of programmer is {self.language}")


# Now we have inherited the Employee class in Programmer class. Let's see how we can access the properties of Employee class in Programmer class.
# a = Employee("SRL", 24)
# b = Programmer("Vatsal", 23, "Python")
# b.show()
# b.favLanguage()

# Here, we have inherited the Employee class in Programmer class.
# We have not copied the show method from Employee class to Programmer class. We have just inherited it.
# Now, we can access the show method of Employee class in Programmer class.
# We have also added a new method favLanguage in Programmer class. We can access this method in Programmer class only.


# Types of Inheritance
# 1. Single Inheritance
# 2. Multiple Inheritance
# 3. Multilevel Inheritance
# 4. Hierarchical Inheritance
# 5. Hybrid Inheritance

# 1. Single Inheritance
# When a class inherits only one class, it is called single inheritance.
# class Employee:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def show(self):
#         print(f"The name of employee is {self.name} and age is {self.age}")

# class Programmer(Employee):
#     def __init__(self, name, age, language):
#         self.name = name
#         self.age = age
#         self.language = language

#     def favLanguage(self):
#         print(f"The favorite language of programmer is {self.language}")

# a = Employee("SRL", 24)
# b = Programmer("Vatsal", 23, "Python")
# b.show()
# b.favLanguage()

# Here, Programmer class is inheriting only Employee class. So, it is single inheritance.

# 2. Multiple Inheritance
# When a class inherits more than one class, it is called multiple inheritance.
# class Employee:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def show(self):
#         print(f"The name of employee is {self.name} and age is {self.age}")


# class Player:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def intro(self):
#         print(f"Hello, my name is {self.name} and age is {self.age}")

#     def game(self):
#         print(f"{self.name} is playing a game")


# class Programmer(Employee, Player):
#     def __init__(self, name, age, language):
#         self.name = name
#         self.age = age
#         self.language = language

#     def favLanguage(self):
#         print(f"The favorite language of programmer is {self.language}")


# a = Employee("SRL", 24)
# b = Player("Vatsal", 23)
# c = Programmer("SRL", 24, "Python")
# c.show()
# c.intro()
# c.favLanguage()

# Here, Programmer class is inheriting both Employee and Player class. So, it is multiple inheritance.

# 3. Multilevel Inheritance
# When a class inherits a class which is already inheriting another class, it is called multilevel inheritance.
# class Employee:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def show(self):
#         print(f"The name of employee is {self.name} and age is {self.age}")


# class Player(Employee):
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def intro(self):
#         print(f"Hello, my name is {self.name} and age is {self.age}")

#     def game(self):
#         print(f"{self.name} is playing a game")


# class Programmer(Player):
#     def __init__(self, name, age, language):
#         self.name = name
#         self.age = age
#         self.language = language

#     def favLanguage(self):
#         print(f"The favorite language of programmer is {self.language}")


# a = Employee("SRL", 24)
# b = Player("Vatsal", 23)
# c = Programmer("SRL", 24, "Python")
# b.show()
# b.intro()
# c.show()
# c.intro()
# c.game()
# c.favLanguage()

# Here, Programmer class is inheriting Player class which is already inheriting Employee class. So, it is multilevel inheritance.

# 4. Hierarchical Inheritance
# When more than one class inherits a single class, it is called hierarchical inheritance.
# class Employee:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def show(self):
#         print(f"The name of employee is {self.name} and age is {self.age}")


# class Player(Employee):
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def intro(self):
#         print(f"Hello, my name is {self.name} and age is {self.age}")

#     def game(self):
#         print(f"{self.name} is playing a game")


# class Programmer(Employee):
#     def __init__(self, name, age, language):
#         self.name = name
#         self.age = age
#         self.language = language

#     def favLanguage(self):
#         print(f"The favorite language of programmer is {self.language}")


# a = Employee("SRL", 24)
# b = Player("Vatsal", 23)
# c = Programmer("SRL", 24, "Python")
# b.show()
# b.intro()
# c.show()
# c.favLanguage()

# Here, Player and Programmer class is inheriting Employee class. So, it is hierarchical inheritance.


# 5. Hybrid Inheritance
# Hybrid inheritance is a combination of two or more types of inheritance.
# class Employee:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def show(self):
#         print(f"The name of employee is {self.name} and age is {self.age}")


# class Player:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def intro(self):
#         print(f"Hello, my name is {self.name} and age is {self.age}")

#     def game(self):
#         print(f"{self.name} is playing a game")


# class Programmer(Employee, Player):
#     def __init__(self, name, age, language):
#         self.name = name
#         self.age = age
#         self.language = language

#     def favLanguage(self):
#         print(f"The favorite language of programmer is {self.language}")


# a = Employee("SRL", 24)
# b = Player("Vatsal", 23)
# c = Programmer("SRL", 24, "Python")
# b.show()
# b.intro()
# c.show()
# c.intro()
# c.game()
# c.favLanguage()

# Here, Programmer class is inheriting both Employee and Player class. So, it is hybrid inheritance.
# In this way, we can use inheritance in Python.


# Super() Function
# super() function is used to call the properties of parent class.
# class Employee:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#         print("Employee class constructor")

#     def show(self):
#         print(f"The name of employee is {self.name} and age is {self.age}")


# class Player(Employee):
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#         super().__init__(name, age)
#         print("Player class constructor")

#     def intro(self):
#         print(f"Hello, my name is {self.name} and age is {self.age}")

#     def game(self):
#         print(f"{self.name} is playing a game")


# class Programmer(Employee):
#     def __init__(self, name, age, language):
#         self.name = name
#         self.age = age
#         self.language = language
#         super().__init__(name, age)
#         print("Programmer class constructor")

#     def favLanguage(self):
#         print(f"The favorite language of programmer is {self.language}")


# a = Employee("SRL", 24)
# b = Player("Vatsal", 23)
# c = Programmer("SRL", 24, "Python")
# b.show()
# b.intro()
# c.show()
# c.favLanguage()

# Here, we have used super() function to call the properties of parent class.
# When we call super().__init__(name, age) in Player class, it calls the constructor of Employee class.
# By calling super().__init__(name, age) in Programmer class, it calls the constructor of Employee class.
# This helps in reducing the code redundancy.
# The super() function is used to call the properties of parent class.


# class method
# class method is a method which is bound to the class and not the object of the class.

# class Employee:
#     company = "SRL's Org."

#     def show(self):
#         print(f"The company name is {self.company}")


# a = Employee()
# a.company = "Vatsal's Org."
# a.show()

# Here, we have created an object a of Employee class. We have changed the company name of object a to "Vatsal's Org.".
# But what if we don't want that the company name of object a should be changed. We want that the company name should be same for all the objects of Employee class.
# In such cases, we can use class method. Let's see how we can use class method.
# class Employee:
#     company = "SRL's Org."

#     @classmethod
#     def show(cls):
#         print(f"The company name is {cls.company}")


# a = Employee()
# a.company = "Vatsal's Org."
# a.show()

# Here, we have used @classmethod decorator to create a class method.
# Now, we can access the company name using class method show.
# Basically, class method is used to access the class variables even if the object of the class is changed.


# Property Decorator
# property decorator is used to access the class variables as an attribute.
# class Employee:
#     company = "SRL's Org."

#     def show(self):
#         print(f"The name of employee is {self.name} and age is {self.age}")

#     @property
#     def name(self):
#         return f"{self.fName} {self.lName}"

#     @name.setter
#     def name(self, value):
#         self.fName = value.split(" ")[0]
#         self.lName = value.split(" ")[1]


# a = Employee()
# a.name = "Sparsh Lohana"
# print(a.fName)
# print(a.lName)

# Here, we have used @property decorator to access the class variables as an attribute.
# We have used @name.setter decorator to set the value of name attribute.
# In this way, we can use property decorator in Python.

# This is the perfect example of encapsulation in Python.
# Encapsulation is the process of binding the data and the functions that manipulate the data.
# Encapsulation is used to restrict access to the methods and variables of the class.
# Encapsulation is used to prevent the data from being modified by accident.

# This is also an example of abstraction in Python.
# Abstraction is the process of hiding the real implementation of an application from the user and emphasizing only on the usage of it.
# Abstraction is used to hide the complex implementation of an application from the user.
# Abstraction is used to show only the necessary details of an application to the user.

# In this way, we can use property decorator in Python.

# Difference between Encapsulation and Abstraction
# Encapsulation: Hides how data is stored or modified (protects the data).
# Example: Data is private and accessed through getters/setters.

# Abstraction: Hides what happens behind the scenes(simplifies the complexity).
# Example: You press a button on a remote without knowing how it works internally.

# Method Overriding
# Method overriding is a concept of object-oriented programming in which a child class can provide a specific implementation of a method that is already provided by its parent class.
# class Employee:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def show(self):
#         print(f"The name of employee is {self.name} and age is {self.age}")


# class Programmer(Employee):
#     def __init__(self, name, age, language):
#         self.name = name
#         self.age = age
#         self.language = language

#     def show(self):
#         print(f"The name of programmer is {self.name} and age is {self.age}")

#     def favLanguage(self):
#         print(f"The favorite language of programmer is {self.language}")


# a = Employee("SRL", 24)
# b = Programmer("Vatsal", 23, "Python")
# a.show()
# b.show()
# b.favLanguage()

# Here, we have overridden the show method of Employee class in Programmer class.
# We have also added a new method favLanguage in Programmer class.


# Polymorphism
# Polymorphism is a concept of object-oriented programming in which a single function can perform different operations.
# class Employee:
#     def show(self):
#         print("Employee class show method")


# class Programmer:
#     def show(self):
#         print("Programmer class show method")


# def show(obj):
#     obj.show()


# a = Employee()
# b = Programmer()
# show(a)
# show(b)


# Here, we have created two classes Employee and Programmer.
# Both the classes have the same method show.
# We have created a function show which takes an object as an argument.

# We have created an object a of Employee class and an object b of Programmer class.
# We have passed both the objects to the show function.
# The show function calls the show method of the object passed to it.
# In this way, we can use polymorphism in Python.

# This is the perfect example of polymorphism in Python.


# Operator Overloading
# Operator overloading is a concept of object-oriented programming in which an operator can perform different operations.

# class Number:
#     def __init__(self, num):
#         self.num = num


# n = Number(4)
# m = Number(6)
# print(n + m)

# If we run this code, we will get an error.
# TypeError: unsupported operand type(s) for +: 'Number' and 'Number'

# This is because the + operator is not defined for the Number class.
# We can define the + operator for the Number class using operator overloading.

# class Number:
#     def __init__(self, num):
#         self.num = num

#     def __add__(self, num2):
#         return self.num + num2.num


# n = Number(4)
# m = Number(6)
# print(n + m)

# We can also use other operators like -, *, /, etc. in the same way.

# class Number:
#     def __init__(self, num):
#         self.num = num

#     def __add__(self, num2):
#         return self.num + num2.num

#     def __mul__(self, num2):
#         return self.num * num2.num

#     def __sub__(self, num2):
#         return self.num - num2.num

#     def __truediv__(self, num2):
#         return self.num / num2.num

#     def __floordiv__(self, num2):
#         return self.num // num2.num

#     def __mod__(self, num2):
#         return self.num % num2.num

#     def __pow__(self, num2):
#         return self.num ** num2.num

#     def __str__(self):
#         return f"The number is {self.num}"

#     def __len__(self):
#         return 1


# n = Number(4)
# m = Number(6)
# print(n + m)
# print(n * m)
# print(n - m)
# print(n / m)
# print(n // m)
# print(n % m)
# print(n ** m)
# print(n)
# print(len(n))

# Here, we have defined the +, -, *, /, //, %, ** operators for the Number class using operator overloading.
# We have also defined the __str__ method to print the number. It is used to print the object of the class. It should return a string.
# We have also defined the __len__ method to return the length of the object of the class. It should return an integer.


# Task 1
# Create a class (2-D vector) and use it to create another class representing a 3-D vector.
# Solution
# class Vector2D:
#     def __init__(self, x, y):
#         self.x = x
#         self.y = y

#     def show(self):
#         print(f"The 2-D vector is {self.x}i + {self.y}j")


# class Vector3D(Vector2D):
#     def __init__(self, x, y, z):
#         self.x = x
#         self.y = y
#         self.z = z

#     def show(self):
#         print(f"The 3-D vector is {self.x}i + {self.y}j + {self.z}k")


# a = Vector2D(4, 5)
# b = Vector3D(4, 5, 6)
# a.show()
# b.show()


# Task 2
# Create a class 'Pets' from a class 'Animals' and further create a class 'Dog' from 'Pets'. Add a method 'bark' to class 'Dog'.
# Solution
# class Animals:
#     def __init__(self, animal):
#         self.animal = animal

#     def show(self):
#         print(f"The animal is {self.animal}")


# class Pets(Animals):
#     def __init__(self, animal, pet):
#         self.animal = animal
#         self.pet = pet

#     def show(self):
#         print(f"The animal is {self.animal} and pet is {self.pet}")


# class Dog(Pets):
#     def __init__(self, animal, pet, name):
#         self.animal = animal
#         self.pet = pet
#         self.name = name

#     def show(self):
#         print(f"The animal is {self.animal}, pet is {self.pet} and name is {self.name}")

#     def bark(self):
#         print("Dog is barking")


# a = Animals("Lion")
# b = Pets("Lion", "Dog")
# c = Dog("Lion", "Dog", "Tommy")
# a.show()
# b.show()
# c.show()
# c.bark()


# Task 3
# Create a class 'Employee' and add salary and increment properties to it.
# Solution
# class Employee:
#     def __init__(self, name, salary):
#         self.name = name
#         self.salary = salary

#     def increment(self):
#         self.salary = self.salary + 1000


# a = Employee("SRL", 24000)
# a.increment()
# print(a.salary)


# Task 4
# Write a class 'Complex' to represent complex numbers, along with overloaded operators '+' and '*' which adds and multiplies them.
# Solution
# class Complex:
#     def __init__(self, real, img):
#         self.real = real
#         self.img = img

#     def __add__(self, num2):
#         return Complex(self.real + num2.real, self.img + num2.img)

#     def __mul__(self, num2):
#         mulReal = self.real * num2.real - self.img * num2.img
#         mulImg = self.real * num2.img + self.img * num2.real
#         return Complex(mulReal, mulImg)


# a = Complex(4, 5)
# b = Complex(6, 7)
# c = a + b
# d = a * b
# print(c.real, c.img)
# print(d.real, d.img)


# Task 5
# Write a class vector representing a vector of n dimensions. Overload the + and * operator which calculates the sum and the dot(.) product of them.
# Solution
# class Vector:
#     def __init__(self, vec):
#         self.vec = vec

#     def __str__(self):
#         return f"{self.vec}"

#     def __add__(self, vec2):
#         newList = []
#         for i in range(len(self.vec)):
#             newList.append(self.vec[i] + vec2.vec[i])
#         return Vector(newList)

#     def __mul__(self, vec2):
#         sum = 0
#         for i in range(len(self.vec)):
#             sum += self.vec[i] * vec2.vec[i]
#         return sum

#     def __len__(self):
#         return len(self.vec)


# v1 = Vector([1, 4, 6])
# v2 = Vector([1, 6, 9])
# print(v1 + v2)
# print(v1 * v2)
# print(len(v1))
# print(len(v2))


# Task 6
# Write _str_() method to print the vector as follows:
# 7i + 8j + 10k
# Solution
# class Vector:
#     def __init__(self, vec):
#         self.vec = vec

#     def __str__(self):
#         return f"{self.vec[0]}i + {self.vec[1]}j + {self.vec[2]}k"


# v1 = Vector([7, 8, 10])
# print(v1)

print("HEHE")