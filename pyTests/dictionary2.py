distances = {
    "Voyager 1": 163,
    "James Webb": 1,
    "Voyager 2": 120,
    "Pioneer 10": 110,
    "Sputnik 1": 0.00001
}


def convertToMeters(au):
    return au * 149000000000

names = []
for name in distances.keys():
    # names.append(name)
    # Can add a key to a new array to use it later
    print(f"{name} is a spacecraft that has traveled {distances[name]} AU.")

for distance in distances.values():
    print(f"{distance} in AU is equivalent to {convertToMeters(distance)} meters")

# Can access to the keys of a dictionary using .keys(), can access to only the values for all keys using .values()

