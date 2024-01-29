import {configureStore} from '@reduxjs/toolkit';
import todosReducer from '../components/todoSlice';


export default configureStore ({
    reducer: {
        todos : todosReducer
    },
});