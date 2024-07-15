let express = require('express');
let router = express.Router();
let scrapeRouter = require('./Scrape')
let userRouter = require('./User')
let blogsRouter = require('./Blogs') // same as posts



router.use('/user', userRouter)
router.use('/scrape', scrapeRouter)
router.use('/blogs', blogsRouter)




module.exports = router;