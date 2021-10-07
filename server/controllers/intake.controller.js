const db = require('../db-connection')
const config = require('../config')
const Intake = db.intake
const IntakeShipped = db.intake_shipped
const Consignment = db.consignment
const dateTime = require('./datetime')

exports.create = (req, res) => {
  if (!req.body) {
    res.status(500).send('no data was submitted')
  }
  const id = req.body.consignmentid
  Consignment.findOne({
    where: { consignmentid: id   },
  })
    .then((consignment) => {
      Intake.create({
        createdAt: dateTime,
        intake_type: req.body.intake_type,
        consignmentid: consignment.consignmentid,
      }).then((intake) => {
        if (req.body.intake_type === 'shipped') {
          IntakeShipped.create({
            intakeid: intake.id,
            status: 'awaiting dispatch',
            venueid: req.body.venueid,
            trackingid: req.body.trackingid,
          })
        }
      })
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
exports.update = (req, res) => {
  Intake.update(
    {
      status: req.body.status,
    },
    { where: { intakeid: req.body.intakeid } },
  ).catch((err) => {
    res.status(500).send({ message: err.message })
  })
}
exports.getAll = (req, res) => {
  Intake.findAll({
    where: {
      merchantid: req.body.merchantid,
    },
  })
    .then((data) => {
      res.status(200).send(data)
    })
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}

exports.delete = (req, res) => {
  Intake.delete({
    where: { intakeid: req.body.intakeid}
  }).then(res.send({ message: 'intake' + req.body.intakeid + 'has been deleted successfully' }))
    .catch((err) => {
      res.status(500).send({ message: err.message })
    })
}
