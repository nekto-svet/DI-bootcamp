import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

class Deck:
    def __init__(self):
        self.deck = []

    def create_deck(self):
        deck = []
        values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        counter = 1
        for s in suits:
            for v in values:
                card = Card(s,v)
                self.deck.append(card)
        return self
    

    def shuffle(self):
        random.shuffle(self.deck)
        return self
    
    def deal(self):
        card = self.deck.pop(random.randint(0,52))
        return card
                
my_deck = Deck()
current_card = my_deck.create_deck().shuffle().deal()
print(f"This is {current_card.value} {current_card.suit}")


        