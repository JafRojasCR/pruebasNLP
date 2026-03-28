age = int(input("What is your age? "))


print(age >= 18)
# Prints "True" if age is greater or equal than 18


n = int(input("Enter an integer "))
print(n%2==0 and n>0)
# Prints "True" if number is even and positive


a = int(input("Enter the first side of the triangle "))
b = int(input("Enter the second side "))
c = int(input("And enter the last side "))

print((a+b) > c and (b+c) > a and (a+c) > b)
# Prints "True" if a triangle can be formed with the three given sides (sum of two sides is greater than the other side)

