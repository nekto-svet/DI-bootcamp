import requests

url = ('https://newsapi.org/v2/top-headlines?'
       'q=anti-semitism&'
       'from=2023-12-01&'
    #    'country=us&'
       'apiKey=5b6ddd73799846a59d25fa84ea3aa9cb')

response = requests.get(url)

data = response.json()

print(data)




# {'source': {'id': None, 'name': 'Americanthinker.com'}, 'author': None, 'title': 'The Divide Among American Jews', 'description': 'This week was a sad awakening for me.\xa0 I attended a discussion group regarding the situation in the Mideast at my synagogue.\xa0 Of the ten attendees I was the only one to express concern about the level of anti-Semitism which was occurring ar...', 'url': 'https://www.americanthinker.com/articles/2023/11/the_divide_among_american_jews.html', 'urlToImage': 'https://www.americanthinker.com/images/bucket/2023-11/250414.jpg', 'publishedAt': '2023-11-28T06:00:00Z', 'content': 'This week was a sad awakening for me.\xa0 I attended a discussion group regarding the situation in the Mideast at my synagogue.\xa0 Of the ten attendees I was the only one to express concern about the leve… [+5121 chars]'}]