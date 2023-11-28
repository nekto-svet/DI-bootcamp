# # Exercise 1 : Convert Lists Into Dictionaries
# # option 1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# result_dictionary = dict(zip(keys, values))
# print (result_dictionary)


# # option 2
# keys1 = ['Ten', 'Twenty', 'Thirty']
# values1 = [10, 20, 30]

# res_dict = {}
# for k in keys1:
#     for v in values1:
#         res_dict[k] = v
#         values1.remove(v)
#         break

# print(res_dict)

# # option 3
# keys2 = ['Ten', 'Twenty', 'Thirty']
# values2 = [10, 20, 30]

# res_dictionary = {keys2[i]:values2[i] for i in range(len(keys2))}
# print(res_dictionary)


#Exercise 2 : Cinemax
number_of_visitiors = int(input("How many tickets do you need? "))
n = 1
visitors = {}
while n <= number_of_visitiors:
    name = input(f"What is the name of person №{n}? ")
    age = int(input(f"What age is person №{n}? "))
    visitors[name] = age
    n+=1

total_cost = 0
for v in visitors:
    if visitors[v] < 3:
        continue
    elif visitors[v]>=3 and visitors[v]<12:
        total_cost +=10
    else:
        total_cost += 15
print (f"Total cost is {total_cost}$")

# Exercise 3: Zara
brand = {
    "name": "Zara", 
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona", 
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue", 
        "Spain": "red", 
        "US": ["pink", "green"],
    }
}

# changes
# 3
brand["number_stores"] = 2
# 4
print(f"Zaras clients are peoples who need clothes for {', '.join(brand['type_of_clothes'])}.")
# 5
brand["country_creation"] = "Spain"
# 6
if "international_competitors" in brand:
    brand["international_competitors"] += ["Desigual"]
# 7
del brand["creation_date"]
# 8
print(f"The last international competitor: {brand['international_competitors'][-1]}.")
# 9
print(f"The major clothes colors in the US: {', '.join(brand['major_color']['US'])}.")
# 10
print(len(brand))
# 11
print(", ".join(brand.keys()))
# 12
more_on_zara= {
    "creation_date": 1975,
    "number_stores": 10000
}
# 13
brand.update(more_on_zara)
# 14
print(brand["number_stores"])


# Exercise 4 : Disney Characters
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

# 1
#  option 1 (loop)
disney_users_A = {}
for i, element in enumerate(users):
    disney_users_A[element] = i
print(disney_users_A)

# option2 (zip)
disney_users_A1 = dict(zip(users, range(5)))
print(disney_users_A1)


# 2
disney_users_B = dict(zip(range(5), users))
print(disney_users_B)


# 3
sorted_users = sorted(users)
disney_users_C = dict(zip(sorted_users, range(5)))
print(disney_users_C)