# A while loop will keep executing code while the condition given is true, and will stop when the condition becomes false

import random

days = 1
moisture = random.randint(17, 30) #Generates a random moisture level from 17 to 30

while moisture > 20:
    print(f"Day {days}: Moisture level is {moisture}%.")
    days += 1 #Increases the day count by 1 each day
    moisture = random.randint(17, 30) #Generates a random moisture level from 17 to 30

print(f"Day {days}: Moisture level is {moisture}%. Time to water the plant!")