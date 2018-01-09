const dotenv = require('dotenv').config()

class Db {
  constructor() {
    this.mysql = require('mysql');
  }

  getPool(prod = true) {

    if (prod == true) {
      const pool = this.mysql.createPool({
        connectionLimit: 10,
        host: process.env.HOST,
        user: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
      });

      return pool
    } else {
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