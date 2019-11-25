const express = require('express');
const router = express.Router();

//Handlers
const clockHandler = require('./clock/clockHandler');

//Router distribution
router.use('/clockIn', clockHandler.router);

module.exports = router;