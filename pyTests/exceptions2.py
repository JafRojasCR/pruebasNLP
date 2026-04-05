def main():
    try:
        distance = float(input("Put the number of kilometers "))
        minutes =  float(input("Put the number of minutes "))
    except ValueError:
        print("An invalid value for distance or minutes was put")
    else:
        pace = getPace(distance = distance, minutes = minutes)
        print(f"For travelling {distance} in {minutes}, you'll have to go at {pace} kilometers per minute")



def getPace(distance, minutes):
    if distance > 0 and minutes > 0:
        return distance/minutes
    else: 
        raise ValueError("Neither the distance nor the minutes can be negatives or 0")

    
main()