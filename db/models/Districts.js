// models/district.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbInit');

const Districts = sequelize.define('Districts', {
  district_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  district_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  district_images_link: {
    type: DataTypes.JSON,
    allowNull: true
  },
  district_primary_description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  district_geolocation: {
    type: DataTypes.FLOAT,
    allowNull: true
  }
}, {
  tableName: 'Districts',
  underscored: true,
  timestamps: false
});

module.exports = Districts;
