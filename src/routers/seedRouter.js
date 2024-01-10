const express = require('express');
const { seedUser } = require('../controler/seedControler');
const seedRouter = express.Router();

seedRouter.get('/users', seedUser);

module.exports = seedRouter;