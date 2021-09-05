const Transfer = require('./model')
//create intakes
exports.create = (req, res) => {
  Transfer.create(req.body, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'poop',
      })
    } else res.send(data)
  })
}
exports.findAll = (req, res) => {
  Transfer.findAll(req.params.merchantid, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'some error occured over heeeer',
      })
    else res.send(data)
  })
}
//set intakes status to due
exports.sendPayout = (req, res) => {}
//delete intakes payout
exports.delete = () => {}
