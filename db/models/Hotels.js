// models/hotel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbInit');

const Hotels = sequelize.define('Hotels', {
  travel_place_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  hotel_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hotel_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  hotel_geolocation: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  hotel_description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  hotel_star: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'Hotels',
  underscored: true,
  timestamps: false
});

module.exports = Hotels;
