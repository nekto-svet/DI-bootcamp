import {configureStore} from '@reduxjs/toolkit';
import usersReduser from '../features/users/usersSlice'
const store = configureStore({
    reducer: {
        allUsers: usersReduser,
    }
});

export default store;