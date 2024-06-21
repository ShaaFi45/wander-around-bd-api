// models/travel_product_detail.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbInit');

const Travel_product_details = sequelize.define('Travel_product_details', {
  product_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  product_details: {
    type: DataTypes.STRING,
    allowNull: true
  },
  product_more_image: {
    type: DataTypes.STRING,
    allowNull: true
  },
  product_price: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  product_category: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Travel_products_details',
  underscored: true,
  timestamps: false
});

module.exports = Travel_product_details;
