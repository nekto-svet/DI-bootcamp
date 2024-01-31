import {configureStore} from '@reduxjs/toolkit';
import bookReduser from '../features/books/bookSlice'
const store = configureStore({
    reducer: {
        books: bookReduser,
    }
})

export default store;