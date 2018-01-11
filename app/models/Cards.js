class Cards {
  constructor() {
    this.db = require('../../config/database/Db');
  }

  getCards() {
    return new Promise((resolve, reject) => {
      this.db.getPool().query('SELECT name, github, url, description, techno FROM cards', (error, results, fields) => {
        error ? reject(error) : resolve(results)
      });
    });
  }

  /* getTechnologies() {
    return new Promise((resolve, reject) => {
      this.db.getPool().getConnection((err, connection) => {
        if(err) throw err;
        connection.query(`
        SELECT 
          c.name,
          t.nameTechno
        FROM 
          cards_has_technologies AS ct  
        INNER JOIN 
          cards AS c
        ON
          ct.cards_id = c.id
        INNER JOIN
          technologies AS t
        ON
          ct.technologies_id = t.id
        `, (error, results, fields) => {
          error ? reject(error) : resolve(results)
          connection.release();
        });
      })
    });
  }*/
}

module.exports = new Cards();