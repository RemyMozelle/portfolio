const dotenv = require('dotenv').config()
class Db {
  constructor() {
    this.mysql = require('mysql');
  }
  getPool(prod = false) {
    if (prod == true) {
      console.log('PASSE en prod');
      const pool = this.mysql.createPool({
        connectionLimit: 10,
        host: 'eu-cdbr-west-01.cleardb.com',
        user: 'b4141da59854d8',
        password: '2aa6c949',
        database: 'heroku_7f0570fe9eed28b',
        port: 3306
      });

      return pool
    } else {
      console.log('passe en dev');
      const pool = this.mysql.createPool({
        connectionLimit: 10,
        host: process.env.HOSTDEV,
        user: process.env.USERNAMEDEV,
        password: process.env.PASSWORDDEV,
        database: process.env.DATABASEDEV
      });

      return pool
    }
  }
}

module.exports = new Db();