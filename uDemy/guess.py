answer=5
print("please enter a guees")
guess=int(input())

if guess<answer:
    print("is wrong")

if guess>answer:
    print("is mucho wrong")
elif guess== answer:
    print("is good")