WORDS = { "PAIR":4, "HAIR": 4, "CHAIR": 5, "AIR": 3 }

def main():
    print("Welcome to spelling bee!")
    for key, value in WORDS.items():            # "items" is a method that outputs a list of tuples, where each TUPLE is a key-value pair in the dictionary
        print(f"{key} is worth {value} points")

    matrix = WORDS.items()
    print(matrix)
    for pair in matrix:
        print(pair[1])

main()