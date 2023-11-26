#For example,  
#my_name = "Frank"  this line creates a name variable type: string 
#print("My name is {}".format(my_name))

# cars = 100
# space_in_a_car = 4.0
# drivers = 30
# passengers = 90
# cars_not_driven = cars - drivers
# cars_driven = drivers
# carpool_capacity = cars_driven * space_in_a_car
# average_passengers_per_car = passengers / cars_driven


# print("There are", cars, "cars available.")
# print("There are only", drivers, "drivers available.")
# print("There will be", cars_not_driven, "empty cars today.")
# print("We can transport", carpool_capacity, "people today.")
# print("We have", passengers, "to carpool today.")
# print("We need to put about", average_passengers_per_car,"in each car.")


number = input ("give me a number between 1 and 100")
print (f"this is {number}")
if int(number)%5 == 0 and int(number)%3 == 0:
    print ("FizzBuzz")
elif int(number)%5 == 0:
    print ("Buzz")
elif int(number)%3 == 0:
    print ("Fizz")
else:
    print ("I dunno")