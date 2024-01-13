import {todos} from '../config/tasks.js'

export const getTodos = (req, res) => {
    res.json(todos)
};

export const addTodos = (req, res) => {
    let newTodo = {...req.body, isDone: false, id:todos.length+1}
    todos.push(newTodo);
    res.status(201).json(todos);
};

export const updateTodo = (req, res) => {
    let todo = todos.find(item => item.id == req.params.id);
    if (!todo) return res.sendStatus(404);
    todo.isDone = true;
    res.status(201).json(todos);
};

export const deleteTodo = (req, res) => {
    let todoInd = todos.findIndex(item => item.id == req.params.id);
    if (todoInd == -1) return res.sendStatus(404);
    todos.splice(todoInd, 1);
    res.json(todos);
};

