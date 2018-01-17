class Cards {
  constructor() {
    this.db = require('../../config/database/Db');
  }

  getCardsAsTechnologies() {
    return new Promise((resolve, reject) => {
      this.db.getPool().query(`
        SELECT c.id, c.name, c.url, c.github, c.description,
        GROUP_CONCAT(t.nameTechno) AS technologies,
        GROUP_CONCAT(t.color) AS color
        FROM cards AS c
        INNER JOIN cards_has_technologies AS ct
        ON c.id = ct.cards_id
        INNER JOIN technologies AS t
        ON ct.technologies_id = t.id
        GROUP BY c.id, c.name, c.url, c.github, c.description
        ORDER BY c.id, c.name, c.url, c.github, c.description
      `, (err, result) => {
        err ? reject(err) : resolve(result);
      })
    });
  }
}

module.exports = new Cards();