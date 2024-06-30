let express = require('express');
let router = express.Router();
const scrapeController = require('../../../controlers/v1/Scrape');


router.get('/distrcict-data-scaping-with-class', scrapeController.retrieveUser)


module.exports = router;