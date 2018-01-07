const skill = require('../models/Skill');

class SkillController {

  showSkills(){
    skill.getSkills().then(sk => {

    })
  }
}

module.exports = new SkillController();