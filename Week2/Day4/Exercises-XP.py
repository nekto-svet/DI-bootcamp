# Exercise 1 : What Are You Learning ?
def display_message(school:str, subject:str):
    print (f"Hi, I study {subject} at {school} and I like it")

display_message ('Developers Institute', 'Full stack')

# Exercise 2: What’s Your Favorite Book ?
def favorite_book(title:str):
    return print(f"One of my favorite books is {title}")
favorite_book("Hard to be a God")

# Exercise 3 : Some Geography
def describe_city(city:str, country = "Europe"):
    print (f"{city} is in {country}")
describe_city("Paris", "France")
describe_city("Paris")

# Exercise 4 : Random
import random
def guess_number (num:int):
    value = random.randint(0,100)
    # value = int(random.random()*100)
    if num == value:
        print(f"Cograts! You guessed the number.")
    else:
        print(f"Unfortunately {num} doesn't equal {value}")
guess_number(4)

# Exercise 5 : Let’s Create Some Personalized Shirts !
def make_shirt(size:str, text:str):
    print(f"The size of the shirt is {size} and the text is '{text}'.")
make_shirt ("XL", "Don't look")

#  Exercise 6 : Magicians …
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians(magician:list):
    for name in magician:
        print(name)       
    
def make_great(magician:list)->list:
    for i, name in enumerate(magician):
        magician[i] = name + "the Great"

make_great(magician_names)
show_magicians (magician_names) 

# Exercise 7 : Temperature Advice
import random
def get_random_temp(season):
    if season == "winter":
        degrees = random.randint(-10, 15)
    elif season == "spring" or season == "fall" or season == "autumn":
        degrees = random.randint(10, 20)
    elif season == "summer":
        degrees = random.randint(25, 40)
    else:
        degrees = 100    
    return degrees

def main():
    season = input("What season is now: ")
    temp = get_random_temp(season)
    answer = f" The temperature right now is {temp} degrees Celsius."
    if temp < 0:
        answer += " Brrr, that's freezing! Wear some extra layers today."
    elif 0 <= temp < 15:
        answer += " Quite chilly! Don't forget your coat."
    elif 15 <= temp < 24:
        answer += " Weather is perfect, IMHO."
    elif 24 <= temp < 32:
        answer += " Air conditioner is your best friend."    
    elif 32 <= temp < 41:
        answer += " Be careful, there is a possibility of getting fried."
    else:
        answer = "You gave me a wrong season"
    return answer
print(main())

Exercise 8 : Star Wars Quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def quiz(data:list):
    correct_answers = 0
    incorrect_answers = 0
    list_incorrect_answers = []
    list_failed_question = []
    for i, item in enumerate(data):
        print(item["question"])
        user_answer = input("").lower().title()
        if user_answer == item["answer"]:
            correct_answers += 1
        else:
            incorrect_answers += 1
            list_incorrect_answers.append(user_answer)
            list_failed_question.append(i)

    print (f"Number of correct answers is {correct_answers}. Number of wrong answers is {incorrect_answers}. \n Here are failed questions:")

    k=0
    for i, item in enumerate(data):
        if i in list_failed_question:
            print (f"{item['question']} Your answer is: '{list_incorrect_answers[k]}'. The right answer is '{item['answer']}'.")
            k+=1

    if incorrect_answers > 3:
        play_again = input("You had more then 3 wrong answers, do you want to play again? Put Yes or No. ").lower().capitalize()
        if play_again == "Yes":
            quiz(data)

quiz(data)





