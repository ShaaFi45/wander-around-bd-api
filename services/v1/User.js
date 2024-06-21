const Users = require('../../db/models/Users');
const Sequelize = require('sequelize'); // Assuming Sequelize is installed

async function fetchUserDetailsByUserId() {
  const sequelize = Users.sequelize;

  try {
    const rawQuery = `SELECT * FROM users `; // Your raw query
    const [results, metadata] = await sequelize.query(rawQuery, {
       // Use destructuring for a single replacement
      type: Sequelize.QueryTypes.SELECT
    });

    return results
  } catch (error) {
    console.error("Error executing raw query:", error);
    // Handle errors appropriately
  }
}
module.exports = {
  fetchUserDetailsByUserId
 };