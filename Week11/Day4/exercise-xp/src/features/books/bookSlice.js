import { createSlice } from "@reduxjs/toolkit";
import books from './books.json';

const bookSlice = createSlice({
    name:'books',
    initialState:[],
    reducers:{
        selectBook: (state, action) => {
            return books;
        },
        selectHorrorBooks: (state, action) => {
           return books.filter(book => book.genre === 'Horror');
        },
        selectFantasyBooks: (state, action) => {
            return books.filter(book => book.genre === 'Fantasy');
        },
        selectScienceFictionBooks: (state, action) => {
            return books.filter(book => book.genre === 'ScienceFiction');
        },
    }
})

export const {selectBook, selectHorrorBooks, selectFantasyBooks,selectScienceFictionBooks} = bookSlice.actions;
export default bookSlice.reducer;