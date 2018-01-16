class Cards {
  constructor() {
    this.db = require('../../config/database/Db');
  }

  getCards() {
    return new Promise((resolve, reject) => {
      this.db.getPool().query('SELECT id, name, github, url, description, techno FROM cards', (error, results, fields) => {
        error ? reject(error) : resolve(results)
      });
    });
  }

  getTechno() {
    return new Promise((resolve, reject) => {
      this.db.getPool().query(`
        SELECT
          c.name,
          t.nameTechno
        FROM
          cards AS c
        INNER JOIN cards_has_technologies AS ct
        ON c.id = ct.cards_id
        INNER JOIN technologies AS t
        ON ct.technologies_id = t.id
        WHERE c.id = 1 || c.id = 4
      `, (error, results) => {
          error ? reject(error) : resolve(results)
        })
    });
  }
}

module.exports = new Cards();