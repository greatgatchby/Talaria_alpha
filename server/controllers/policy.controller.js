const db = require('../db-connection')
const config = require('../config')
const Policy = db.policy
const User = db.user
const dateTime = require('./datetime')

exports.create = (req, res) => {
  User.findOne({ where: { uid: req.body.uid } })
    .then((user) => {
      Policy.create({
        uid: user.uid,
        policyTerms: req.body.policyTerms,
        policyRate: req.body.policyRate,
        policyName: req.body.policyName,
        createdAt: dateTime(),
      })
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
exports.update = (req, res) => {
  Policy.update(
    {
      policyTerms: req.body.policyTerms,
      policyRate: req.body.policyRate,
      policyName: req.body.policyName,
      updatedAt: dateTime(),
    },
    {
      where: { id: req.body.id },
    },
  ).catch((err) => {
    res.status(500).send({ message: err.message })
  })
}

exports.getAll = (req, res) => {
  Policy.findAll({ where: { uid: req.body.uid } }).catch((err) => {
    res.status(500).send({ message: err.message })
  })
}

exports.delete = (req, res) => {
  Policy.delete({
    where: {
      policyid: req.body.policyid,
    },
  }).catch((err) => {
    res.status(500).send({ message: err.message })
  })
}
