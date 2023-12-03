# Exercise 1: Cats
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat_one = Cat("Lulu", 1)
cat_two = Cat("Kiki", 10)
cat_three = Cat("Momo", 4)
#  option1
def oldest_cat():
    all_cats = [cat_one, cat_two, cat_three]
    all_cats_age = [cat_one.age, cat_two.age, cat_three.age]
    all_cats_age = sorted(all_cats_age)
    for cat in all_cats:
        if cat.age == all_cats_age[2]:
            return cat
oldest_cat = oldest_cat()
print (f'The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.')

# option2
def oldest_cat1():
    all_cats = [cat_one, cat_two, cat_three]
    i = 0
    while i < 2:
        if all_cats[i].age < all_cats[i+1].age:
            all_cats.append(all_cats.pop(i))
            if i==1:
                i-=1
        else:
            i+=1
    return all_cats[0]
oldest_cat1 = oldest_cat1()
print (f'The oldest cat is {oldest_cat1.name}, and is {oldest_cat1.age} years old.')


# Exercise 2 : Dogs
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
    def bark(self):
        print(f"{self.name} goes woof!")
    def jump(self):
        print(f"{self.name} jumps {self.height*2} cm high!")

davids_dog = Dog("Rex", 50)
davids_dog.bark()
davids_dog.jump()

sarahs_dog = Dog("Teacup", 20)
sarahs_dog.bark()
sarahs_dog.jump()

if davids_dog.height > sarahs_dog.height:
    print(f"{davids_dog.name} is bigger.")
else:
    print(f"{sarahs_dog.name} is bigger.")


# Exercise 3 : Who’s The Song Producer?
class Song:
    def __init__(self, lyrics:list):
        self.lyrics = lyrics
    def sing_me_a_song(self):
        text = ""
        for string in self.lyrics:
            text += f"{string}\n"
        print(text)

stairway= Song(["There`s a lady who`s sure","all that glitters is gold", "and she`s buying a stairway to heaven"])
stairway.sing_me_a_song()

# Exercise 4 : Afternoon At The Zoo
class Zoo:
    def __init__(self, zoo_name):
        self.name = zoo_name
        self.animals = []

    def add_animal (self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        return self.animals
    
    def get_animals (self):
        all_animals = " ,".join(self.animals)
        print(all_animals)
        return all_animals
    
    def sell_animal (self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        return self.animals
    
    def sort_animals (self):
        sorted_animals =  sorted(self.animals)
        grouped_animals = {}
        k = 1
        grouped_animals[k] = sorted_animals[0]
        for i, animal in enumerate(sorted_animals):
            if i == 0:
                continue
            elif sorted_animals[i][0] == sorted_animals[i-1][0]:
                grouped_animals[k] = [grouped_animals[k]]
                grouped_animals[k].append(sorted_animals[i])
            else:
                k+=1
                grouped_animals[k] = sorted_animals[i]
        return grouped_animals

    def get_groups (self):
        groups = self.sort_animals()
        res = ""
        for group in groups:
            res += f'Animals in group #{group}: '
            if type(groups[group]) == str:
                res += f'{groups[group]}. '
            else:
                for i, animal in enumerate(groups[group]):
                    if i == len(groups[group])-1:
                        res += f'{animal}. '
                    else:
                        res += f'{animal}, '
        print(res)
        return res
    


ramat_gan_safari = Zoo("ramat_gan_safari")

ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Emu")

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Giraffe")

ramat_gan_safari.get_groups()

