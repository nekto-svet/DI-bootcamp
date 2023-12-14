# # 1
# li1 = [1, 2, 3]
# li2 = [4, 5, 6]
# for i in li2:
#     li1.append(i)
# print (li1)

# # 2
# for i in range(1499, 2501):
#     if i%5==0 or i%7==0:
#         print(i)

# # 3
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']

# user_name = input("Give me a name: ").lower().capitalize()
# for i, name in enumerate(names):
#     if name == user_name:
#         print (i)
#         break

# # Exercise 4: Greatest Number
# list_num = list()
# k = 0
# while k < 3:
#     list_num.append(int(input("Give me a number: ")))
#     k+=1
# print (sorted(list_num)[-1])

# # Exercise 5: The Alphabet
# alfabet = "abcdefghijklmnopqrstuvwxwz"
# for char in alfabet:
#     if char in ['a', 'e', 'i', 'o', 'u']:
#         print(f"Character {char} is vowel")
#     else:
#         print(f"Character {char} is consonant")

# # Exercise 6: Words And Letters
# words = list()
# for i in range (7):
#     words.append(input("Give me a word: ").lower())

# letter = input("Give me one character: ").lower()

# for word in words:
#     if letter not in word:
#         print (f"The letter {letter.upper()} doesn't exist in the word '{word}'.")
#     else:
#         for i, char in enumerate(word):
#             if char == letter:
#                 print (f"The first index of letter {letter.upper()} in word '{word}' is {i}.")
#                 break


# # Exercise 7
# list_million = []
# for i in range (1, 1000001):
#     list_million.append(i)
# print(min(list_million))
# print(max(list_million))
# print(sum(list_million))
        

# # Exercise 8 : List And Tuple
# numbers = '34,67,55,33,12,98'
# list_num = (numbers.split(','))
# print(list_num)
# tuple_num = tuple(numbers.split(','))
# print(tuple_num)

# Exercise 9 : Random Number
import random
loses = 0
wins = 0
while True:
    user_num = input("")
    compare_num = random.randint(1,9)
    if user_num == "E":
        print(f"Loses: {loses}, wins: {wins}")
        break
    elif user_num == compare_num:
        print ("Winner!")
        wins += 1
    else:
        print ("Better luck next time")
        loses+=1
    
    