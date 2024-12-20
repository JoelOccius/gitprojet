// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const models = require('./models/index.js');



const Todo = sequelize.define('Todo', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

sequelize.sync();

module.exports = Todo;
