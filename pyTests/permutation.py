from itertools import permutations

solutions = []

for setting in permutations(range(1, 8)):
    center = setting[0]
    leftMiddle = setting[1]
    topMiddle = setting[2]
    rightMiddle = setting[3]
    leftAlone = setting[4]
    rightAlone = setting[5]
    bottomAlone = setting[6]

    top = center + leftMiddle + leftAlone + topMiddle
    right = center + topMiddle + rightMiddle + rightAlone
    front = center + leftMiddle + rightMiddle + bottomAlone

    if top == 15 and right == 15 and front == 15:
        print("Solution:", setting)
        solutions.append(setting)

print(f"\nChecked {7*6*5*4*3*2*1} settings.")
print(f"Found {len(solutions)} solutions.")