let express = require('express');
let router = express.Router();
let userRouter = require('./User')


router.use('/user', userRouter)


module.exports = router;