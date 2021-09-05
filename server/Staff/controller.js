const Staff = require('./model')
exports.create = (req, res) => {
  Staff.create((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'poop',
      })
    } else res.send(data)
  })
}
exports.findAll = (req, res) => {
  Staff.getAll(req.params.merchantid, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'some error occured while retrieving staff',
      })
    } else res.send(data)
  })
}
exports.find = (req, res) => {
  Staff.getAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'some error occured while retrieving staff',
      })
    } else res.send(data)
  })
}
exports.addStaffByEmail = (req, res) => {
  Staff.create((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'some error occured while retrieving staff',
      })
    } else res.send(data)
  })
}
exports.update = (req, res) => {}
exports.delete = (req, res) => {}

