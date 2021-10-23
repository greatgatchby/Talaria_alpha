const db = require('../db-connection')
const User = db.user
const Vendor = db.vendor
const Merchant = db.merchant

exports.findOne = (req, res) => {
  User.findOne({ where: { userid: req.params.id } })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: 'user not found' })
      }
      res.send(data)
      return
    })
    .catch((err) => {
      if (err) {
        res.status(500).send({ message: err.message })
      }
    })
}

exports.update = (req, res) => {
  User.findOne({
    where: {
      consignmentid: req.body.consignmentid,
    },
  })
    .then((user) => {
      if (!user) {
        res.status(500).send({ message: 'no user found' })
      } else {
        User.update(req.body, { where: { uid: user.uid } })
        res.status(200).send('user updated')
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}

exports.findVendors = (req, res) => {
  Merchant.findOne({ where: { userid: req.params.uid } })
    .then((user) => {
      if (!user) {
        res.status(400).send({ message: 'merchant not found'})
      } else {
        Vendor.findAll({ where: { merchantid: user.merchantid } })
          .then((data) => {
            res.status(200).send(data)
          })
          .catch((err) => {
            res.status(500).send({ message: err.message })
          })
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
