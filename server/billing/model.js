const sql = require('../db-connection')
const Billing = function (billing) {
  this.userid = billing.userId
  this.billing_type = billing.billing_type
  this.street = billing.street
  this.city = billing.city
  this.postcode = billing.postcode
  this.country = billing.country
  this.paypal_email = billing.paypal_email
  this.sort_code = billing.sort_code
  this.account_number = billing.account_number
  this.iban = billing.iban
}
Billing.create = (userid, newBilling, result) => {
  //validate user
  sql.query(`SELECT * FROM user WHERE userid = ${userid}`, (err, res1) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    } else if (res1.length > 0) {
      console.log('user exists')
      sql.query(
        `INSERT INTO billing SET billing_type='${newBilling.billing_type}', userid = ${userid}`,
        (err, res) => {
          if (err) {
            console.log('error: ', err)
            result(err, null)
            return
          } else {
            console.log('created billing identity: ', { billingid: res.insertId, ...newBilling })
            result(null, { billingid: res.insertId, ...newBilling })
          }
        },
      )
      return
    } else {
      console.log('user non-existent')
      result(null, 'user cannot be found')
    }
  })
}
//TODO
Billing.getAll = (userId, result) => {
  sql.query(`SELECT * FROM billing where userid = ${userId}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('billing: ', res)
    result(null, res)
  })
}
Billing.update = (userId, billingid, data, result) => {
  sql.query(`UPDATE paypal SET ? WHERE billingid = ${billingid}`, data, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('Your details have been updated')
    result(null, 'The details for: ' + userId + ' have been updated')
  })
}
Billing.remove = (userid, billingid, result) => {
  sql.query(`DELETE FROM billing WHERE billingid = ?`, billingid, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    } else if (res.affectedRows > 0) {
      console.log('deleted billing identity: ', billingid)
      result(null, 'item deleted successfully')
    } else {
      console.log('not found')
      result(null, 'not found')
    }
  })
}
module.exports = Billing
