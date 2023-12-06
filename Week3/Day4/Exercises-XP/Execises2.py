# 🌟 Exercise 2: Working With JSON

import json
sampleJson = { 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}

sampleJson["company"]["employee"]["payable"]["salary"]
sampleJson["company"]["employee"]["birth_date"] = "24.03.1989"

json_file = 'sample.json'
with open(json_file, 'w') as file_obj:
    json.dump(sampleJson, file_obj)