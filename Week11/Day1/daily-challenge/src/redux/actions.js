
import { ADD, TOGGLE, DELETE } from './reducers';


export const addTodo = (date, text) => {    
    return {
        type: ADD,
        date:date,
        text:text,
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE,
        id:id,
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE,
        id:id,
    }
}



