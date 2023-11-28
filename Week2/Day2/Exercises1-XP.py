#Exercise 8: Who Ordered A Pizza ?
user_toppings = list()
while True:
    topping = input("Write pizza toppings ")
    if topping == "quit":
        break
    else:
        user_toppings.append (topping)
        print (f"Topping {topping} was added")
print (f"Your toppings: {', '.join(user_toppings)}")
total_price = 10+len(user_toppings)*2.5
print (f"total price is {total_price}")

# Exercise 9: Cinemax
# Family movie
number_of_visitiors = int(input("How many tickets do yo need? "))
total_cost = 0
t = 1
while number_of_visitiors > 0:
    age = int(input(f"What age is person №{t}? "))
    t+=1
    number_of_visitiors -=1
    if age < 3:
        continue
    elif age >= 3 and age  <12:
        total_cost +=10
    else:
        total_cost += 15
print (f"Total cost is {total_cost}$")

# Another movie
#option1
number_of_visitiors1 = int(input("How many tickets do you need? "))
list_names = list()
l = 1
while number_of_visitiors1 > 0:
    list_names.append(input(f"What is the name of person №{l}? "))
    l+=1
    number_of_visitiors1 -=1

print(list_names)

allowed_names = list()

for i in list_names:
    age = int(input(f"What age is {i}? "))
    if age >= 16:
        # list_names.remove(i) 
        # This doesn't work because when one item remooved, the next item get it's index and input doesn't ask about it, jumping to the next one.
        allowed_names.append(i)
output = "People who are allowed to watch the film:"
for i in allowed_names:
    output += f" {i}"
print(output)


# option2
# litle bit shorter, I like this one more, but it doesn't do list with all visitors
number_of_visitiors2 = int(input("How many tickets do you need? "))
m = 1
allowed = list()
while number_of_visitiors2 > 0:
    name = input(f"What is the name of person №{m}? ")
    age = int(input(f"What age is person №{m}? "))
    m+=1
    number_of_visitiors2 -=1
    if age >= 16:
        allowed.append(name)

res = "People who are allowed to watch the film:"
for i in allowed:
    res += f" {i}"
print(res)


# option3
# just for play with dictionary

number_of_visitiors3 = int(input("How many tickets do you need? "))
n = 1
all_visitors = {}
while number_of_visitiors3 > 0:
    name = input(f"What is the name of person №{n}? ")
    age = int(input(f"What age is person №{n}? "))
    all_visitors[name] = age
    n+=1
    number_of_visitiors3 -=1

allowed_visitors = list()

for i in all_visitors:
    if all_visitors[i] >= 16:
        allowed_visitors.append(i)

result = "People who are allowed to watch the film:"
for i in allowed_visitors:
    result += f" {i}"
print(result)


# Exercise 10 : Sandwich Orders
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]

for i in sandwich_orders:
    if i == "Pastrami sandwich":
        sandwich_orders.remove(i)

finished_sandwiches = list()

while len(sandwich_orders) > 0:
    current_sandwich = sandwich_orders.pop(0)
    finished_sandwiches.append(current_sandwich)

print(finished_sandwiches)
print(sandwich_orders)


for i in finished_sandwiches:
    print(f"I made your {i.lower()} ")