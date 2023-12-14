# import os, json
# import os

# dir_path = os.path.dirname(os.path.realpath(__file__))
# import requests

# repsponse = requests.get('https://api.chucknorris.io/jokes/random')

# print(response)

# print(response.json())

# for i in range(11):
#     repsponse = requests.get('https://api.chucknorris.io/jokes/random')
#     if repsponse.status_code == 200:
#         data.append(response.json())
# with open(dir_path + '\\jokes.json', mode = 'a') as file:
#     json.dump(data,file)

# print(data = [:4])

def multiply(a, b):
    return a * b

if __name__ == "__main__":
    x = 3
    y = 4
    result = multiply(x, y)
    print(f"The result of multiplying {x} and {y} is: {result}")
