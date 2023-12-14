import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

db_name = os.getenv('DB_NAME')
db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASS')
db_host = os.getenv('DB_HOST')
db_port = os.getenv('DB_PORT')

conn = psycopg2.connect(
    dbname = db_name,
    user = db_user,
    password = db_password,
    host = db_host,
    port = db_port
)

# conn = psycopg2.connect(
#     dbname = 'DVDshop11.12',
#     user = 'postgres',
#     password = '9362cdT*',
#     host = 'localhost',
#     port = '5432'
# )

cur = conn.cursor()

cur.execute ('SELECT * FROM products')
rows = cur.fetchall()
for row in rows:
    print (row)

insert_query = 'INSERT INTO products (name, price) VALUES (%s, %s)'
data_to_insert = ('iKey', 750)
cur.execute (insert_query, data_to_insert)

conn.commit()

cur.close()
conn.close()