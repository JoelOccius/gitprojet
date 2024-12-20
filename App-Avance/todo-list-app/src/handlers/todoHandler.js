// handlers/todoHandler.js
const Todo = require('../models');

exports.getAllTodos = async () => {
  return await Todo.findAll();
};

exports.getTodoById = async (id) => {
  return await Todo.findByPk(id);
};

exports.createTodo = async (todoData) => {
  return await Todo.create(todoData);
};

exports.updateTodo = async (id, todoData) => {
  const todo = await Todo.findByPk(id);
  if (!todo) {
    return null;
  }
  return await todo.update(todoData);
};

exports.deleteTodo = async (id) => {
  const todo = await Todo.findByPk(id);
  if (!todo) {
    return null;
  }
  await todo.destroy();
  return todo;
};
