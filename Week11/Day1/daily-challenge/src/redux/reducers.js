
export const ADD = 'add_todo';
export const TOGGLE = 'toddle_todo';
export const DELETE  = 'delete_tod';


export const todoReducer = (state=[], action) => {
    switch (action.type){
        case ADD:
          return [...state, { id: Date.now(), date: action.date, text: action.text, isDone: false}];
        case TOGGLE:
          return state.map((todo) => todo.id === action.id? {...todo, isDone: !todo.isDone} : todo);
        case DELETE:
          return state.filter((todo) => todo.id !== action.id);
        default:
          return state;
      }
}










