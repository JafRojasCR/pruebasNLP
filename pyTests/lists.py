raceResults = ["Mario", "Luigi"]

raceResults.append("Princess")
raceResults.append("Bowser")

# To append various values at once:
raceResults.append(["Donkey Kong", "Toad"])
# Doesn't work because it adds the entire new list to the end of the list as a new whole element
raceResults.remove(["Donkey Kong", "Toad"])

raceResults.extend(["Donkey Kong", "Toad"])
# Actually adds these new elements

# Now, Bowser tries to cheat by putting himself in first place, that's how he does it:
raceResults.remove("Bowser")
raceResults.insert(0, "Bowser") # Inters Bowser at the first position (index 0) of the list


print(raceResults.pop() , " was removed from the race")

raceResults.reverse() # Flips the entire order of the list

print(raceResults)

raceResults.clear() # Empties the list, now it's an empty list