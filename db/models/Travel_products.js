// models/travel_product.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbInit');

const Travel_products = sequelize.define('Travel_products', {
  product_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  product_single_image: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Travel_products',
  underscored: true,
  timestamps: false
});

module.exports = Travel_products;
