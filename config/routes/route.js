const express = require('express');
const route = express.Router();
const appController = require('../../app/controllers/AppController');


route.get('/', appController.portfolio);


module.exports = route;