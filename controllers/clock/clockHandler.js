const express = require('express');
const router = express.Router();

//Endpoint's importation
const clockIn = require('./clockIn');
const clockOut = require('./clockOut');

//Endpoints & CRUD operations
router.post('/:id', clockIn.byId);

exports.router = router;