// src/route/routes/todoRoutes.js
const express = require('express');
const router = express.Router();

router.post('/todos', (req, res) => {
  const newTodo = req.body;
  res.status(201).json({
    message: 'Todo created successfully',
    todo: newTodo
  });
});

module.exports = router;
