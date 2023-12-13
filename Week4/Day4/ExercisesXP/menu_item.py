import psycopg2
import os
from dotenv import load_dotenv

class MenuItem():
    def __init__(self, name, price=0):
        self.name = name
        self.price = price
        load_dotenv()
        db_name = os.getenv('DB_NAME')
        db_user = os.getenv('DB_USER')
        db_password = os.getenv('DB_PASS')
        db_host = os.getenv('DB_HOST')
        db_port = os.getenv('DB_PORT')

        self.conn = psycopg2.connect(
            dbname = db_name,
            user = db_user,
            password = db_password,
            host = db_host,
            port = db_port
            )
    
    def save(self):
        cur = self.conn.cursor()
        insert_query = '''
            INSERT INTO menu_items (item_name, item_price) 
            VALUES (%s, %s)
            '''
        data_to_insert = (self.name, self.price)
        cur.execute (insert_query, data_to_insert)
        self.conn.commit()
        cur.close()

    def delete(self):
        cur = self.conn.cursor()
        delete_query = 'DELETE FROM menu_items WHERE item_name = %s'
        data_to_delete = (self.name, )
        cur.execute (delete_query, data_to_delete)
        self.conn.commit()
        cur.close()

    def update(self, new_name, new_price):
        cur = self.conn.cursor()
        update_query = '''
            UPDATE menu_items
            SET item_name = %s, item_price = %s
            WHERE item_name = %s'''
        data_to_update = (new_name, new_price, self.name)
        cur.execute (update_query, data_to_update)
        self.conn.commit()
        cur.close()


if __name__ == "__main__":
    item = MenuItem("Pumpkin soup", 43)
    # item.save()
    # item.update('Potato soup', 35)
    item.delete()