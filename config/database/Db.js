const dotenv = require('dotenv').config()
class Db {
  constructor() {
    this.mysql = require('mysql');
  }
  getPool() {

    const pool = this.mysql.createPool({
      connectionLimit: 10,
      host: process.env.HOSTP,
      user: process.env.USERNAMEP,
      password: process.env.PASSWORDP,
      database: process.env.DATABASEP,
    });

    return pool
  }
}

module.exports = new Db();