const { QueryTypes } = require('sequelize');
const { getDb } = require('../../db/dbInit');
const { initializeUserModel } = require('../../db/models/Users');

async function fetchUserDetailsByUserId() {
  const sequelize = getDb();
  if (!sequelize) {
    throw new Error('Sequelize instance is not initialized.');
  }

  // Initialize the Users model
  const Users = initializeUserModel(sequelize);

  try {
    // SQL query to retrieve user details
    const query = `
      SELECT * FROM users
    `;

    // Execute the SQL query using Sequelize
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
      // Uncomment the next line to log the executed raw query
      // logging: console.log
    });
  } catch (e) {
    // Handle any errors that occur during the query execution
    console.log(e);
  }
}

module.exports = {
  fetchUserDetailsByUserId
};
