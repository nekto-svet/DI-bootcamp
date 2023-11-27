# Exercise 1 sets
my_fav_numbers = set()
my_fav_numbers.add(6)
my_fav_numbers.add(8)
my_fav_numbers.remove(8)
friend_fav_numbers = {3,7,9}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)

# Exercise 2 tuples
#no, because tuples are immutable

# Exercise 3 lists
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
# basket = ["Apples"]+basket
count_apples=basket.count("Apples")
print(count_apples)
basket.clear()
print(basket)

# Exercise 4 floats
# Floats are decimal values, and integers are real numbers.

list_floats = list()
i=1.5
k=2
while k<=5:
    list_floats.append(i)
    i+=1
    list_floats.append(k)
    k+=1
print(list_floats)

list_floats2 = list()
a=1.5
while a<=5:
    if a%1 != 0:
        list_floats2.append(a)
        a+=0.5
    else:
        list_floats2.append(int(a))
        a+=0.5
print(list_floats2)

list_floats3 = list()
for b in range (15, 51, 5):
    if (b/10)%1 != 0:
        list_floats3.append(b/10)
    else:
        list_floats3.append(int(b/10))
print(list_floats3)


# Exercise 5 For Loop
for i in range (1,21):
    print (i)

for i in range (1,21):
    if i%2 == 0:
        print (i)


# Exercise 6 While Loop
user_name = input("Write youre name until it's 'Sveta'")
while user_name.lower() != "sveta":
    user_name = input("Again write youre name until it's 'Sveta'")

#Exercise 7 Favorite Fruits
user_fruts = input("Say me yor favorite fruit(s). Separate the fruits with a single space: ").split(" ")
print(user_fruts)
user_new_frut = input("Say me one frut: ")
if user_new_frut in user_fruts:
    print ("You chose one of your favorite fruits! Enjoy!")
else:
     print ("You chose a new fruit. I hope you enjoy")

#Exercise 8: Who Ordered A Pizza ?
user_toppings = list()
topping = ""
while True:
    topping = input("Write pizza toppings ")
    if topping == "quit":
        break
    else:
        user_toppings.append (topping)
print ("Your toppings:")
for i in user_toppings:
    print(i)
print (f"total price is {10+len(user_toppings)*2.5}")

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
    elif age >= 3 or age  <12:
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