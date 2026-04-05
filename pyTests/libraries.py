import random   # Imports the ENTIRE module that the "random" library exports
import sys
import statistics


### USE OF RANDOM ###

suits = ["spades", "clubs", "hearts", "diamonds"]

random.shuffle(suits)           # Shuffles the elements in the given sequence

choice = random.choice(suits)   # Becomes a random element of the given sequence (shuffled before)

print("Your random suit is",choice)

face = random.randint(1, 10)     # Will become a random integer between 1 and 10, including both 1 and 10

if face > 5:
    print("Heads!")
else:
    print("Tails!")


### USE OF SYS ###

if len(sys.argv) < 2:               # Following arguments after the file name when executing will be stored in sys.argv list
    sys.exit("Too few arguments")   # Exits the program as there aren't enough arguments (names) to be shown

for argument in sys.argv[1:]:       # Omits argument 0, which will always be the name of the file when executed
    print("Hello,",argument)


### USE OF STATISTICS ###

grades = [98, 97, 100, 89, 92]
mean = statistics.mean(grades)

print("The mean of your grades is",mean)