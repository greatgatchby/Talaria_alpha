const Consignment = require('./consignment.model')
// Create and Save a new consignment
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
  const consignment = new Consignment({
    userid: req.body.userid,
    item_name: req.body.item_name,
    item_size: req.body.item_size,
    asking_price: req.body.asking_price,
    policyid: req.body.policyid,
    date_consigned: dateTime,
    status_code: req.body.status_code,
    merchantid: req.body.merchantid,
    venue: req.body.venue,
  })

  // Save Consignment in the database
  Consignment.create(consignment, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Consignment.',
      })
    else res.send(data)
  })
}

// Retrieve all consignments from the database.
exports.findAll = (req, res) => {
  Consignment.getAll(req.params.merchantid, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving customers.',
      })
    else res.send(data)
  })
}

// Find a single consignment with a consignmentid
exports.findOne = (req, res) => {
  Consignment.findById(req.params.consignmentid, (err, data) => {
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
  Consignment.updateById(req.params.consignmentId, new Consignment(req.body), (err, data) => {
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
  Consignment.remove(req.params.consignmentId, (err, data) => {
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
  Consignment.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all customers.',
      })
    else res.send({ message: `All Consignments were deleted successfully!` })
  })
}

exports.confirm = (req, res) => {
  Consignment.confirm(req.params.consignmentId, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'some error occurred while confirming this item',
      })
    } else
      res.send({
        message: 'This item has been confirmed',
      })
  })
}
exports.auth = (req, res) => {
  Consignment.authenticate(req.params.consignmentId, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'some error occurred while authenticating this item',
      })
    } else
      res.send({
        message: 'This item has been authenticated',
      })
  })
}
exports.reject = (req, res) => {
  Consignment.confirm(req.params.consignmentId, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'some error occurred while confirming this item',
      })
    } else
      res.send({
        message: 'This item has been rejected',
      })
  })
}
