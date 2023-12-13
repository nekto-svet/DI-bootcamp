import requests 
import psycopg2
import os
from dotenv import load_dotenv
import random
def database():
    load_dotenv()

    db_name = os.getenv('DB_NAME')
    db_user = os.getenv('DB_USER')
    db_password = os.getenv('DB_PASS')
    db_host = os.getenv('DB_HOST')
    db_port = os.getenv('DB_PORT')

    connection = psycopg2.connect(
        dbname = db_name,
        user = db_user,
        password = db_password,
        host = db_host,
        port = db_port
        )

    return connection


def countries_data():
    response = requests.get("https://restcountries.com/v3.1/all")
    data = response.json()
    return data


def get_country():
    connection = database()
    data = countries_data()
    random_countries = random.sample(data, 10)
    cursor = connection.cursor()

    for country in random_countries:
        try:
            cursor.execute(
                """
                INSERT INTO countries (name, capital, flag, subregion, population)
                VALUES (%s, %s, %s, %s, %s)
                """,
                (country['name']['common'], country['capital'][0], country['flag'][0], country['subregion'], country['population'])
            )
        except:
            pass

    connection.commit()
    cursor.close()
    connection.close()

get_country()