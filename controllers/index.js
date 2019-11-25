const express = require('express');
const router = express.Router();

//Handlers
const clockHandler = require('./clock/clockHandler');

//Import general Middlewares
const logger = require('../middlewares/logger');

//Set general Middlewares
router.use(logger);

//Router distribution
router.use('/clockIn', clockHandler.router);

module.exports = router;