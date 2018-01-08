const Menu = require('../models/Menu');
const Cards = require('../models/Cards');
const Skill = require('../models/Skill');

class AppController {

  portfolio(req, res, next) {
    Menu.getMenu().then(menu => {
      Cards.getCards().then(cards => {
        Cards.getTechnologies().then(techno =>{
          Skill.getSkills().then(skill => {
            res.render('pages/index.ejs', {
              menu: menu,
              cards: cards,
              techno: techno,
              skill: skill,
            });
        })
        })
      });
    });
  }


  /* portfolio(req, res, next) {
    menu.getMenu().then(menu => {
      cards.getCards().then(cards => {
        skill.getSkills().then(skill => {
          res.render('pages/index.ejs', {
            menu: menu,
            cards: cards,
            skill: skill
          });
        });
      });
    });
  } */
}

module.exports = new AppController()