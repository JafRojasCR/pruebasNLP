WORDS = { "PAIR":4, "HAIR": 4, "CHAIR": 5, "AIR": 3 }
userPoints = 0
lives = 5
lost = 0

def main():
    global userPoints
    global lives
    global lost
    print("Welcome to spelling bee!")
    print("Your letters are: A I P C R H G")

    while len(WORDS) > 0 and lives!=0:
        print(f"{len(WORDS)} words left!")  # "len" and a dictionary outputs the number of keys in the dictionary
        guess = input("Guess a word: ")
        if(guess in WORDS.keys()):
            print("Congrats! You found a word and got " + f"{WORDS[guess]} points!")
            userPoints += WORDS[guess]
            WORDS.pop(guess)
        else:
            lives -= 1
            print("Nope, that's not a possible word")
            if lives != 0:
                print(f"You still have {lives} lives left")
            else: lost = 1
    if lost:
        print("Welp, you lost")
    else:
        print(f"Congrats! You got: {userPoints} points in total!")

main()