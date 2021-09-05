const Billing = require('./model')
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: 'content cannot be empty',
    })
  }
  const billing = new Billing({
    billing_type: req.body.billing_type,
    street: req.body.street,
    city: req.body.city,
    postcode: req.body.postcode,
    country: req.body.country,
    paypal: req.body.paypal,
    sort_code: req.body.sort_code,
    account_number: req.body.account_number,
    iban: req.body.iban,
  })
  Billing.create(req.params.userid, billing, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the Consignment.',
      })
    } else res.send(data)
  })
}

exports.findAll = (req, res) => {
  Billing.getAll(req.params.userid, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving customers.',
      })
    else res.send(data)
  })
}
exports.update = (req, res) => {
  Billing.update(req.params.userid, req.params.billingid, req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'some error occured while updating your details try again',
      })
    } else res.send(data)
  })
}
exports.remove = (req, res) => {
  Billing.remove(req.params.userid, req.params.billingid, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'some error occured while deleting your billing details',
      })
    } else res.send(data)
  })
}
