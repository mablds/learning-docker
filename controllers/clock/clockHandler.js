const express = require('express');
const router = express.Router();

//Endpoint's importation
const clockIn = require('./clockIn');
const clockOut = require('./clockOut');

//Clock middlewares
const clickInValidation = require('../../middlewares/clock/clockInValidation');

//Endpoints & CRUD operations
router.post('/:id', clickInValidation, clockIn.byId);

exports.router = router;