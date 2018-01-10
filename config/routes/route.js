
const express = require('express');
const route = express.Router();
const appController = require('../../app/controllers/AppController');
const cards = require('../../app/models/Cards');

/* route.get('/', appController.portfolio);
route.get('/cv/:cv', appController.getCv);
route.post('/', appController.email); */

route.get('/', (req, res) => {
  res.render('pages/index.ejs');
})

module.exports = route;