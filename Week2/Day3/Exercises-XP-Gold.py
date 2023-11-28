# 1 2 3
birthdays = {
    "Tanya" : "1966/12/16",
    "Peter" : "1999/02/11",
    "Marina" : "1998/05/28",
    "Sasha" : "1998/08/23",
    "Sonia" : "1995/02/28"
}

new_name = input ("Give me a name of person that yo know: ")
new_birthday = input ("Give me a date of his birthday in format YYYY/MM/DD: ")
birthdays[new_name.lower().capitalize()] = new_birthday
print (birthdays)

print(f"You can look up the birthdays of the people in the list! We have {', '.join(birthdays.keys())}")
users_prompt = input("Give me a person's name: ")

if users_prompt.lower().capitalize() in birthdays:
    print (f"The birthday of {users_prompt.lower().capitalize()} is {birthdays[users_prompt.lower().capitalize()]}")
else:
    print (f"Sorry, we don’t have the birthday information for {users_prompt.lower().capitalize()}")


# 4
items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}

res = ""
for i in items:
    res += f"A prise of {i} is {items[i]}$. "
print(res)

items2 = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

sum = 0
for i in items2:
    price = items2[i]["price"]
    count = items2[i]["stock"]
    sum += price*count

print(f"Everything in stock would cost {sum}$")