const Travel_places = require('../../db/models/Travel_places');
const Sequelize = require('sequelize'); // Assuming Sequelize is installed

async function fetchRecentPosts() {
  const sequelize = Travel_places.sequelize;

  try {
    const rawQuery = `select * from "Travel_places"`; // Your raw query
    const results = await sequelize.query(rawQuery, {
       // Use destructuring for a single replacement
      type: Sequelize.QueryTypes.SELECT
    });
console.log(results)
    return results
  } catch (error) {
    console.error("Error executing raw query:", error);
    // Handle errors appropriately
  }
}
module.exports = {
    fetchRecentPosts
 };