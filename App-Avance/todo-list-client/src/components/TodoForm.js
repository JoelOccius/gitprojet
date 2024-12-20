// src/components/TodoForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TodoForm = ({ fetchTodos }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    await axios.post('http://localhost:3000/api/todos', { title });
    setTitle('');
    fetchTodos();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
