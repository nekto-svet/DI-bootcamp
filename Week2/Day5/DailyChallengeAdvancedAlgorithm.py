# Daily Challenge : Advanced Algorithm
# Here is a python code that generate a list of 20000 random numbers, called list_of_numbers.
# Extend this code to guess how many couples of numbers in list_of_numbers sum to target_number.

import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
print (list_of_numbers)
target_number   = 3728