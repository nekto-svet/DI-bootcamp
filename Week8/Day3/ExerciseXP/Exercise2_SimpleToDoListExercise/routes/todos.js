import express from 'express';
export const router = express.Router();

import {
    getTodos,
    addTodos,
    updateTodo,
    deleteTodo,
} from '../controller/controller.js'

router.get('/', getTodos);

router.post('/', addTodos);

router.put('/:id', updateTodo);

router.delete('/:id', deleteTodo);
