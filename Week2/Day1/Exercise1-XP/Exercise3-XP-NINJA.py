# true
# true
# false
# false
# true
# false

print(3 <= 3 < 9)
print (3 == 3 == 3)
print (bool(0))
print (bool(5 == "5"))
print (bool(4 == 4) == bool("4" == "4"))
print (bool(bool(None)))



# x is True
# y is False
# a: 5
# b: 10

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)



my_text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
print(len(my_text))


# answer = input("wright the longest sentence you can without the character “A”")
# length = len(answer)
# if a in answer:
#      print ("you used A, try again")
# else:
#     print("This is new record!")
#     answer2 = input("wright the longest sentence you can without the character “A”")


answer1=input("wright the longest sentence you can without the character “A” ")
i=1
while i>0:
    if "a" in answer1:
        print("Eror, I see A")
        break
    else:
        print("New record!")
        length1 = len(answer1)
        answer2=input("wright new longest sentence you can without the character “A” ")
        length2 = len(answer2)
        if "a" in answer2:
            print("Eror, I see A")
            break
        if length2 <= length1:
            print("This sentence is shorter")
            break
        else:
            print("New record!")
            length1 = length2
            
            
