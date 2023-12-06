from collections import Counter 
import re

class Text():
    def __init__(self, string:str):
        self.string = string.lower()
        self.li = self.string.split(" ")
        self.most_common_list = []
    def frequency (self, word):  
        counter = Counter(self.li)  
        amount = counter[word]
        if amount == 0:
            return None
        else:
           return f'The word "{word}" appeared in the text {amount} times'
        
    def common_list (self):
        freq = {}
        for w in self.li:
            if w == " " or w == "\n" or w == "\r":
                pass
            else:
                counter = Counter(self.li) 
                amount = counter[w]
                cleaned_w = re.sub('[.,!?:;\n\r"]',"",w)
                freq[cleaned_w] = amount
        self.most_common_list = sorted(freq.items(), key = lambda item: item[1])
        return self
        
    def most_common (self):
        most_common_word = self.most_common_list[-1]
        print (f"The most common word is '{most_common_word[0]}', it appears {most_common_word[1]} times")
        return most_common_word
    
    def unique (self):
        unique_words = []
        for item in self.most_common_list:
            if item[1] == 1:
                unique_words.append(item[0])
        print(f"Here are the unique words in this text: {', '.join(unique_words)}")
        return unique_words
    
    @classmethod
    def from_file (cls, file):
        with open (file, 'r') as f:
            string = f.read()
        return cls(string)



string = Text("A good book would, sometimes cost as much as a good house.")

print(string.frequency("good"))
print(string.frequency("mood"))
string.common_list().most_common()
string.common_list().unique()

the_stranger = Text.from_file("the_stranger.txt")

print(the_stranger.frequency("good"))
print(the_stranger.frequency("mood"))
print(the_stranger.frequency("the"))
the_stranger.common_list().most_common()
the_stranger.unique()
print(the_stranger.most_common_list[-10])

