import React from "react";

function TodoItems({ todo, toggleComplete, deleteTodo }) {
  return (
    <li style={{ margin: "10px 0" }}>
      <span
        onClick={() => toggleComplete(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: "10px",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </li>
  );
}

export default TodoItems;
