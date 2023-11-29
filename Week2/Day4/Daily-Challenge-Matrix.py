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
    print(list_answer)

    # for i, char in enumerate(list_answer):
    #     if (char.isspace) and (list_answer[i+1].isspace):
    #         list_answer.remove(char)

    i = 0
    for i in range(0, (len(list_answer)-1)):
        if list_answer[i].isspace: 
        # and (list_answer[i+1].isspace):
            del list_answer[i]
        
    answer = ''.join(list_answer)
    

    return answer

matrix = make_martix(string)
answer = read_matrix(matrix)
print(answer)