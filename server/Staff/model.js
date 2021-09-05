const sql = require('../db-connection')
const Staff = (staff) => {
  this.staffid = staff.staffid
  this.merchantid = staff.merchantid
  this.user = staff.userid
  this.permissions = staff.permissions
}
Staff.getAll = (merchantid, result) => {
  //check if merchant exists
  sql.query(`SELECT * FROM merchant where merchantid=${merchantid}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    // if merchant exists get staff for that merchant
    sql.query(`SELECT * FROM staff where merchantid = ${merchantid}`, (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(null, err)
        return
      }
      console.log('staff: ', res)
      result(null, res)
    })
  })
}
Staff.create = (newStaff, result) => {
  //check staff is a user
  sql.query(`SELECT * FROM user where email = ${newStaff.email}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    } else if (!res) {
      console.log('this person does not have an account')
    }
    // if the user exists
  })
  sql.query(`INSERT INTO staff SET ?`, newStaff, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('staff: ', res)
    result(null, res)
  })
}
Staff.update = (email, Staff, result) => {
  sql.query(`UPDATE staff SET permissions = ${Staff.permissions}, `)
}

module.exports = Staff
