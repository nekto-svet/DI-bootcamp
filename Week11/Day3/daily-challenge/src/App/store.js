import {configureStore} from '@reduxjs/toolkit';
import counterReduser from '../features/counter/counterSlice';

const store = configureStore ({
    reducer: {
        counter : counterReduser
    },
});

export default store;