const blogsService = require('../../services/v1/Blogs')




async function retrieveRecentBlogs(req, res) {
    try {
        await blogsService.fetchRecentPosts().then(data =>  res.json(data)).catch(err => err);

    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).send('Error retrieving user');
    }
}




module.exports = {

    retrieveRecentBlogs,

}
