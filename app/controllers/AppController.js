const Menu = require('../models/Menu');
const Cards = require('../models/Cards');
const Skill = require('../models/Skill');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config({ path: '' });

class AppController {

  portfolio(req, res, next) {
    Menu.getMenu().then(menu => {
      Cards.getCards().then(cards => {
        Skill.getSkills().then(skill => {
          res.render('pages/index.ejs', {
            menu: menu,
            cards: cards,
            skill: skill,
          });
        })
      });
    });
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
      error ? console.log(error) : console.log(info, 'message bien envoyer');
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