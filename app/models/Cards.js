class Cards {
  constructor() {
    this.db = require('../../config/database/Db');
  }

  getCards(){
    return new Promise((resolve, reject) => {
      this.db.getPool().query('SELECT * FROM cards', (error, results, fields) => {
        error ? reject(error) : resolve(results)
      });
    });
  }
}

module.exports = new Cards();