const express = require('express');
const route = express.Router();
const appController = require('../../app/controllers/AppController');
const cards = require('../../app/models/Cards');

const db = require('../database/Db');

route.get('/', appController.portfolio);
route.get('/cv/:cv', appController.getCv);
route.post('/', appController.email);


module.exports = route;