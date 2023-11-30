my_function = lambda s: s.lower().capitalize()
fruit = ["Dkf","almv", "bLla", "Askv"]
map_result = map(my_function, fruit)
# or just map_result = map(lambda s: s.lower().capitalize(), fruit)
# print(map_result) -> object, can be dict(zip())
fuit_new = (list(map_result))

filter_obj = filter(lambda s: s[0] == "A", fuit_new)
print(list(filter_obj)) 
# -> ['Almv', 'Askv']


from functools import reduce
my_list = [1,2,3,4,5]
redused_list = reduce(lambda n1, n2: n1+n2, my_list)
print(redused_list) 
# -> int
# == print(sum(nums))