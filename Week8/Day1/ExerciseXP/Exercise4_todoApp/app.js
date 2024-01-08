// In app.js, import the TodoList class from the todo.js module.

// Create an instance of the TodoList class.

// Add a few tasks, mark some as complete, and list all tasks.

// Run app.js and verify that the todo list operations are working correctly.

import {TodoList} from './todo.js'

let newList = new TodoList;
newList.addTask('Wake up earlier');
newList.addTask('Try not to cry');
newList.addTask('Cry');
newList.markAsComplete('Cry');
newList.listAllTasks() ;