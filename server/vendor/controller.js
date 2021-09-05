const Vendor = require('./model')
exports.create = (req, res) => {
  const vendor = {
    phone: req.body.phone,
    address: req.body.address,
    postcode: req.body.address,
    division: req.body.division,
    userid: req.body.userid,
    merchantid: req.body.merchantid,
  }
  Vendor.create(vendor, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'poop',
      })
    } else res.send(data)
  })
}
exports.getAll = (req, res) => {
  Vendor.getAll(req.params.merchantid, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'poop',
      })
    } else res.send(data)
  })
}
