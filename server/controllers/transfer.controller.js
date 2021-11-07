const db = require('../db-connection')
const config = require('../config')
const User = db.user
const Transfer = db.transfer
const Merchant = db.merchant
const Vendor = db.vendor
const Billing = db.billing
const Bacs = db.bacs
const Paypal = db.paypal
const IBAN = db.iban
const dateTime = require('./datetime')
const plaidClient = require('../db-connection')
//TODO create a plaid recipient and lig the transfer in transfers table
exports.create = (req, res) => {
  //find sender billing
  Billing.findOne({ where: { userid: req.body.userid } })
    .then((billing) => {
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
        res.send('payment has been initiated and will be completed soon')
      })
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
//TODO get all transfers
exports.getAll = (req, res) => {
  Transfer.findAll({ where: { merchantid: req.body.merchantid } })
}
//TODO create a payment link token using plaid api

//sender will always be a merchant and recipient will always be a vendor
exports.initiate = (req, res) => {
}

exports.delete = (req, res) => {}
