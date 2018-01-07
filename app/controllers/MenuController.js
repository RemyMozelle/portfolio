const Menu = require('../models/Menu');

class MenuController {

  showMenu(req, res, next){
    Menu.getMenu().then(menu => {
      res.send(menu)
    })
  }
}

module.exports = new MenuController();