import {books} from '../config/booksDB.js';

export const getAllBooks = (req, res) => {
    res.json(books);
};

export const addBook = (req, res) => {
    let newBook = {...req.body, id:books.length+1};
    books.push(newBook);
    res.status(201).json(books);
};

export const updateBook = (req, res) => {
    let bookInd = books.findIndex(item => item.id == req.params.id);
    if (bookInd == -1) return res.sendStatus(404);
    books[bookInd] = {...books[bookInd], ...req.body};
    res.status(201).json(books);
};

export const deleteBook = (req, res) => {
    console.log(req.params.id)
    let bookInd = books.findIndex(item => item.id == req.params.id);
    console.log(bookInd)
    if (bookInd == -1) return res.sendStatus(404);
    books.splice(books[bookInd], 1);
    console.log(books)
    res.json(books);
};

