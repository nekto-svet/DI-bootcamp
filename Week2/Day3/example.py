sample_dict = { 
   "class":{ 
      "student":{ 
         "name":"Mike",
         "marks":{ 
            "physics":70,
            "history":80
         }
      }
   }
}
print(sample_dict['class']['student']['marks']['history'])


sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"
}

keys_to_remove = ["name", "salary"]
for k in keys_to_remove:
    del sample_dict[k]

print(sample_dict)

