kennedySpeech = "We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too."

words = kennedySpeech.split()
lowercaseWords = [word.lower() for word in words]
# Appends a new element "word" lowercased which will be each iteration of each "word" in the list of "words"
# They are lowercased so that "We" and "we" are correctly noted as the same word

count = {word: lowercaseWords.count(word) for word in lowercaseWords if len(word) > 3}

# Creates a dictionary where each key is a word, gathered from the lowercaseWords and its key will be the times that word appears (count method) on the list of words
# Note that the comprehension also filters words so that it only counts words longer than 3 characters

print(count)