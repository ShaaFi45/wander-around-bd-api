// models/post.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbInit');

const Posts = sequelize.define('Posts', {
  travel_place_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  post_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  post_title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  post_body: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  post_publish_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  post_status: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Posts',
  underscored: true,
  timestamps: false
});

module.exports = Posts;
