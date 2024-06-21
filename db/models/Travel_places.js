// models/travel_place.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../dbInit');

const Travel_places = sequelize.define('Travel_places', {
  district_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  travel_place_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  travel_place_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  travel_place_type_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  travel_place_geolocation: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  travel_place_description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  travel_place_images_link: {
    type: DataTypes.JSON,
    allowNull: true
  },
  travel_place_best_season_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  travel_product_ids: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  tableName: 'Travel_places',
  underscored: true,
  timestamps: false
});

module.exports = Travel_places;
