class Menu {
  constructor() {
    this.db = require('../../config/database/Db');
  }

  getMenu() {
    return new Promise((resolve, reject) => {
      this.db.getPool().getConnection((err, connection) => {
        if(err) throw err;
        connection.query('SELECT * FROM menus', (error, results, fields) => {
          connection.release();
          error ? reject(error) : resolve(results)
        });
      })
    });
  }
}

module.exports = new Menu();