// models/season.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbInit');

const Seasons = sequelize.define('Seasons', {
  season_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  season_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  season_image_link: {
    type: DataTypes.STRING,
    allowNull: true
  },
  season_start_time: {
    type: DataTypes.DATE,
    allowNull: true
  },
  season_end_time: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'Seasons',
  underscored: true,
  timestamps: false
});

module.exports = Seasons;
