const mysql = require('mysql')
const dbConfig = require('./config')
//connect to database
const con = mysql.createConnection({
  host: dbConfig.mysql.HOST,
  user: dbConfig.mysql.USER,
  password: dbConfig.mysql.PASSWORD,
  database: dbConfig.mysql.DB,
})
//connect to db
con.connect(function (err) {
  if (err) throw err
  console.log('Connected!')
})
module.exports = con
