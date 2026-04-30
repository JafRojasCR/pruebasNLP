numbers = [1, 3, 6, 9, 10, 15, 18]
formattedNumbers = []

# for i in range(len(numbers)):      # range will start on 0 and end un the given number minus 1, in this case, from 0 to 7-1 = 6
for number in numbers:
    # print(numbers[i])    Will print each number
    if number % 3 == 0 and number % 2 != 0:
        formattedNumbers.append(number)

print(formattedNumbers)