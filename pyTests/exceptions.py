
def get_int(prompt="Input an integer "):     #Gives default prompt
    while True:
        try:
            x = int(input(prompt))
        except ValueError:
            pass                    # Doesn't prompt anything to the user, not that there was an error neither what went wrong
            # print("x is not defined") # Another way of letting the user know what exactly went wrong
        else:
            return x
        # If the try passed and there was not a ValueError handling, it returns the value of x
    
def main():
    x = get_int("Please, input an integer ")
    print(f"The value of x is {x}")

main()