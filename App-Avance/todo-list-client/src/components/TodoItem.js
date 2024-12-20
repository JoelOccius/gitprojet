// src/components/TodoItem.js
import React from 'react';
import axios from 'axios';

const TodoItem = ({ todo, fetchTodos }) => {
  const handleToggle = async () => {
    await axios.put(`http://localhost:3000/api/todos/${todo.id}`, {
      completed: !todo.completed,
    });
    fetchTodos();
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/api/todos/${todo.id}`);
    fetchTodos();
  };

  return (
    <div>
      <span
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
        }}
      >
        {todo.title}
      </span>
      <button onClick={handleToggle}>
        {todo.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
