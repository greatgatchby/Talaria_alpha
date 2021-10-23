const jwt = require('jsonwebtoken')
const config = require('../config')
const db = require('../db-connection')
const User = db.User

const verifyToken = (req, res, next) => {
  let token = req.headers['x-access-token']

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!',
    })
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!',
      })
    }
    req.userId = decoded.id
    next()
  })
}
const verifyMerchant = (req, res, next) => {
  User.findOne({ where: { userid: req.params.uid } })
    .then((data) => {
      if (data.userType !== 'merchant') {
        res.status(400).send({ message: 'access denied' })
      } else next()
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
const authJWT = {
  verifyToken: verifyToken,
  verifyMerchant: verifyMerchant,
}

module.exports = authJWT
