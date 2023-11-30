# Challenge 1 : Sorting
my_strip = "without,hello,bag,world"
def sort_strip (strip:str)->str:
    new_string = ','.join(sorted(list(my_strip.split(","))))
    return new_string
print(sort_strip(my_strip))
# I will think how to use here List Comperhension later :(

# Challenge 2 : Longest Word
from functools import reduce
my_sentense = "Forgetfulness is by all means powerless!"
def longest_word(sentense: str)->str:
    li = list(sentense.split(" "))
    print(li)
    sorted_li = sorted(li, key=len)
    print(sorted_li)
    return sorted_li[-1]
print(longest_word(my_sentense))