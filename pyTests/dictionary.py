spacecraft = {
    "name": "Voyager 1",
    "distance": 163}

spacecraftTwo = {
    "name": "James Webb"
}
spacecraftTwo["distance"] = 1
spacecraft.update({"distance": 167})
# Can also use update to add new key-value pairs to the dictionary

spacecraftTwo.update({"orbit": "Sun", "launch": 2021})
# Can update to add new key-value pairs to the dictionary at the same time


def createReport(spacecraft):
    print(f"{spacecraft['name']} has traveled {spacecraft['distance']} AU.")

def betterReport(spacecraft):
    name = spacecraft.get("name", "Unknown")
    distance = spacecraft.get("distance", "Unknown")
    orbit = spacecraft.get("orbit", "Unknown")
    print(f"{name} has traveled {distance} AU and orbits the {orbit}")

    # .get is better as it allows you to set a default value if the key is not found in the dictionary

createReport(spacecraft)

createReport(spacecraftTwo)
betterReport(spacecraft)
betterReport(spacecraftTwo)

