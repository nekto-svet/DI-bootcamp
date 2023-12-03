class Farm:
    def __init__(self,name):
        self.name = name
        self.animals = {}
        print (f'{self.name}`s farm')

    def add_animal (self, animal, count=1):
        if animal not in self.animals:
            self.animals[animal] = count
        else:
            self.animals[animal] += count
        return   self.animals
    
    def get_info (self):
        info = ""
        for item in self.animals:
           info += f'{item} : {self.animals[item]} \n'
        return info
    
    def get_animal_types (self):
        types_animals = []
        for animal in  self.animals:
            types_animals.append(animal)
        sorted_animals = sorted (types_animals)
        return sorted_animals
    
    def get_short_info (self):
        all_animals = self.get_animal_types()
        info = f'{self.name}`s farm has '
        for i, animal in enumerate(all_animals):
            if i == len(all_animals)-1:
                info += f'and {animal}s.'
            elif i == len(all_animals)-2:
                info += f'{animal}s '
            else:
                info += f'{animal}s, '
        return info

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('abracadabra', 4)
macdonald.add_animal('abracadabra')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_short_info())