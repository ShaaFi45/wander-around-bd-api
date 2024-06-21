// models/transportation.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbInit');

const Transportations = sequelize.define('Transportations', {
  district_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  transportation_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  transportation_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  transportation_price_now: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  transportation_availability_today: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'Transportations',
  underscored: true,
  timestamps: false
});

module.exports = Transportations;
