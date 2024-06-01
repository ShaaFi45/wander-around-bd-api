let express = require('express');
let router = express.Router();
const UserController = require('../../../controlers/v1/User');


router.get('/', UserController.retrieveUser)


router.get('/me', (req, res) => {
    res.send('Hello World!');
})



module.exports = router;