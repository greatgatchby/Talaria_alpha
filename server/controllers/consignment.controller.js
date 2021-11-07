const db = require('../db-connection')
const config = require('../config')
const Consignment = db.consignment
const User = db.user
const dateTime = require('./datetime')
exports.create = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        res.status(404).send('user not found')
      } else {
        Consignment.create({
          userid: req.body.userid,
          item_name: req.body.item_name,
          item_size: req.body.item_size,
          asking_price: req.body.asking_price,
          policyid: req.body.policyid,
          date_consigned: dateTime(),
          date_sold: req.body.date_sold,
          status_code: req.body.status_code,
          venue: req.body.venue,
          merchantid: req.body.merchantid,
          item_unit: req.body.item_unit,
        }).catch((err) => {
          if (err) res.status(500).send({ message: err.message })
        })
      }
    })
    .catch((err) => {
      if (err) res.status(500).send({ message: err.message })
    })
}

exports.confirm = (req, res) => {
  Consignment.findOne({
    where: {
      consignmentid: req.body.consignmentid,
    },
  }).then((consignment) => {
    if (!consignment) {
      res.status(404).send('consignment not found')
    } else {
      Consignment.update(
        { status_code: 'confirmed' },
        {
          where: { consignmentid: req.body.consignmentid },
        },
      )
      res.status(200).send('consignment ' + req.body.consignmentid + ' updated')
    }
  })
}
exports.reject = (req, res) => {
  Consignment.findOne({
    where: {
      consignmentid: req.body.consignmentid,
    },
  }).then((consignment) => {
    if (!consignment) {
      res.status(404).send('consignment not found')
    } else {
      Consignment.update(
        { status_code: 'rejected' },
        {
          where: { consignmentid: req.body.consignmentid },
        },
      )
      res.status(200).send('consignment ' + req.body.consignmentid + ' updated')
    }
  })
}
exports.authenticate = (req, res) => {
  Consignment.findOne({
    where: {
      consignmentid: req.body.consignmentid,
    },
  }).then((consignment) => {
    if (!consignment) {
      res.status(404).send('consignment not found')
    } else {
      Consignment.update(
        { status_code: 'authenticated' },
        {
          where: { consignmentid: req.body.consignmentid },
        },
      )
      res.status(200).send('consignment ' + req.body.consignmentid + ' updated')
    }
  })
}

exports.getAll = (req, res) => {
  Consignment.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving tutorials.',
      })
    })
}
