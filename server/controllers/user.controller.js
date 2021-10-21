const db = require('../db-connection')
const User = db.user

exports.findOne = (req, res) => {
  User.findOne({ where: { uid: req.body.uid } })
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
