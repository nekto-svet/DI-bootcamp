import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()

db_name = os.getenv('DB_NAME')
db_user = os.getenv('DB_USER')
db_password = os.getenv('DB_PASS')
db_host = os.getenv('DB_HOST')
db_port = os.getenv('DB_PORT')

def connection():
    conn = psycopg2.connect(
        dbname = db_name,
        user = db_user,
        password = db_password,
        host = db_host,
        port = db_port
    )
    return conn


# View all users from the users table.
def view_all_users(conn):
    cur = conn.cursor()
    cur.execute ('SELECT * FROM users')
    rows = cur.fetchall()
    for row in rows:
        print (row)
    conn.commit()
    cur.close()


# Add a new user to the users table.
def add_new_user(conn):
    cur = conn.cursor()
    name = input ('Tell me a name:\n')
    mail = input ('Tell me an email:\n')
    ages = int(input ('Tell me an age:\n'))
    insert_query = '''
        INSERT INTO users (username, email, age) 
        VALUES (%s, %s, %s)
        '''
    data_to_insert = (name, mail, ages)
    cur.execute (insert_query, data_to_insert)
    conn.commit()
    cur.close()


# Update a user's information based on their id.
def update_users_name(conn):
    cur = conn.cursor()
    user_new_name = input ('Tell me a new name:\n')
    user_id = input ('Tell me a user`s id:\n')
    update_query = '''
        UPDATE users 
        SET username = %s
        WHERE id = %s'''
    data_to_insert = (user_new_name, user_id)
    cur.execute (update_query, data_to_insert)
    conn.commit()
    cur.close()

def update_users_email(conn):
    cur = conn.cursor()
    user_new_email = input ('Tell me a new email:\n')
    user_id = input ('Tell me a user`s id:\n')
    update_query = '''
        UPDATE users 
        SET email = %s
        WHERE id = %s'''
    data_to_insert = (user_new_email, user_id)
    cur.execute (update_query, data_to_insert)
    conn.commit()
    cur.close()

# Delete a user from the users table based on their id.
def delete_user(conn):
    cur = conn.cursor()
    user_id = input ('Tell me a user`s id:\n')
    delete_query = 'DELETE FROM users WHERE id = %s'
    data_to_insert = (user_id)
    cur.execute (delete_query, data_to_insert)
    conn.commit()
    cur.close()

def menu():
    print('''\n\n\n\n
        Hello!\n
        If you want to view all users print      V\n
        If you want to add a new user print      A\n
        If you want to change user`s name print  N\n
        If you want to change user`s email print E\n
        If you want to delete user print         D \n
        If you want to exit print                Q \n
        \n\n\n''')

# User Interaction:
def command_line():
    conn = connection()
    while True:
        menu()
        user_answer = input('').capitalize()

        if user_answer == 'V':
            view_all_users(conn)
        elif user_answer == 'A':
            add_new_user(conn)
        elif user_answer == 'N':
            update_users_name(conn)
        elif user_answer == 'E':
            update_users_email(conn)
        elif user_answer == 'D':
            delete_user(conn)
        elif user_answer == 'Q':
            break
        else:
            print ('Not clear request, try again')
            command_line()
    conn.close()

command_line()
