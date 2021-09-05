const sql = require('../db-connection')
const Vendor = (vendor) => {
  this.vendorid = vendor.vendorid
  this.phone = vendor.phone
  this.address = vendor.address
  this.postcode = vendor.postcode
  this.division = vendor.division
  this.userid = vendor.userid
  this.merchantid = vendor.merchantid
}

Vendor.create = (newVendor, result) => {
  sql.query('INSERT INTO vendor set ?', newVendor, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    console.log('created vendor: ', { vendorid: res.insertId, ...newVendor })
    result(null, { vendorid: res.insertId, ...newVendor })
  })
}
Vendor.getAll = (merchantid, result) => {
  sql.query(`SELECT * FROM vendor where merchantid = ${merchantid}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    console.log('Vendors: ', res)
    result(null, res)
  })
}
module.exports = Vendor
