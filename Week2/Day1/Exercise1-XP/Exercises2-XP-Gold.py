# Exercise 1
print ("Hello world\n"*4+"I love python\n"*4)

# Exercise 2
month = input ("What number of month now?")
if int(month)>=3 and int(month)<=5:
    print("Spring")
elif int(month)>=6 and int(month)<=8:
    print("Summer")
elif int(month)>=9 and int(month)<=11:
    print("Autumn")   
elif int(month)==1 or int(month)==2 or int(month)==12:
    print("Winter")
else:
    print("Wrong number")
