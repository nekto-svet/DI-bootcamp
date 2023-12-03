matrix = [
    [' '],[' '],[' '],
    [' '],[' '],[' '],
    [' '],[' '],[' ']
]

def display_board(matrix:list):
    board = (f'{"*"*16}\n*1 {matrix[0][0]} |2 {matrix[1][0]} |3 {matrix[2][0]} *\n*{"-"*4}|{"-"*4}|{"-"*4}*\n*4 {matrix[3][0]} |5 {matrix[4][0]} |6 {matrix[5][0]} *\n*{"-"*4}|{"-"*4}|{"-"*4}*\n*7 {matrix[6][0]} |8 {matrix[7][0]} |9 {matrix[8][0]} *\n{"*"*16}')
    print(board)



def player_input(player:int):
    player_mark = int(input(f"Player {player+1}, tell me where you whant to put your mark (from 1 to 9): "))
    return player_mark

def check_win(list1, list2):
    wins = [[1,2,3], [4,5,6], [7,8,9], [1,5,9], [3,5,7], [1,4,7], [2,5,8], [3,6,9]]
    check = 0   
    for item in wins:
        intersection1 = [x for x in list1 if x in item]
        if len(intersection1)==3:
            print ("Player 1 won!")
            check = 1 
        intersection2 = [x for x in list2 if x in item]
        if len(intersection2)==3:
            print ("Player 2 won!")
            check = 1
    return check

def play():
    display_board(matrix)
    players_list1 = []
    players_list2 = []
    i = 0
    for k in range(9):
        player_mark = player_input(i)
        if player_mark in players_list1+players_list2:
            print('Wrong mark!')
            k-=1
            continue    
        elif i == 0:
            matrix[player_mark-1] = "X"
            players_list1.append(player_mark)
            print (players_list1)
        else:
            matrix[player_mark-1] = "0"
            players_list2.append(player_mark)
            print (players_list2)
        display_board(matrix)
        flag = check_win(players_list1, players_list2)
        if flag == 1:
            break  
        i+=1
        if i == 2:
            i-=2
        if k == 8:
            print("TIE!")     

play()
