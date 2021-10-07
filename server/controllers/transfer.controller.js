const db = require('../db-connection')
const config = require('../config')
const User = db.user
const Transfer = db.transfer
const Merchant = db.merchant
const Vendor = db.vendor
const Billing = db.billing
const dateTime = require('./datetime')

exports.create = (req, res) => {
  //find sender billing
  Billing.findOne({ where: { userid: req.body.userid } }).then((billing) => {
    const sender = billing
    Billing.findOne({
      where: { userid: req.body.recipient },
    }).then((recipient) => {
      const recipient_billing = recipient
      Transfer.create({
        consignmentid: req.body.consignmentid,
        sender_billing_id: sender,
        recipient_billing_id: recipient_billing,
        createdAt: dateTime,
      })
    })
  })
}

exports.send = (req, res) => {

}

exports.update = (req,res) => {

}

exports.delete = (req,res) =>{

}
