exampleInput = ["Hello world!", "this is a test.", "Hello again"]

def getLongestAndShortest(texts):
    currentLongest = texts[0]
    currentShortest = texts[0]
    for i in range(len(texts) - 1):
        temporalLongest = texts[i+1] 
        temporalShortest = texts[i+1]
        if(len(currentLongest) <= len(temporalLongest)):
            currentLongest = temporalLongest
        if(len(currentShortest) >= len(temporalShortest)):
            currentShortest = temporalShortest
    return currentLongest, currentShortest

def getWordFrequence(texts):
    words = []
    for text in texts:
        words.extend(text.split())
    cleanedWords = [word.strip(".,!?;:") for word in words]
    return {word: cleanedWords.count(word) for word in cleanedWords}

def analyze_texts(texts):
    result = {}
    lengthOfTexts = len(texts)
    cleanedTexts = []
    totalChars = 0
    titles = []
    for text in texts:
        temporalText = text.lower().strip()
        totalChars += len(temporalText)
        cleanedTexts.append(temporalText)
        titles.append(temporalText.title())
        
    
    longest, shortest = getLongestAndShortest(cleanedTexts)
    averageChars = totalChars/lengthOfTexts
    wordFrequence = getWordFrequence(cleanedTexts)

    result.update({"total_texts":lengthOfTexts, "longest": longest, "shortest": shortest, "avg_length": averageChars, "titles": titles, "freq": wordFrequence})
    return result

print(analyze_texts(exampleInput))