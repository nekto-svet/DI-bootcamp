// Create A Task Management API With Express.Js And JSON File Storage

// 2. Implement the following routes using express.Router:

// GET /tasks: Retrieve a list of all tasks from a JSON file.
// GET /tasks/:id: Retrieve a specific task by ID from the JSON file.
// POST /tasks: Create a new task and store it in the JSON file.
// PUT /tasks/:id: Update a task by ID in the JSON file.
// DELETE /tasks/:id: Delete a task by ID from the JSON file.

// 3. Create a JSON file (e.g., tasks.json) to store task data. Initialize it with an empty array [].
// 4. Use appropriate validation to ensure the user provides necessary data when creating or updating tasks.
// 5. Implement error handling for file read/write operations and route validation.
// 6. Test your API using tools like Postman or curl.


//READ ME
// config/models.js - file with fs functions read and write, that connect with tasks.json file
// 

import express from 'express';
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

import {router} from './routes/todos.js'
app.use('/todo', router);

app.listen(3000, () => {
    console.log('Server is running on 3000 port')
})
