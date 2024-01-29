import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
export const todosSlice = createSlice({
    name:'todos',
    initialState,
    reducers: {
        add_todo:(state, action) => {
            state.push({id: Date.now(), date: action.payload.date, text: action.payload.text, isDone: false});
        },
        toggle_todo:(state, action) => {
            return state.map((todo) => todo.id === action.payload.id? {...todo, isDone: !todo.isDone} : todo);
        },
        delete_todo:(state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },    
    },
});

export const {add_todo, toggle_todo, delete_todo,} = todosSlice.actions;
export default todosSlice.reducer;