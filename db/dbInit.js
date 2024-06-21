const  Sequelize  = require('sequelize');
const postgresql = global.constant.config.CREDENTIALS.POSTGRE_SQL;
// let sequelize;


    let sequelize = new Sequelize(postgresql.DATABASE, postgresql.USER, postgresql.PASSWORD, {
      host: postgresql.HOST,
      port: 5432,
      dialect: postgresql.DIALECT,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Set to true if you have a valid SSL certificate
        },
      },
      logging: false, // Optional: Disable logging
    });

module.exports = sequelize
