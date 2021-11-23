const db = require('../db-connection')
const config = require('../config')
const User = db.user
const Vendor = db.vendor
const Merchant = db.merchant
const dateTime = require('./datetime')
const uid = require('uuid')

const Op = db.Sequelize.Op
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.signup = (req, res) => {
  if (req.body.userType === 'vendor') {
    User.create({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      userType: req.body.userType,
      createdAt: dateTime(),
      userid: uid.v4(),
    })
      .then(() => {
        User.findOne({
          raw: true,
          where: { email: req.body.email },
        })
          .then((user) => {
            Vendor.create({
              phone: req.body.phoneNumber,
              address: req.body.address,
              country: req.body.country,
              postcode: req.body.postcode,
              division: req.body.division,
              userid: user.userid,
            })
            res.status(200).send({ message: user.email + 'signed up successfully' })
          })
          .catch((err) => {
            res.status(500).send({ message: err.message })
          })
      })
      .catch((err) => {
        res.status(500).send({ message: err.message })
      })
  } else if (req.body.userType === 'merchant') {
    User.create({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      userType: req.body.userType,
      createdAt: dateTime(),
      userid: uid.v4(),
    })
      .then(() => {
        User.findOne({
          where: { email: req.body.email },
        }).then((user) => {
          Merchant.create({
            userid: user.userid,
          })
          res.status(200).send({ message: 'user ' + req.body.email + ' created'})
        })
      })
      .catch((err) => {
        res.status(500).send({ message: err.message })
      })
  }
}

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'User Not found.' })
      }

      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password)

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!',
        })
      }

      const token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 1800, // 30 minutes
      })
      res.status(200).send({
        id: user.userid,
        username: user.username,
        email: user.email,
        accessToken: token,
      })
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
