import psycopg2
import os
from dotenv import load_dotenv

class MenuManager():
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

    @classmethod
    def get_by_name(cls, find_name):
        cur = MenuManager.conn.cursor()
        select_query =  'SELECT * FROM menu_items WHERE item_name = %s'
        data_to_select = (find_name, )
        cur.execute (select_query, data_to_select)
        rows = cur.fetchall()
        for row in rows:
            print (row)
        cur.close()

    @classmethod
    def all_items(cls):
        cur = MenuManager.conn.cursor()
        cur.execute ('SELECT * FROM menu_items')
        rows = cur.fetchall()
        for row in rows:
            print (row)
        cur.close()


if __name__ == "__main__":
    MenuManager.get_by_name('Pumpkin soup')
    MenuManager.all_items()