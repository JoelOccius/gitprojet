// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todo_list', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
