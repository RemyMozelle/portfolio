const Menu = require('../models/Menu');
const Cards = require('../models/Cards');
const Skill = require('../models/Skill');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

class AppController {

  portfolio(req, res, next) {
    Menu.getMenu().then(menu => {
      Cards.getCardsAsTechnologies().then(cards => {
        Skill.getSkills().then(skill => {
          res.render('pages/index.ejs', {
            menu: menu,
            cards: cards,
            skill: skill
          })
        }).catch(err => console.error(err, 'getSkill'));
      }).catch(err => console.error(err, 'getCards'));
    }).catch(err => console.error(err, 'getMenu'));
  }

  email(req, res) {

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.USERG,
        pass: process.env.PASSG
      }
    });

    const mailOptions = {
      from: req.body.email,
      to: process.env.USERG,
      subject: req.body.subjet,
      text: req.body.message,
    }

    transporter.sendMail(mailOptions, (error, info) => {
      error ? console.error(error) : console.log(info, 'message bien envoyer');
    });

    res.redirect('/');
  }

  getCv(req, res) {

    const options = {
      root: './cv',
      headers: {
        'x-sent': true
      }
    };

    res.sendFile(req.params.cv, options, (err) => {
      err ? console.log(err) : console.log('bien télécharger');
    });
  }
}





module.exports = new AppController()