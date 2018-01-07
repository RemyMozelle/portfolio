class Db {
  constructor(){
    this.mysql = require('mysql');
  }

  getPool(){
    const pool = this.mysql.createPool({
      connectionLimit : 10,
      host : 'localhost',
      user : 'root',
      password : 'root',
      database: 'portfolio'
    });

    return pool;
  }
}

module.exports = new Db();