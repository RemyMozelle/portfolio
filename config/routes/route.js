
const express = require('express');
const route = express.Router();
const appController = require('../../app/controllers/AppController');
const cards = require('../../app/models/Cards');

route.get('/', appController.portfolio);
route.post('/', appController.email);

options = {
  root: './cv',
  headers: {
    'x-sent': true
  }
}

route.get('/cv/:cv', (req, res)=>{
  res.sendFile(req.params.cv, options, (err) => {
    err ? console.log(err) : console.log('bien télécharger');
  })
})
module.exports = route;