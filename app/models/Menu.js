class Menu {
  constructor() {
    this.db = require('../../config/database/Db');
  }

  getMenu() {
    return new Promise((resolve, reject) => {
      this.db.getPool().getConnection((err, connection) => {
        if(err) throw err;
        console.log(connection);
        connection.query('SELECT * FROM menus', (error, results, fields) => {
          error ? reject(error) : resolve(results)
          connection.release();
        });
      })
    });
  }
}

module.exports = new Menu();