const Venue = require('./model')
exports.create = (req, res) => {
  const venue = new Venue({
    venueid: req.body.venueid,
    venueName: req.body.venueName,
    venueType: req.body.venueType,
    venuePhysAddress: req.body.venuePhysAddress,
    venueOnlineAddress: req.body.venueOnlineAddress,
    venuePhysPostcode: req.body.venuePhysPostcode,
  })
  Venue.create(venue, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating this venue.',
      })
    else res.send(data)
  })
}
exports.update = (req, res) => {
  const venue = new Venue({
    venueName: req.body.venueName,
    venueOnlineAddress: req.body.venueOnlineAddress,
    venuePhysAddress: req.body.venuePhysAddress,
    venuePhysPostcode: req.body.venuePhysPostcode,
  })
  Venue.updateByid(req.params.venueid, venue, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating this venue.',
      })
    else res.send(data)
  })
}
exports.findByID = (req, res) => {
  Venue.findById(req.params.venueid, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'some error occured while trying to update this venue',
      })
    } else res.send(data)
  })
}
exports.findAll = (req, res) => {
  Venue.findAll((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'some error occured while trying to get venues',
      })
    } else res.send(data)
  })
}
exports.remove = (req, res) => {
  Venue.remove(req.params.venueid, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || 'some error occured while trying to get venues',
      })
    } else res.send(data)
  })
}
exports.removeAll = (req, res) => {}
