const skill = require('../models/Skill');

class SkillController {

  showSkills(){
    skill.getSkills().then(sk => {
      res.send(sk)
    })
  }
}

module.exports = new SkillController();