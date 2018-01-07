class Skill {
  constructor() {
    this.db = require('../../config/database/Db');
  }

  getSkills(){
    return new Promise((resolve, reject) => {
      this.db.getPool().query('SELECT * FROM technologies', (error, results, fields) => {
        error ? reject(error) : resolve(results)
      });
    });
  }
}

module.exports = new Skill();