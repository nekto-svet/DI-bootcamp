# Challenge 1
user_num = int(input("Give me a number: "))
user_length = int(input("Give me a length: "))

li = list()
k = 0
new_num = user_num
while k < user_length:
    li.append(new_num)
    new_num += user_num
    k+=1

print(li)

# Challenge 2
import itertools
users_word = input("Give me a word: ")
r = [a[0] for a in itertools.groupby(users_word)]
print("".join(r))
