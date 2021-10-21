const db = require('../db-connection')
const config = require('../config')
const User = db.user
const Staff = db.staff
//come back to staff
exports.create = (req, res) => {
  User.findOne({
    where: { email: req.body.email },
  }).then((user) => {
    if (!user) {
      res
        .status(400)
        .send('staff member does not have an account they have been sent a signup link')
    } else {
      Staff.create({
        merchantid: req.body.merchantid,
        email: req.body.email,
        userid: user.userid,
      })
    }
  })
}
exports.getAll = (req, res) => {}
exports.findOne = (req, res) => {}
exports.update = (req, res) => {}
exports.delete = (req, res) => {}
exports.deleteAll = (req, res) => {}
