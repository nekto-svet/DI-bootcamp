import re

def convert_to_int (items:dict, money:str)->tuple:
    items_purchase_int = {}
    for item in items:
        items_purchase_int[item] = int(re.sub("[$,]","",items[item]))
    wallet_int = int(money.replace("$",""))
    return (wallet_int, items_purchase_int)
 

def afford_to_purchase (items:dict, money:int)->tuple:
    result = []
    for item in items:
        if items[item]<money:
            result.append(item)
            money -= items[item]
    return (result, money)

def print_res (res:list, money:int):
    if res:
        print(f"You can buy {', '.join(res)} and you will have {money}$")
    else:
        print ("Nothing")

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$80"
}
wallet = "$1" 

wallet_int, items_purchase_int = convert_to_int (items_purchase, wallet)
result, money = afford_to_purchase(items_purchase_int, wallet_int)
print_res (result, money)





def calculation(a, b):
    addition = a+b
    extraction = a-b
    return addition, extraction

res = f"Addition is {calculation(40, 10)[0]}, extraction is {calculation(40, 10)[1]}"
print (res)
