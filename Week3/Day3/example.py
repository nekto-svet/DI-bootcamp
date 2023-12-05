class Circle:
    color = "red"

    def __init__(self, diameter):
        self.diameter = diameter

    def grow(self, factor=2):
        self.diameter = self.diameter * factor

    def get_color(self):
       return Circle.color

circle1 = Circle(2)
print(circle1.color)
print(Circle.color)
print(circle1.get_color())
circle1.grow(3)
print(circle1.diameter)




class Person:

    used_names = set()

    def __init__(self, name, age):
        if name in self.used_names:
            name = input("That name is taken. Enter another name: ")

        self.name = name
        self.age = age
        self.used_names.add(name)

    @classmethod
    def fromYear(cls, name, birth_year):
        THIS_YEAR = 2023
        return cls(name, THIS_YEAR - birth_year)

    @property
    def professional_name(self):
        return "Mr " + self.name

man = Person ("Andrew", 27)
nina = Person.fromYear("Nina", 1993)
print (nina.age)
# enother way to make an instase (one with age, one with year)



class MyClass(object):
    count = 0

    def __init__(self, val):
        self.val = val
        MyClass.count += 1

    def set_val(self, newval):
        self.val = newval

    def get_val(self):
        return self.val

    @classmethod
    def get_count(cls):
        return cls.count

object_1 = MyClass(10)
print("\nValue of object : %s" % object_1.get_val())
print(MyClass.get_count())

object_2 = MyClass(20)
print("\nValue of object : %s" % object_2.get_val())
print(MyClass.get_count())



class MyClass(object):
    count = 0

    def __init__(self, val):
        self.val = self.filterint(val)
        MyClass.count += 1

    @staticmethod
    def filterint(value):
        if not isinstance(value, int):
            print("Entered value is not an INT, value set to 0")
            return 0
        else:
            return value


a = MyClass(5)
b = MyClass(10)
c = MyClass(15)

print(a.val)
print(b.val)
print(c.val)
print(a.filterint(100))




class Person:
  def __init__(self, name, lastName):
      self.name = name
      self.lastName = lastName

  def __repr__(self):
      return f"{self.__class__.__name__} : {self.name} {self.lastName}"

  def __add__(self, other):
      return Person(self.name, other.lastName)

father = Person('John', 'Snow')
mother = Person('Kaleesi', 'MotherOfDragons')
# using the __add__() method
dragonChild = father + mother 

print(dragonChild)
# >> Person : John MotherOfDragons // __add__ is called to add two objects




class PrintList(object):

    def __init__(self, my_list):
        self.mylist = my_list

    def __repr__(self):
        return str(self.mylist)


printlist = PrintList(["a", "b", "c"])
print(printlist)


