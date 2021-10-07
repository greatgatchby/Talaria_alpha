const db = require('../db-connection')
const config = require('../config')
const Billing = db.billing
const Bacs = db.bacs
const Iban = db.iban
const User = db.user
const dateTime = require('./datetime')

exports.create = (req, res) => {
  User.findOne({
    where: {
      uid: req.body.uid,
    },
  })
    .then((user) => {
      if (!user) {
        res.status(404).send('user not found')
      } else {
        Billing.create({
          billing_type: req.body.billing_type,
          userid: req.body.userid,
        }).then((billing) => {
          if (req.body.billing_type === 'bacs') {
            Bacs.create({
              street: req.body.street,
              city: req.body.city,
              country: req.body.country,
              postcode: req.body.postcode,
              sort_code: req.body.sort_code,
              account_number: req.body.account_number,
              billingid: billing.id,
            })
          } else if (req.body.billing_type === 'iban') {
            Iban.create({
              billingid: billing.id,
              iban: req.body.iban,
            })
          }
          res.status(200).send('billing created successfully')
        })
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}

exports.getAll = (req, res) => {
  Billing.findAll({ where: { userid: req.body.uid } })
}

exports.update = (req, res) => {
  Billing.findOne({
    where: {
      billingid: req.body.billingid,
    },
  })
    .then((billing) => {
      if (billing.billing_type === 'bacs') {
        Bacs.update(
          {
            street: req.body.street,
            city: req.body.city,
            country: req.body.country,
            postcode: req.body.postcode,
            sort_code: req.body.sort_code,
            account_number: req.body.account_number,
          },
          {
            where: { billingid: billing.id },
          },
        )
      } else if (billing.billing_type === 'iban') {
        Iban.update(
          {
            iban: req.body.iban,
          },
          {
            where: {
              where: { billingid: billing.id },
            },
          },
        )
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}

exports.delete = (req, res) => {
  Billing.findOne({
    where: { billingid: req.body.billingid },
  })
    .then((billing) => {
      Billing.destroy({ where: { billingid: billing.billingid } })
      if (billing.billing_type === 'bacs') {
        Bacs.destroy({ where: { billingid: billing.billingid } })
      } else if (billing.billing_type === 'iban') {
        Iban.destroy({ where: { billingid: billing.billingid } })
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
