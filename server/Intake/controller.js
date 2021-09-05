const Intake = require('./model')
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  let currentDateTime = new Date()
  let dateTime =
    currentDateTime.getUTCFullYear() +
    '-' +
    currentDateTime.getMonth() +
    '-' +
    currentDateTime.getDate() +
    ' ' +
    currentDateTime.getHours() +
    ':' +
    currentDateTime.getMinutes() +
    ':' +
    currentDateTime.getSeconds()
  // Create a Consignment
  const intake = new Intake({
    intakeid: req.body.intakeid,
    consignmentid: req.body.consignmentid,
    intake_type: req.body.intake_type,
    timestamp: dateTime,
  })

  // Save Consignment in the database
  Intake.create(intake, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Consignment.',
      })
    else res.send(data)
  })
}

// Retrieve all consignments from the database.
exports.findAll = (req, res) => {
  Intake.getAll(req.params.merchantid,(err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving customers.',
      })
    else res.send(data)
  })
}

// Find a single consignment with a consignmentid
exports.findOne = (req, res) => {
  Intake.findById(req.params.consignmentid, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Consignment with id ${req.params.consignmentid}.`,
        })
      } else {
        res.status(500).send({
          message: 'Error retrieving Consignment with id ' + req.params.consignmentid,
        })
      }
    } else res.send(data)
  })
}

// Update a consignment identified by the consignmentid in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  Intake.updateById(req.params.consignmentId, new Intake(req.body), (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Consignment with id ${req.params.consignmentid}.`,
        })
      } else {
        res.status(500).send({
          message: 'Error updating Consignment with id ' + req.params.consignmentid,
        })
      }
    } else res.send(data)
  })
}

// Delete a consignment with the specified consignmentid in the request
exports.delete = (req, res) => {
  Intake.remove(req.params.consignmentid, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Consignment with id ${req.params.consignmentid}.`,
        })
      } else {
        res.status(500).send({
          message: 'Could not delete Consignment with id ' + req.params.consignmentid,
        })
      }
    } else res.send({ message: `Consignment was deleted successfully!` })
  })
}

// Delete all consignments from the database.
exports.deleteAll = (req, res) => {
  Intake.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all customers.',
      })
    else res.send({ message: `All Consignments were deleted successfully!` })
  })
}
