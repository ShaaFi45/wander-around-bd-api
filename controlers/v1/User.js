const userService = require('../../services/v1/User')



async function retrieveUser(req, res) {
    try {
         await userService.fetchUserDetailsByUserId().then(data =>  res.json(data)).catch(err => err);
        // Log the user data to see what you're getting
        // Send the user data as the response
    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).send('Error retrieving user'); // Send an error response if fetching user data fails
    }
}



module.exports = {

    retrieveUser,

}
