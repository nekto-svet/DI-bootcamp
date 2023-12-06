# Exercise 1 – Random Sentence Generator
import random


def get_words_from_file(text):
    with open(text) as f:
        words = f.readlines()
        cleaned_words = list(map(lambda s: s.strip("\n"), words))
    return cleaned_words


def get_random_sentence (length):
    words = get_words_from_file('words.txt')
    frase = ''
    for i in range (length):
        frase += f"{words[random.randint(0,len(words))-1]} "
    return frase.lower().capitalize()

def main():
    print("This is a random sentence generator")
    length = int(input ("Tell me a length of sentence (from 2 to 20):  "))
    if (2 > length) or (length > 20):
        raise Exception("length of sentence should be from 2 to 20")
    else:
        frase = get_random_sentence(int(length))
        print(frase)

main()
