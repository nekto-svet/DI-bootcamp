import {configureStore} from '@reduxjs/toolkit';
import taskReduser from '../features/tasks/taskSlice'
const store = configureStore({
    reducer: {
        tasks: taskReduser,
    }
})

export default store;