// controllers/todoController.js
const todoHandler = require('../handlers/todoHandler');

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await todoHandler.getAllTodos();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    const todo = await todoHandler.getTodoById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = await todoHandler.createTodo(req.body);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const updatedTodo = await todoHandler.updateTodo(req.params.id, req.body);
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const deletedTodo = await todoHandler.deleteTodo(req.params.id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.json(deletedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
