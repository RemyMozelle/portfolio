const express = require('express');
const route = express.Router();
const appController = require('../../app/controllers/AppController');
const cards = require('../../app/models/Cards');

const db = require('../database/Db');

/* route.get('/', appController.portfolio);
route.get('/cv/:cv', appController.getCv);
route.post('/', appController.email); */

/* route.get('/', appController.portfolio); */

route.get('/', (req, res) => {
  db.getPool().getConnection((err, connection) => {
    connection.query('SELECT * FROM test', (error, results) => {
      res.send(results)
    })
  })
})

module.exports = route;