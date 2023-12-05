class Door:
    def __init__(self, is_opened):
        self.is_opened = is_opened
    def open_door(self):
        if self.is_opened == False:
            self.is_opened = True
    def close_door(self):
        if self.is_opened == True:
            self.is_opened = False

class RegularDoor (Door):
    def __init__(self, is_opened):
        super().__init__(is_opened)

class BlockedDoor (Door):
    def __init__(self, is_opened):
        super().__init__(is_opened)
    def open_door(self):
       raise Exception("Error. Blocked door cannot be opened or closed.")
    def close_door(self):
        raise Exception("Error. Blocked door cannot be opened or closed.")

first_door = RegularDoor (True)
first_door.close_door()
print (first_door.is_opened)

second_door = BlockedDoor (False)
second_door.close_door()
print (second_door.is_opened)
       

class A():

    def dothis(self):
        print("doing this in A")

class B(A):
    pass

class C():
    def dothis(self):
        print("doing this in C")

class D(B, C):
    pass
d_instance = D()
d_instance.dothis() 




class Book():
    def __init__(self, title, author, publication_date, price):
        self.title = title
        self.author = author
        self.publication = publication_date
        self.price = price

    def present(self):
        print(f'Title: {self.title}')

class Fiction(Book):
    def __init__(self, title, author, publication_date, price, is_awesome):
        super().__init__(title, author, publication_date, price)
        self.genre = 'Fiction'
        self.is_awesome = is_awesome
        if self.is_awesome:
            self.bored = False
            print('Woow this is an awesome book')
        else:
            self.bored = True
            print('I am very bored')

if __name__ == '__main__':
    foundation = Fiction('Asimov', 'Foundation', '1966', '5', True)
    foundation.present()
    print(foundation.price)
    print(foundation.bored)
    boring_book = Fiction('boring_guy', 'boring_title', 'boring_date', '9000', False)
    print(boring_book.bored)



my_list = [2,3,1,2,"four",42,1,5,3,"imanumber"]
sum = 0
for i in my_list:
    try:
        sum += i
    except:
        pass
print(sum)

