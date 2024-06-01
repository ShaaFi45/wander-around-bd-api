const { DataTypes } = require('sequelize');
let sequelize = require('../dbInit').getDb();

function initializeUserModel(sequelize) {
  const Users = sequelize.define('users', {
    id: {
      type: DataTypes.BIGINT,
      unique: true,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.STRING,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    auth_type: {
      type: DataTypes.SMALLINT,
    },
    auth_data: {
      type: DataTypes.STRING,
    },
    agent: {
      type: DataTypes.STRING,
    },
    push_id: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.SMALLINT
    },
    workspace_id: {
      type: DataTypes.BIGINT
    },
    online_status: {
      type: DataTypes.SMALLINT
    },
    app_version: {
      type: DataTypes.STRING
    },
  }, {
    underscored: true,
    indexes: [
      {
        unique: true,
        fields: ['email']
      }, {
        unique: true,
        fields: ['id']
      }, {
        unique: true,
        fields: ['user_id']
      }, {
        unique: true,
        fields: ['phone']
      }
    ]
  });

  return Users;
}

module.exports = {
  initializeUserModel
};
