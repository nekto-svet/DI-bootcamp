/** API  Restfull API */
/** CRUD */
const express = require("express");

const app = express();

app.listen(3001, () => {
  console.log("run on port 3001");
});

app.use("/", express.static(__dirname + "/public"));
// app.use('/files', express.static(__dirname + "/files"));

/** 
app.get
app.post
app.put
app.delete
*/

const users = [
  { id: 1, name: "John", email: "jjj@gamail.com" },
  { id: 2, name: "Marry", email: "mmm@gamail.com" },
  { id: 3, name: "Anney", email: "aaa@gamail.com" },
];

app.get("/users", (request, response) => {
  response.json(users);
});

// params
app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const user = users.find((item) => item.id == id);
  if (!user) return res.status(200).json({ msg: "not found" });
  res.json(user);
});

// query
app.get("/search", (req, res) => {
  console.log(req.query);

  const { name } = req.query;

  const filteredUsers = users.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filteredUsers.length === 0) {
    return res.status(404).json({ msg: "user not found" });
  }

  res.send(filteredUsers);
});
