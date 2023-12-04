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
       