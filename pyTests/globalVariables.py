mainText = "user"

def salute():
    print("Hi," + mainText, sep=" ")        # Doesn' work because sep works for objects separated by comma, and we are not separating objects but rather concatenating them
    print("Hi," , mainText)                 # Works because default sep in print is " "

def main():
    global mainText                         # Sets mainText as a global variable, meaning changes done inside this function will REMAIN on the global variable (if not global, changes would only persist inside the function)
    mainText = input("What's your name?")
    salute()

main()

