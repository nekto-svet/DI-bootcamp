import express from 'express';
export const router = express.Router();

import {
    getTodos,
    getOneTodo,
    addTodos,
    updateTodo,
    deleteTodo,
} from '../controller/controller.js'

router.get('/', getTodos);

router.get('/:id', getOneTodo);

router.post('/', addTodos);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);


