import os
import re

dir_path = os.path.dirname(os.path.realpath(__file__))

class AnagramChecker:
    def __init__(self) -> None:
        with open (dir_path + '\\words.txt', 'r') as f:
            check_list = f.read()
            check_list = re.sub('[\n]', ' ', check_list.lower())
            self.check_list = check_list.lower().split()


    def is_valid_word(self, word):
        check = False
        if word in self.check_list:
            check = True
        return check


    def get_anagrams(self, word):
        anagrams = []
        letters = list(word)
        for w in self.check_list:
            if len(w) == len(word) and w != word:
                letters_w = list(w)
                intersection = [x for x in letters if x in letters_w]
                if len(intersection)==len(letters):
                    anagrams.append(w)
        return anagrams

    
    @staticmethod
    def is_anagram(word1, word2):
        is_anagrams = False
        letters1 = list(word1)
        letters2 = list(word2)
        intersection = [x for x in letters1 if x in letters2]
        if word1 != word2 and len(intersection) == len(word1) == len(word2):
            is_anagrams = True
        return is_anagrams

