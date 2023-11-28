# # Challenge 1
# user_num = int(input("Give me a number: "))
# user_length = int(input("Give me a length: "))

# li = list()
# k = 0
# new_num = user_num
# while k < user_length:
#     li.append(new_num)
#     new_num += user_num
#     k+=1

# print(li)

# # Challenge 2
# # option 1
# import itertools
# users_word = input("Give me a word: ")
# new_word = [a[0] for a in itertools.groupby(users_word)]
# print("".join(new_word))

# option2
users_word2 = input("Give me a word: ")
new_word2 = ""
for i, char in enumerate(users_word2):
    if i == len(users_word2)-1:
        new_word2 += char
        break
    elif users_word2[i] != users_word2[i+1]:
        new_word2 += char
print(new_word2)
