const dotenv = require('dotenv').config()
class Db {
  constructor() {
    this.mysql = require('mysql');
  }

  getPool(online = true) {

    if(online == true) {
      console.log('passe online');
      const pool = this.mysql.createPool(process.env.JAWSDB_URL);
      return pool;
    } 

    console.log('passe dev');
    const pool = this.mysql.createPool({
      connectionLimit: 10,
      host: 'localhost',
      database: 'portfolio',
      user: 'root',
      password: 'root',
    });

    return pool
  }
}

module.exports = new Db();