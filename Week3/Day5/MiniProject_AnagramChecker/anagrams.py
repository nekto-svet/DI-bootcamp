import re
from anagram_checker import AnagramChecker


def play():
    show_menu()
    user_answer1 = input ("Print here:\n")
    if user_answer1.capitalize() == 'E':
        print("Bye!")
    elif user_answer1.capitalize() == 'R':
        take_first_answer()
    elif user_answer1.capitalize() == 'A':
        take_second_answer()
    elif user_answer1.capitalize() == 'C':
        take_third_answer()
    else:
        print("Sorry. I don't undarstand you.")
        play()
        

def show_menu():
    print ("Hi! You can:\n  1.Check if your word is a real word: print R.\n  2.Find all anagrams of a word: print A\n  3.Compare two words: are they anagrams? print C\n  4.Exit: print E\n")


def next():
    next = input("Press Enter to continue")
    if next == '':
        print("\n\n\nWe'r back to the main meny")
        play()
    else:
        next()


def take_first_answer():
    print ("You are in the section 'Check if your word is a real word'. For exit print E.")
    user_answer_real = input ("Print one word:\n").lower()
    if user_answer_real == "e":
        print ("You are in the main meny")
        play()
    elif len(user_answer_real.split()) > 1:
            print("\n\nYou shold give me just one word.\n\n")
            take_first_answer()
    else:
        user_answer_real = re.sub(r'[^A-Za-z]', '', user_answer_real)
        user_answer_real = user_answer_real.lower()
        is_real (user_answer_real)


def is_real (word):
    check = AnagramChecker()
    real = check.is_valid_word(word)
    if real == True:
        print ("\n\n YOUR WORD IS REAL! \n\n")
    elif real == False:
        print ("\n\nTHE WORD DOESN'T EXIST\n\n")
    next()
    

def take_second_answer():
    print ("You are in the section 'Find all anagrams'. For exit print E.")
    user_answer_anagram = input ("Print one word:\n").lower()
    if user_answer_anagram == "e":
        print ("You are in the main meny")
        play()
    elif len(user_answer_anagram.split()) > 1:
            print("\n\n\You shold give me just one word.\n\n")
            take_second_answer()
    else:
        user_answer_anagram = re.sub(r'[^A-Za-z]', '', user_answer_anagram)
        user_answer_anagram = user_answer_anagram.lower()
        all_anagrams (user_answer_anagram)


def all_anagrams (word):
    check = AnagramChecker()
    anagrams = check.get_anagrams(word)
    print(f"\n\nHERE ARE ALL ANAGRAMS THAT I FOUND: {', '.join(anagrams)}\n\n")
    next()


def take_third_answer():
    print ("You are in the section 'Compare two words'. For exit print E.")
    user_answer_compare = input ("Print two words to compare, devide it by a spase:\n").lower()
    if user_answer_compare == "e":
        print ("You are in the main meny")
        play()
    elif len(user_answer_compare.split()) != 2:
        print("\n\nYou shold give me two words, devided by a spase.\n\n")
        take_third_answer()
    else:
        user_answer_compare = re.sub(r'[^A-Za-z\s]', '', user_answer_compare)
        user_answer_compare = user_answer_compare.lower().split()
        word1 = user_answer_compare[0]
        word2 = user_answer_compare[1]
        two_anagram(word1, word2)

def two_anagram(word1, word2):
    check = AnagramChecker()
    anagram = check.is_anagram(word1, word2)
    if anagram == True:
        print ("\n\nYOUR WORDS ARE ANAGRAMS\n\n")
    elif anagram == False:
        print ("\n\nYOUR WORDS ARE ANAGRAMS\n\n")
    next()


play()
