from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import psycopg2
import os
from dotenv import load_dotenv

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




# PARSER
# Set up the webdriver
driver = webdriver.Chrome()

# Navigate to the URL with AngularJS content
# url = "https://www.gov.il/en/departments/dynamiccollectors/travel-warnings-nsc?skip=0"
# driver.get(url)


# # Wait for AngularJS to load (replace 'ng-app' with an appropriate AngularJS attribute)

# wait.until(EC.presence_of_element_located((By.XPATH, '//*[@ng-app]')), timeout=50)


# for some elements
# list_countries = []
# for page in range (0, 100, 10):
#     for element in range (1,11):
#         try:
#             url = f"https://www.gov.il/en/departments/dynamiccollectors/travel-warnings-nsc?skip={page}"
#             driver.get(url)
#             xpath = f'//*[@id="content"]/div[2]/div[2]/div[3]/ul/li[{element}]/div/div/div[1]/div[2]'
#             element = wait.until(EC.presence_of_element_located((By.XPATH, xpath)), timeout=50)
#             text_content = element.text
#             list_countries.append(text_content)
#             # print(text_content)
#         except:
#             pass
url = "https://www.gov.il/en/departments/dynamiccollectors/travel-warnings-nsc?skip=0"
driver.get(url)
wait = WebDriverWait(driver, 10)
list_countries = []

for element in range (1,11):
    try:
        xpath = f'//*[@id="content"]/div[2]/div[2]/div[3]/ul/li[{element}]/div/div/div[1]/div[2]'
        element = wait.until(EC.presence_of_element_located((By.XPATH, xpath)), timeout=50)
        text_content = element.text
        list_countries.append(text_content)
        # print(text_content)
    except:
        pass

print(list_countries)


# Close the webdriver
driver.quit()



# Give xpaath of element
# all text about contry
# element_xpath = '//*[@id="content"]/div[2]/div[2]/div[3]/ul/li[2]/div/div/div[1]/div[2]'
#                //*[@id="content"]/div[2]/div[2]/div[3]/ul/li[3]/div/div/div[1]/div[2]
#                //*[@id="content"]/div[2]/div[2]/div[3]/ul/li[4]/div/div/div[1]/div[2]
#                //*[@id="content"]/div[2]/div[2]/div[3]/ul/li[10]/div/div/div[1]/div[2]
#                //*[@id="content"]/div[2]/div[2]/div[3]/ul/li[5]/div/div/div[1]/div[2] 
# 

#  xpath for contry name
# //*[@id="MultiItemscountry-WraperSpan"]/span/span



# Wait for the specific element to be present
# element = wait.until(EC.presence_of_element_located((By.XPATH, element_xpath)))

# Extract text content from the element
# text_content = element.text
# print("Text Content:", text_content)


# # INSERTING
# cur = connection.cursor()

# # cur.execute('''
# #     CREATE TABLE countries(
# # 	id SERIAL PRIMARY KEY,
# #     name VARCHAR(100),
# # 	threat_level VARCHAR(10),
# #     recomendations VARCHAR,
# #     area_under_threat VARCHAR,
# #     details TEXT
# #     )''')

# for country in list_countries:
#     current_country = country.split('\n')
#     name = current_country[1]
#     threat_level = current_country[3]
#     recomendations = current_country[5]
#     area_under_threat = current_country[7]
#     details = current_country[9]
#     insert_query = 'INSERT INTO treat_level (name, threat_level, recomendations, area_under_threat, details) VALUES (%s, %s, %s, %s, %s)'
#     data_to_insert = (name, threat_level, recomendations, area_under_threat, details)
#     cur.execute (insert_query, data_to_insert)
#     connection.commit()

# cur.close()
# connection.close()
# #






# # https://www.gov.il/en/departments/dynamiccollectors/travel-warnings-nsc?skip=0
# 4  //*[@id="content"]/div[2]/div[2]/div[3]/ul/li[4]/div/div/div[1]/div[2]
# 7  //*[@id="content"]/div[2]/div[2]/div[3]/ul/li[7]/div/div/div[1]/div[2]
# 
# https://www.gov.il/en/departments/dynamiccollectors/travel-warnings-nsc?skip=10
# 1  //*[@id="content"]/div[2]/div[2]/div[3]/ul/li[1]/div/div/div[1]/div[2]
# 4  //*[@id="content"]/div[2]/div[2]/div[3]/ul/li[4]/div/div/div[1]/div[2]

# https://www.gov.il/en/departments/dynamiccollectors/travel-warnings-nsc?skip=190
# 1  //*[@id="content"]/div[2]/div[2]/div[3]/ul/li[1]/div/div/div[1]/div[2]