
string = input ("Give me a 10-characters string ")
length = len(string)
if length < 10:
    print ("Your string is too short")
elif length > 10:
    print ("Your string is too long")
else:
     print ("Your string is perfrct")

firstCharacter = string[0]
lastChracter = string[len(string)-1]
print (f"The first character is {firstCharacter}, the last character is {lastChracter}")

result = ""
for x in string:
    result += x
    print (result)


characters = list(string)
import random
random.shuffle(characters)
print ("".join(characters))