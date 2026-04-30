# A tuple is a non-modifiable list, meaning that once they are created no attribute can be modified, 
#neither you can insert or elminate information inside a tuple, but only have access to ir

coordinates = (47.67, -51.33)

# The values can be read in various ways, for example:

# latitude = coordinates[0]
# longitude = coordinates[1]
# Traditional ways to get a value from a tuple or any other list

latitude, longitude = coordinates #Automatically assigns each value to the specified variables according to their order, the 0th index one will go to latitude and the one in the 1st index will go to longitude

print(
    f"""
    Your latitude is:      {latitude}
    And your longitude is: {longitude}
"""
)
