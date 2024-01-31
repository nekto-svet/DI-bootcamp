import { createSlice } from "@reduxjs/toolkit";


const tasksSlice = createSlice({
    name:'tasks',
    initialState:{
        tasks:[],
        category: 'All',
        find_id:0,
    },
    reducers:{
        add_task: (state, action) => {
            state.tasks.push({id: state.tasks.length+1, text: action.payload.text, category: action.payload.category, isDone: false});
        },
        delete_task: (state, action) => {
           const taskID =  state.tasks.findIndex(task => task.id === action.payload);
           state.tasks.splice(taskID,1)
        },
        change_task: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            task.text = action.payload.text;
        },
        toggle_task: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            task.isDone = !task.isDone;
        },
        filter_tasks: (state, action) => {
            state.category = action.payload;
        },
        find_task: (state, action) => {
            state.find_id = action.payload;
        }
    }
})

export const {
    add_task,
    delete_task,
    change_task,
    toggle_task,
    filter_tasks,
    find_task,
} = tasksSlice.actions;

export default tasksSlice.reducer;