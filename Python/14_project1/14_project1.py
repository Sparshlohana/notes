# In this project, we will build a simple Stone Paper Scissor game using Python.
# This is a simple Stone Paper Scissor game which is played between the user and the computer.

# Steps:
# 1. Import the random module.
# 2. Take the input from the user.
# 3. Generate a random number using the random module.
# 4. Define the conditions for winning.
# 5. Compare the user input and the computer input.
# 6. Print the result.

# Importing the random module
# import random

# Taking the input from the user
# user = input("What's your choice? 'rock', 'paper' or 'scissors'\n")

# Generating a random number using the random module
# computer = random.choice(['rock', 'paper', 'scissors'])

# Defining the conditions for winning

# if user == computer:
#     print(f"It's a tie! Computer also chose {computer}")
# elif user == 'rock':
#     if computer == 'paper':
#         print("You lose! Computer chose paper")
#     else:
#         print("You win! Computer chose scissors")
# elif user == 'paper':
#     if computer == 'scissors':
#         print("You lose! Computer chose scissors")
#     else:
#         print("You win! Computer chose rock")
# elif user == 'scissors':
#     if computer == 'rock':
#         print("You lose! Computer chose rock")
#     else:
#         print("You win! Computer chose paper")
# else:
#     print("Please enter a valid input")

#  Now what i want is, the game should not end after one round. It should ask the user if he/she wants to play again. And record the score of the user and the computer. And at the end, it should print the final score of the user and the computer.

# # Importing the random module
# import random

# # Taking the input from the user
# user_score = 0
# computer_score = 0
# while True:
#     user = input("What's your choice? 'rock', 'paper' or 'scissors'\n")
#     if user == 'no':
#         break
#     # Generating a random number using the random module
#     computer = random.choice(['rock', 'paper', 'scissors'])

#     # Defining the conditions for winning

#     if user == computer:
#         print(f"It's a tie! Computer also chose {computer}")
#     elif user == 'rock':
#         if computer == 'paper':
#             print("You lose! Computer chose paper")
#             computer_score += 1
#         else:
#             print("You win! Computer chose scissors")
#             user_score += 1
#     elif user == 'paper':
#         if computer == 'scissors':
#             print("You lose! Computer chose scissors")
#             computer_score += 1
#         else:
#             print("You win! Computer chose rock")
#             user_score += 1
#     elif user == 'scissors':
#         if computer == 'rock':
#             print("You lose! Computer chose rock")
#             computer_score += 1
#         else:
#             print("You win! Computer chose paper")
#             user_score += 1
#     else:
#         print("Please enter a valid input")

# print(f"Your score: {user_score}")
# print(f"Computer's score: {computer_score}")


# We can even add sounds for winning and loosing. We can use the pygame module for this.
# To install the pygame module, run the following command in your terminal:
# pip install pygame

import pygame
import random
# Initialize pygame mixer
pygame.mixer.init()

# Load sound files
win_sound = pygame.mixer.Sound("Python/14_project1/win.mp3")
lose_sound = pygame.mixer.Sound("Python/14_project1/lose.mp3")

user_score = 0
computer_score = 0

while True:
    user = input("What's your choice? 'rock', 'paper' or 'scissors'\n")
    if user == 'no':
        break
    computer = random.choice(['rock', 'paper', 'scissors'])

    if user == computer:
        print(f"It's a tie! Computer also chose {computer}")
    elif user == 'rock':
        if computer == 'paper':
            print("You lose! Computer chose paper")
            computer_score += 1
            lose_sound.play()
        else:
            print("You win! Computer chose scissors")
            user_score += 1
            win_sound.play()
    elif user == 'paper':
        if computer == 'scissors':
            print("You lose! Computer chose scissors")
            computer_score += 1
            lose_sound.play()
        else:
            print("You win! Computer chose rock")
            user_score += 1
            win_sound.play()
    elif user == 'scissors':
        if computer == 'rock':
            print("You lose! Computer chose rock")
            computer_score += 1
            lose_sound.play()
        else:
            print("You win! Computer chose paper")
            user_score += 1
            win_sound.play()
    else:
        print("Please enter a valid input")

print(f"Your score: {user_score}")
print(f"Computer's score: {computer_score}")
