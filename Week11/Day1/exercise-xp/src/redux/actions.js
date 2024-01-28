
import { ADD, TOGGLE, DELETE } from './reducers';


export const addTodo = (id, text) => {
    return {
        type: ADD,
        id:id,
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
