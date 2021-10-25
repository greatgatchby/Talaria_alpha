const { verifySignUp, authJWT } = require('./middleware')
module.exports = (app) => {
  //CRUD functions for auth/user
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
    next()
  })
  const auth = require('./controllers/auth.controller')
  app.post('/auth/signup', verifySignUp.checkDuplicateEmail, auth.signup)
  app.post('/auth/signin', auth.signin)
  const user = require('./controllers/user.controller')
  app.put('/user/:uid', authJWT.verifyToken, user.update)
  app.get('/user/:id', authJWT.verifyToken, user.findOne)
  app.get('/vendor/:uid', authJWT.verifyToken, user.findVendors)
  const consignment = require('./controllers/consignment.controller')
  //CRUD functions for consignment
  app.post('/consignment', authJWT.verifyToken, consignment.create)
  app.get('/consignment', authJWT.verifyToken, consignment.getAll)
  app.put('/consignment/confirm', authJWT.verifyToken, consignment.confirm)
  app.put('/consignment/authenticate', authJWT.verifyToken, consignment.authenticate)
  app.put('/consignment/reject', authJWT.verifyToken, consignment.reject)
  //CRUD functions for intake
  const intake = require('./controllers/intake.controller')
  app.post('/intake', authJWT.verifyToken, intake.create)
  app.get('/intake', authJWT.verifyToken, intake.getAll)
  app.get('/intake/:id', authJWT.verifyToken, intake.findOne)
  app.put('/intake/:id', authJWT.verifyToken, intake.update)
  app.delete('/intake/:intakeId', authJWT.verifyToken, intake.delete)
  app.delete('/intake', authJWT.verifyToken, intake.deleteAll)
  //CRUD functions for policy
  const policy = require('./controllers/policy.controller')
  app.post('/policy', authJWT.verifyToken, policy.create)
  app.get('/policy', authJWT.verifyToken, policy.getAll)
  app.get('/policy/:policyId', authJWT.verifyToken, policy.findOne)
  app.put('/policy/:policyId', authJWT.verifyToken, policy.update)
  app.delete('/policy/:policyId', authJWT.verifyToken, policy.delete)
  app.delete('/policy', authJWT.verifyToken, policy.deleteAll)
  //CRUD functions for Staff
  const staff = require('./controllers/staff.controller')
  app.post('/staff', authJWT.verifyToken, staff.create)
  app.get('/staff/:id', authJWT.verifyToken, staff.getAll)
  app.get('/staff', authJWT.verifyToken, staff.findOne)
  app.put('/staff', authJWT.verifyToken, staff.update)
  app.delete('/staff', authJWT.verifyToken, staff.delete)
  app.delete('/staff', authJWT.verifyToken, staff.deleteAll)
  //CRUD functions for venue
  const venue = require('./controllers/venue.controller')
  app.post('/venue_physical', authJWT.verifyToken, venue.createPhysical)
  app.post('/venue/connect_square', authJWT.verifyToken, venue.connectSQUARE)
  app.post('/venue/connect_woo', authJWT.verifyToken, venue.connectWOO)
  app.post('/venue/connect_shopify', authJWT.verifyToken, venue.connectSHOPIFY)
  app.get('/venue', authJWT.verifyToken, venue.getAll)
  app.get('/venue/:id', authJWT.verifyToken, venue.findOne)
  app.put('/venue', authJWT.verifyToken, venue.update)
  app.delete('/venue', authJWT.verifyToken, venue.delete)
  app.delete('/venue', authJWT.verifyToken, venue.deleteAll)
  // functions for billing
  const billing = require('./controllers/billing.controller')
  app.post('/billing', authJWT.verifyToken, billing.create)
  app.get('/billing/:id', authJWT.verifyToken, billing.findOne)
  app.get('/billing', authJWT.verifyToken, billing.getAll)
  app.put('/billing', authJWT.verifyToken, billing.update)
  app.delete('/billing', authJWT.verifyToken, billing.delete)
  app.delete('/billing/:userid', authJWT.verifyToken, billing.deleteAll)
  //functions for transfer
  const transfer = require('./controllers/transfer.controller')
  app.post('/transfer', authJWT.verifyToken, transfer.create)
  app.get('/transfer', authJWT.verifyToken, transfer.getAll)
  app.get('/initiate-transfer', authJWT.verifyToken, transfer.initiate)
  app.delete('/transfer', authJWT.verifyToken, transfer.delete)
}
