const sql = require('mysql')

const User = function (user) {
  this.email = user.email
  this.firstname = user.firstname
  this.lastname = user.lastname
  this.password = user.password
  this.userType = user.userType
}
//create a new user using firebase to authenticate and logging user details in the user relation
User.create = (newUser, result) => {
  sql.query('INSERT INTO user Values = ?', newUser, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    console.log('created consignment: ', { userid: res.insertId, ...newUser })
    result(null, { userid: res.insertId, ...newUser })
  })
}
//Login
User.signin = (username, password, result) => {
  sql.query(`SELECT * FROM USER WHERE email=${username} AND password=${password}`, (err, res) => {
    if(err) {
      console.log(`error: `, err)
      result(err, null)
      return
    }
    result.loggedin = true
    result.username = username
  })
}
//Logout
//update user info in the relation
//update username and password in firebase
module.exports = User
