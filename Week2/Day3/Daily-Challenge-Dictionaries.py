# Challenge 1
user_word = input("Give me a word: ").lower()
characters = {}
for i, char in enumerate(user_word):
    if char in characters:
        characters[char] += [i]
    else:
        characters.update({char:[i]})

print(characters)


# Challenge 2
import re

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$80"
}

wallet = "$100" 

items_purchase_int = {}
for item in items_purchase:
   items_purchase_int[item] = int(re.sub("[$,]","",items_purchase[item]))
 
wallet_int = int(wallet.replace("$",""))

result = []

for item in items_purchase_int:
    if items_purchase_int[item]<wallet_int:
        result.append(item)
        wallet_int -= items_purchase_int[item]

if result:
    print(f"You can buy {', '.join(result)} and you will have {wallet_int}$")
else:
    print ("Nothing")