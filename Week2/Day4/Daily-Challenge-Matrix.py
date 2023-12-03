string = "7iiTsxh%?i #sM $a #t%^r!"

def make_martix(string):
    matrix = []
    list_string = list(string)

    for i in range(int(len(string)/3)):
        matrix.append([])
        for k in range(3):
            matrix[i].append(list_string.pop(0))
    return matrix

def read_matrix(martix):
    list_characters = []
    for k in range(3):
        for i in range(len(matrix)):
            list_characters.append(matrix[i][k])
    list_answer = []
    for char in list_characters:
        if char.isalpha():
            list_answer.append(char)
        else:
            list_answer.append(' ') 
    answer = ''.join(list_answer).removeprefix(" ").removesuffix(" ")
    while "  " in answer:
        answer = answer.replace("  ", " ")
    return answer

matrix = make_martix(string)
answer = read_matrix(matrix)
print(answer)