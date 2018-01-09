const dotenv = require('dotenv').config()
class Db {
  constructor() {
    this.mysql = require('mysql');
  }
  getPool(prod = true) {
    if (prod == true) {
      console.log('PASSE en prod');
      const pool = this.mysql.createPool({
        connectionLimit: 10,
        host: process.env.HOSTP,
        user: process.env.USERNAMEP,
        password: process.env.PASSWORDP,
        database: process.env.DATABASEP
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