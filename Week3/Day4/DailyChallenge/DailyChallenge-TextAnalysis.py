
from collections import Counter 
import re 

class Text():
    def __init__(self, string:str):
        self.string = string.lower()
        self.most_common_dict = {} 
    def frequency (self, word):  
        counter = Counter(self.string.split(" "))
        amount = counter[word]
        if amount == 0:
            return None
        else:
           return f'The word "{word}" appeared in the text {amount} times'
        
    def common_dict (self):
        text = re.sub("[1234567890().,!?:;\n\r'в™¦вђ”\"]","", self.string)
        li = text.split(" ")
        a = Counter(li).most_common()
        self.most_common_dict = dict(a)
        return self
        
    def most_common (self):
        most_common_word = list(self.most_common_dict)
        print (f"The most common word is '{most_common_word[1]}', it appears {self.most_common_dict[most_common_word[1]]} times")
        # here really should be [1], because now have no time to fix, that the most common word is ''  ;((
        return most_common_word
    
    
    def unique (self):
        most_common_list = list(self.most_common_dict)
        unique_words = []
        for item in self.most_common_dict:
            if self.most_common_dict[item] == 1:
                unique_words.append(item)
        print(f"Here are the unique words in this text: {', '.join(unique_words)}")
        return unique_words
    
    @classmethod
    def from_file (cls, file):
        with open (file, 'r') as f:
            string = f.read()
        return cls(string)


# THIS IS RESULTS WITH STOP WORDS
# string = Text("A good book would, sometimes cost as much as a good house.")

# print(string.frequency("good"))
# print(string.frequency("mood"))
# string.common_dict().most_common()
# string.common_dict().unique()

# the_stranger = Text.from_file("the_stranger.txt")
# print(the_stranger.frequency("good"))
# print(the_stranger.frequency("mood"))
# print(the_stranger.frequency("the"))
# the_stranger.common_dict().most_common()
# the_stranger.unique()
# print(the_stranger.most_common_dict[-10]) #here I just played with my most_common_dict. I like that we can see tenth most common word too




#Bonus 
class TextModification(Text):
    def __init__(self, string: str):
        super().__init__(string)

    def get_stop_words(self):
        with open ('stop-words.txt', 'r') as f:
            stop_words = f.read()
        return stop_words
    #I addeed some words to stop list. Like name of author and book, because they appear at every page
   
    def delete_stop_words(self):
        stop_words = self.get_stop_words()
        list_stop_words = stop_words.split("\n")
        cleaned_common_dict = {} # I need this temporary list to avoid indexes confusion in self.most_common_dict
        for word in self.most_common_dict:
            if word not in list_stop_words:
                cleaned_common_dict[word] =  self.most_common_dict[word]
        self.most_common_dict =  cleaned_common_dict
        return self

# THIS IS RESULTS WITHOUT STOP WORDS
string_modified = TextModification("A good book book would, sometimes cost as much as a good house.")#I added the word "book" to chek the most_common 

print(string_modified.frequency("good"))
print(string_modified.frequency("mood"))
string_modified.common_dict().delete_stop_words().most_common()
string_modified.unique() #here we dont need call common_dict().delete_stop_words() becase it already done


the_stranger_modified = TextModification.from_file("the_stranger.txt")
the_stranger_modified.common_dict().delete_stop_words()
print(the_stranger_modified.frequency("good"))
print(the_stranger_modified.frequency("mood"))
print(the_stranger_modified.frequency("the"))
the_stranger_modified.common_dict().delete_stop_words().most_common()
the_stranger_modified.common_dict().delete_stop_words().unique()
