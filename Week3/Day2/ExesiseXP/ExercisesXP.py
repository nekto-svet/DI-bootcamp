if __name__ == "__main__":
    # Exercise 1 : Pets
    class Pets():
        def __init__(self, animals):
            self.animals = animals

        def walk(self):
            for animal in self.animals:
                print(animal.walk())

    class Cat():
        is_lazy = True

        def __init__(self, name, age):
            self.name = name
            self.age = age

        def walk(self):
            return f'{self.name} is just walking around'

    class Bengal(Cat):
        def sing(self, sounds):
            return f'{sounds}'

    class Chartreux(Cat):
        def sing(self, sounds):
            return f'{sounds}'
        
    class Siamese(Cat):
        def sing(self, sounds):
            return f'{sounds}'

    cat1 = Bengal("Murka", 3)
    cat2 = Chartreux("Kotia", 5)
    cat3 = Siamese("Chucha", 4)    
    all_cats = [cat1, cat2, cat3]
    sara_pets = Pets(all_cats)
    sara_pets.walk()

#Exercise 2 : Dogs
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return f"{self.name} is barking"
    def run_speed(self):
        speed = self.weight/self.age*10
        return speed
    def fight(self, other_dog):
        speed = self.run_speed()
        other_speed = other_dog.run_speed()
        if speed > other_speed:
            result = f"{self.name} won!"
        elif other_speed > speed:
            result = f"{other_dog.name} won!"
        else:
            result = "Tie!"
        return result

if __name__ == "__main__":
    lassy = Dog("Lassy", 4, 12)
    balto = Dog("Balto", 7, 16)
    beethoven = Dog("Beethoven", 2, 6)

    print(beethoven.fight(balto))
    print(balto.fight(lassy))
    print(lassy.fight(beethoven))


#     Exercise 4 : Family
    class Family:
        def __init__(self, members, last_name):
            self.members = members
            self.last_name = last_name
        def born(self, child):
            self.members.append(child)
            print("Congrats!")
        def is_18 (self):
            for member in self.members:
                if member["age"] < 18:
                    member['is_child'] = True
                else:
                    member['is_child'] = False
        def family_presentation(self):
            print (f"Family {self.last_name}: ")
            for member in self.members:
                print(member)

    reznik_members =     [
        {'name':'Michael','age':35,'gender':'Male','is_child':False},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False}
    ]
    new_member = {'name':'Lili','age':0,'gender':'Female'}
    reznik_family = Family(reznik_members, "Reznik")
    reznik_family.born(new_member)
    reznik_family.is_18()
    reznik_family.family_presentation()


# Exercise 5 : TheIncredibles Family
    class TheIncredibles(Family):
        def __init__(self, members, last_name):
            super().__init__(members, last_name)
        def use_power(self):
            for member in self.members:
                if member['is_child'] == False:
                    print(f"Superpwer: {member['power']}")
        def incredible_presentation(self):
            self.family_presentation()

members_incredible = [
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ]
baby = {'name':'Jack','age':0,'gender':'Male','is_child':True,'power': 'Unknown Power','incredible_name':'Baby Jack'}

incredibles = TheIncredibles(members_incredible, "Muzarim")
incredibles.use_power()
incredibles.incredible_presentation()       
incredibles.born(baby)
incredibles.incredible_presentation()       