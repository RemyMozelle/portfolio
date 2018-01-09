class Skill {
  constructor() {
    this.db = require('../../config/database/Db');
  }

  getSkills() {
    return new Promise((resolve, reject) => {
      this.db.getPool().getConnection((err, connection) => {
        connection.query('SELECT * FROM skills', (error, results, fields) => {
          connection.release();
          error ? reject(error) : resolve(results)
        });
      });
    });
  }
}

module.exports = new Skill();