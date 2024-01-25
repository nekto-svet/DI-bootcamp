import { useReducer, useRef } from "react";

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const textRef = useRef();

  const handleAddTodo = () => {
    dispatch({ type: "ADD", text: textRef.current.value });
  };

  const removeTodo = (id) => {
    dispatch({ type: "REMOVE", id });
  };

  return (
    <>
      <input type="text" placeholder="Todo" ref={textRef}/>
      <button onClick={handleAddTodo}>Add Todo</button>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
}



export default TodoList;