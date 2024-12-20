// src/components/TodoList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3000/api/todos');
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm fetchTodos={fetchTodos} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} fetchTodos={fetchTodos} />
      ))}
    </div>
  );
};

export default TodoList;
