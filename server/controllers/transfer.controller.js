const db = require('../db-connection')
const Transfer = db.transfer
const Billing = db.billing
const dateTime = require('./datetime')
//TODO create a plaid recipient and lig the transfer in transfers table
exports.create = (req, res) => {}
//TODO get all transfers
exports.getAll = (req, res) => {
  Billing.findAll()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
//TODO create a payment link token using plaid api

//sender will always be a merchant and recipient will always be a vendor
exports.initiate = (req, res) => {}

exports.delete = (req, res) => {}
