class Dog():
    def __init__(self, name, color, age, weight):
        self.name = name
        self.color = color
        self.age = age
        self.weight = weight
        print(f"Take a look at tis beautiful dog {name}. It's {age} years old, has {color} color and {weight}kg weight")
    def bark(self):
        print(f"{self.name} barks! WAF")
    def jump(self, height:float):
        print(f"{self.name} jumps on {height} meters heigh!")
    def rename(self, new_name):
        self.name = new_name
        print(f"My new name is {new_name}!")

first_dog = Dog("Cucu", "black", 7, 12)
first_dog.bark()
first_dog.jump(1.3)
first_dog.rename("Lulu")

# functiom inside a class -- method



class Computer():

    def description(self, name):
        """
        This is a totally useless function
        """
        print("I am a computer, my name is", name)
        #Analyse the line below
        print(self)

mac_computer = Computer()
mac_computer.brand = "Apple"
print(mac_computer.brand)

dell_computer = Computer()

Computer.description(dell_computer, "Mark")
# IS THE SAME AS:
dell_computer.description("Mark")
