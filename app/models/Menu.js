class Menu {
  constructor() {
    this.db = require('../../config/database/Db');
  }

  getMenu() {
    return new Promise((resolve, reject) => {
      this.db.getPool().query('SELECT name, url FROM menus', (error, results, fields) => {
        error ? reject(error) : resolve(results)
      });
    });
  }
}

module.exports = new Menu();