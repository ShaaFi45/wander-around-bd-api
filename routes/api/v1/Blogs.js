let express = require('express');
let router = express.Router();
const blogsController = require('../../../controlers/v1/Blogs');


router.get('/recent-blogs', blogsController.retrieveRecentBlogs)


module.exports = router;