# Exercise 1: Currencies
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    def __str__(self):
        return f"{self.amount} {self.currency}s"
    
    def __int__(self): 
        return int(self.amount)
        
    def __repr__(self):
        return f"{self.amount} {self.currency}s"
    
    def __add__(self, other):
        if self.currency != other.currency:
            raise TypeError("Cannot add between different Currency types")
        elif type(self.amount) != type(other.amount) != int:
            raise TypeError("Amount shoul be integer")
        elif type(self.amount) == type(other.amount) == int:
            return self.amount+other.amount
    
    def __iadd__(self, other):
        try:
            self.amount += other
        except:
            if self.currency != other.currency:
                raise TypeError("Cannot add between different Currency types")
            else: self.amount += other.amount
        return self


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1) #5 dollars
print(str(c1)) #5 dollars
print(repr(c1)) #5 dollars
print(int(c1)) #5
print(c1+c2) #15
c1+=5 
print(c1)#10 dollars
c1+=c2
print(c1)#20 dollars
#c1 + c3 #TypeError


# Exercise 3: String Module
import string
import random
a_string = string.ascii_letters
my_string = ""
for i in range (0,5):
    my_string+=a_string[random.randint(0,len(a_string)-1)]
print(my_string)


#  Exercise 4 : Current Date
import datetime
def date_now():
    print(f"Today {datetime.datetime.now().date()}")
date_now()

# Exercise 5 : Amount Of Time Left Until January 1st
import datetime
import calendar
def amount_of_time(date):
    current_date = datetime.datetime.now()
    amount = date-current_date
    month = calendar.month_name[date.month]
    res = f"The {date.day} of {month} is in {amount} hours" #???I don't know how get just time from amout to print "and" between date and time
    print(res)

future_date = datetime.datetime(2024, 2, 13)
amount_of_time(future_date)

# Exercise 6 : Birthday And Minutes
import datetime
def how_many_minutes(birthday):
    current_date = datetime.datetime.now()
    minutes = (current_date-birthday).total_seconds()/60
    print(f'You lived {int(minutes)} minutes')

birthday = datetime.datetime(1993, 2, 13)
how_many_minutes(birthday)


# Exercise 7 : Faker Module
from faker import Faker
fake = Faker()
fake.name() #Now Faker works from terminal or cmd, but doesn't work from the code
