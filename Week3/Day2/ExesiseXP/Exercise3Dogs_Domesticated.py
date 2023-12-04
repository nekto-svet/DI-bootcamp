from ExercisesXP import Dog
import random
class PetDog(Dog):
    def __init__(self, name, age, weight,trained=False):
        super().__init__(name, age, weight)
        self.trained = trained
    def train(self):
        self.bark()
        self.trained = True
    def play(self, *dogs):
        dogs_name = ""
        for dog in dogs:
            dogs_name += f', {dog}'
        print(f"{self.name}{dogs_name} all play together")
    def do_a_trick(self):
        i = random.randint(0,3)
        if i == 0:
            print(f"{self.name} does a barrel roll")
        elif i == 1:
            print(f"{self.name} stands on his back legs")
        elif i == 2:
            print(f"{self.name} shakes your hand")
        else:
            print(f"{self.name} plays dead")

puppy = PetDog("Puppy", 1, 3)
puppy.train()
print(puppy.trained)
puppy.play("Lulu", "Archi", "Milka")
puppy.do_a_trick()