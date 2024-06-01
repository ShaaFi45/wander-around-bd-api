const { Sequelize } = require('sequelize');
const postgresql = global.constant.config.CREDENTIALS.POSTGRE_SQL;
let sequelize;

// Db initialization
async function initPSQL() {
  try {
    sequelize = new Sequelize(postgresql.DATABASE, postgresql.USER, postgresql.PASSWORD, {
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

    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync();
    console.log('DB synced successfully');
    // Insert default data to DB if needed

  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
}

function getDb() {
  if (sequelize) {
    return sequelize;
  }
  console.log('DB is not initialized');
  return null;
}

module.exports = {
  initPSQL,
  getDb
};
