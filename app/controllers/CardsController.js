const Cards = require('../models/Cards');

class CardsController {

  showCards(req, res, next){
    Cards.getCards().then(cards => {
      res.send(cards);
    });
  }
}

module.exports = new CardsController();