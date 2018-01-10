const dotenv = require('dotenv').config()
class Db {
  constructor() {
    this.mysql = require('mysql');
  }
  getPool() {

    const pool = this.mysql.createPool(process.env.JAWSDB_URL)

    return pool
  }
}

module.exports = new Db();