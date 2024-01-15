import {read, write,} from '../config/models.js'

export const getTodos = (req, res) => {
    read()
    .then(todos => {
        res.json(todos);
    })
    .catch(err =>{
        console.log(err);
    })
};


export const getOneTodo = (req, res) => {
    read()
    .then(todos => {
        let todo = todos.find(item => item.id == req.params.id);
        res.json(todo);
    })
    .catch(err => {
        console.log(err);
    });
    
};

export const addTodos = (req, res) => {
    read()
    .then(todos => {
        let newTodo = {...req.body, isDone: false, id:todos.length+1}
        todos.push(newTodo);
        write(todos);
        res.json(newTodo);
    })
    .catch(err => {
        console.log(err);
    });
    
};


export const updateTodo = (req, res) => {
    read()
    .then(todos => {
        let todoInd = todos.findIndex(item => item.id == req.params.id);
        todos[todoInd].isDone = true;
        write(todos);
        res.json(todos[todoInd]);
    })
    .catch(err =>{
        console.log(err);
    })
};

export const deleteTodo = (req, res) => {
    read()
    .then(todos => {
        let todoInd = todos.findIndex(item => item.id == req.params.id);
        todos.splice(todoInd,1);
        write(todos);
        res.json(todos);
    })
    .catch(err =>{
        console.log(err);
    })
};


