
import requests
from bs4 import BeautifulSoup
import json

url = "https://www.ef.com/wwen/english-resources/english-quotes/famous/"
response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')

listQuotes = []

allQuotes = soup.find_all('tr')
# text_content = item.get_text(strip=True)
# print(text_content.encode('utf-8').decode('unicode_escape'))

# print(allQuotes[1].get_text(strip=True))
for index,item in enumerate (allQuotes):
    try:
       listQuotes.append([])
       quote_elements = item.find_all('td')
       for element in quote_elements:
           listQuotes[index].append(element.text.strip())
    except:
        pass


objectQuotes = []


for i,element in enumerate(listQuotes):
    if i>1:
        try:
            objectQuotes.append({element[1] : element[0]})
        except:
            pass


with open('quotes.json', 'w') as f:
    json.dump(objectQuotes, f)