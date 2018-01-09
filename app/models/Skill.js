class Skill {
  constructor() {
    this.db = require('../../config/database/Db');
  }

  getSkills() {
    return new Promise((resolve, reject) => {
      this.db.getPool().getConnection((err, connection) => {
        if(err) throw err;
        connection.query('SELECT * FROM skills', (error, results, fields) => {
          error ? reject(error) : resolve(results)
          connection.release();
        });
      });
    });
  }
}

module.exports = new Skill();