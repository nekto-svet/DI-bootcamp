board_matrix = [

    ['****************\n'],
    ['*1 ',' ',' '],['|2 ',' ',' '],['|3 ',' ',' *\n*----|----|----*\n'],
    ['*4 ',' ',' '],['|5 ',' ',' '],['|6 ',' ',' *\n*----|----|----*\n'],
    ['*7 ',' ',' '],['|8 ',' ',' '],['|9 ',' ',' *\n'],
    ['****************\n']
]

def display_board(matrix:list):
    board = ""
    for i, part in enumerate(board_matrix):
        for k in board_matrix[i]:
            board += k
    print(board)

def player_input(player:int):
    player_mark = int(input(f"Player {player+1}, tell me where you whant to put your mark (from 1 to 9): "))
    return player_mark

def check_win(list1, list2):
    res = 0
    if 1 in list1:
        if 2 in list1: 
            if 3 in list1:
                print ("Player 1 won!")
                res = 1
        elif 5 in list1:
            if 9 in list1:
                print ("Player 1 won!")
                res = 1
        elif 4 in list1:
            if 7 in list1:
                print ("Player 1 won!")
                res = 1
    if 4 in list1:
        if 5 in list1: 
            if 6 in list1:
                print ("Player 1 won!")
                res = 1
    if 7 in list1:
        if 8 in list1: 
            if 9 in list1:
                print ("Player 1 won!")
                res = 1
    if 2 in list1:
        if 5 in list1: 
            if 8 in list1:
                print ("Player 1 won!")
                res = 1
    if 3 in list1:
        if 5 in list1: 
            if 7 in list1:
                print ("Player 1 won!")
                res = 1
        elif 6 in list1:
            if 9 in list1:
                print ("Player 1 won!")
                res = 1
    if 1 in list2:
        if 2 in list2: 
            if 3 in list2:
                print ("Player 2 won!")
                res = 1
        elif 5 in list2:
            if 9 in list2:
                print ("Player 2 won!")
                res = 1
        elif 4 in list2:
            if 7 in list2:
                print ("Player 2 won!")
                res = 1
    if 4 in list2:
        if 5 in list2: 
            if 6 in list2:
                print ("Player 2 won!")
                res = 1
    if 7 in list2:
        if 8 in list2: 
            if 9 in list2:
                print ("Player 2 won!")
                res = 1
    if 2 in list2:
        if 5 in list2: 
            if 8 in list2:
                print ("Player 2 won!")
                res = 1
    if 3 in list2:
        if 5 in list2: 
            if 7 in list2:
                print ("Player 2 won!")
                res = 1
        elif 6 in list2:
            if 9 in list2:
                print ("Player 2 won!")
                res = 1
    return res

def play():
    display_board(board_matrix)
    players_list1 = []
    players_list2 = []
    i = 0
    for k in range(9):
        player_mark = player_input(i)
        if player_mark in players_list1 or player_mark in players_list2:
            print('Wrong mark!')
            k-=1
            continue    
        elif i == 0:
            board_matrix[player_mark][1] = "X"
            players_list1.append(player_mark)
        else:
            board_matrix[player_mark][1] = "0"
            players_list2.append(player_mark)
        display_board(board_matrix)
        chek = check_win(players_list1, players_list2)
        if chek == 1:
            break
        i+=1
        if i == 2:
            i-=2          
play()

    





