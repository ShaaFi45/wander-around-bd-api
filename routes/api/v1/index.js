let express = require('express');
let router = express.Router();
let scrapeRouter = require('./Scrape')
let userRouter = require('./User')



router.use('/user', userRouter)
router.use('/scrape', scrapeRouter)



module.exports = router;