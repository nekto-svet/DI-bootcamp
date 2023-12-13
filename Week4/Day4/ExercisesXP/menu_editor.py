from menu_manager import MenuManager
from menu_item import MenuItem

def show_user_menu():
    while True:
        print ('''
                View an Item (V)\n
                Add an Item (A)\n
                Delete an Item (D)\n
                Update an Item (U)\n
                Show the Menu (S)\n
                Exit (E)''')
        user_answer = input('').capitalize()

        if user_answer == 'V':
            show_item()

        elif user_answer == 'A':
            add_item_to_menu() 

        elif user_answer == 'D':
            remove_item_from_menu()

        elif user_answer == 'U':
            update_item_from_menu()

        elif user_answer == 'S':
            show_restaurant_menu()

        elif user_answer == 'E':
            break
        else:
            print ('Not clear request, try again')
            show_user_menu()

def show_item():
    name = input('Print a name of an item:   ').lower().capitalize()
    try:
        MenuManager.get_by_name(name)
    except:
        return None

def add_item_to_menu():
    new_name = input('Print a name of an item that you want to add:   ').lower().capitalize()
    new_price = int(input('Print a price of an item:   '))
    item = MenuItem(new_name, new_price)
    item.save()

def remove_item_from_menu():
    name_delete = input('Print a name of an item that you want to delete:   ').lower().capitalize()
    item = MenuItem(name_delete)
    item.delete()

def update_item_from_menu():
    name_old = input('Print a name of an item that you want to change:   ').lower().capitalize()
    name_new = input('Print a new name of an item:   ').lower().capitalize()
    price_new = int(input('Print a new price of an item:   '))
    item = MenuItem(name_old)
    item.update(name_new, price_new)

def show_restaurant_menu():
    MenuManager.all_items()



show_user_menu()