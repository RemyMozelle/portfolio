const dotenv = require('dotenv').config()
class Db {
  constructor() {
    this.mysql = require('mysql');
  }

  getPool(online = false) {
    if(online == true) {
      const pool = this.mysql.createPool(process.env.JAWSDB_URL);
    }

    const pool = this.mysql.createPool({
      connectionLimit: 100,
      host: 'localhost',
      database: 'portfolio',
      user: 'root',
      password: 'root',
    });

    return pool
  }
}

module.exports = new Db();