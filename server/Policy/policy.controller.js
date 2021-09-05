const Policy = require('./policy.model')
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
  }
  // Create a Policy
  const policy = new Policy({
    policyRate: req.body.policyRate,
    policyTerms: req.body.policyTerms,
    policyName: req.body.policyName,
    policyid: req.body.policyid,
    userid: req.body.userid,
  })

  // Save Policy in the database
  Policy.create(policy, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Consignment.',
      })
    else res.send(data)
  })
}

// Retrieve all consignments from the database.
exports.findAll = (req, res) => {
  Policy.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving customers.',
      })
    else res.send(data)
  })
}

// Find a single consignment with a consignmentid
exports.findOne = (req, res) => {
  Policy.findById(req.params.policyid, (err, data) => {
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
  Policy.updateById(req.params.policyid, new Policy(req.body), (err, data) => {
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
  Policy.remove(req.params.policyid, (err, data) => {
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
  Policy.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all customers.',
      })
    else res.send({ message: `All Consignments were deleted successfully!` })
  })
}
