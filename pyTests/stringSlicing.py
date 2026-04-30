phoneNumber = "123-456-2000"

# Assume you want to get the "123":

print(phoneNumber[4:7])
#This will print the characters starting from the one in index 4 (the "4")
#and will end up in the PREVOUS ONE to the one specified after the colon (7-1:6 index, at the "6")


print(phoneNumber[:3])
#This will print the characters starting from the very first position of the string up to the 3-1 position, in
#this case, the 2 index which will be "3"

print(phoneNumber[8:])
#This will print the characters starting from the 8 index
# #which is the first "0" of the last part of the phone number, and will end up in the very last character of the string
# #which is the second "0" of the last part of the phone number

print(phoneNumber[-4:])
#This will print the last four elements of the string, those being "2000"



