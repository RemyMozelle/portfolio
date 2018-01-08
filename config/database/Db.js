const dotenv = require('dotenv');

class Db {
  constructor(){
    this.mysql = require('mysql');
  }

  getPool(){
    const pool = this.mysql.createPool({
      connectionLimit : 10,
      host : process.env.HOST,
      user : process.env.USERNAME,
      password : process.env.PASSWORD,
      database: process.env.DATABASE
    });

    return pool;
  }
}

module.exports = new Db();