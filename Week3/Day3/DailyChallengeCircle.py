import math as m

class Circle:
    all_circles = []  

    def __init__(self, rad, diam):
        if diam == 0:
            self.radius = float(rad)
            self.diameter = rad*2
        elif rad == 0:
            self.diameter = float(diam)
            self.radius = diam/2
        self.all_circles.append(self.radius)
     

    def __str__(self):
        return f"This circle`s radius is {self.radius} and diameter is {self.diameter}"
    
    def get_area(self):
        circle_area = m.pi * self.radius * self.radius
        print (circle_area)
        return circle_area
    
    def __add__(self, other):
        return self.radius+other.radius
    
    def __gt__(self, other):
        bigger = False
        if self.radius > other.radius:
            bigger = True
        return bigger
    
    def __eq__(self, other):
        equal = False
        if self.radius == other.radius:
            equal = True
        return equal
    
    @classmethod
    def compare_rads (cls):
        sorted_circles = sorted(cls.all_circles)
        return sorted_circles
    


circle1 = Circle(0,4) 
print(circle1) # >>This circle`s radius is 2.0 and diameter is 4.0
print (circle1.radius) # >>2.0
circle1.get_area() # >>12.566370614359172

circle2 = Circle(5,0)
print(circle2)
circle3 = Circle(circle1+circle2,0)
print(circle3)

print(circle1 > circle2)
print(circle3 > circle2)

circle4 = Circle(0,14)
print(circle2 == circle1)
print(circle3 == circle4)

print(Circle.compare_rads())