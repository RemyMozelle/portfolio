const express = require('express');
const route = express.Router();
const appController = require('../../app/controllers/AppController');
const cards = require('../../app/models/Cards');

route.get('/', appController.portfolio);

module.exports = route;