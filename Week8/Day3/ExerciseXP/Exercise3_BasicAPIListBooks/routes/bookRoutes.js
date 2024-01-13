import express from 'express';
export const router_books = express.Router();

import {
    getAllBooks,
    addBook,
    updateBook,
    deleteBook,
} from '../controller/controller.js'

router_books.get('/', getAllBooks);

router_books.post('/', addBook);

router_books.put('/:id', updateBook);

router_books.delete('/:id', deleteBook);
