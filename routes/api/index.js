const express = require('express');
const router = express.Router();
var versionOne = require('./v1/index')

// Api versioning managed here
router.use('/v1', versionOne)


module.exports = router;