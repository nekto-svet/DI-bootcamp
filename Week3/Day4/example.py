with open ('names.txt', 'r') as f:
    text = f.readlines()
    all_text = f.read()
    print(text)

# for i, line in enumerate (text):
#     print(i,line)

# print(text[4])

# try:
#     print(all_text[1-5])


# print(text[:5])
# for word in text:
#     s = list(word)
#     print(s)

# 5
# cleaned_names = list(map(lambda s: s.strip("\n"), text))
# print(cleaned_names)
# darth = text.count('Darth')
# print(darth)


from collections import Counter   
answer=Counter()
answer = Counter(text)  
print('Lea: ',answer['Lea\n'])

# 6
with open ('names.txt', 'a') as t:
    t.write('\nSveta')

#7
for i, name in enumerate(text):
    if name is "Luke\n":
        text[i] = f'Skywalker{name}'
print(text)





import json
my_family = {
    'parents': [1,2],
    'children': [3,4]
}

json_file = 'family.json'
with open(json_file, 'w') as file_obj:
    json.dump(my_family, file_obj)