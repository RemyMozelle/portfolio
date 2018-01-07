const express = require('express');
const route = express.Router();
const controllerSkill = require('../../app/controllers/controllerSkill');


route.get('/', controllerSkill.showSkills);


module.exports = route;