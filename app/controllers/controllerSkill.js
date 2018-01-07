const skill = require('../models/Skill');

class ControllerSkill {

  showSkills(req, res){
    skill.getSkills().then(sk => {
      res.render('pages/index.ejs')
    })
  }
}

module.exports = new ControllerSkill(skill);