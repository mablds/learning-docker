const express = require('express'),
    router = express.Router();

//Handlers
const appointment = require('./appointments/appointment');

router.use('/appointment', appointment);

module.exports = router;
