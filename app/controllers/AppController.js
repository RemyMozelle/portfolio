const menu  = require('../models/Menu'); 
const cards = require('../models/Cards');
const skill = require('../models/Skill');

class AppController {

  portfolio(req, res, next){
    menu.getMenu().then(menu => {
      cards.getCards().then(cards => {
        skill.getSkills().then(skill => {
          res.render('pages/index.ejs', {
            menu : menu,
            cards : cards,
            skill : skill
          });
        })
      })
    })
  }

}

module.exports = new AppController()