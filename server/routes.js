const session = require('express-session')
const sql = require('./db-connection')
module.exports = (app) => {
  app.post('/auth', function (request, response) {
    const username = request.body.username
    const password = request.body.password
    if (username && password) {
      sql.query(
        'SELECT * FROM user WHERE email = ? AND password = ?',
        [username, password],
        function (error, results, fields) {
          if (results.length > 0) {
            request.session.loggedin = true
            request.session.username = username
            response.redirect('/home')
          } else {
            response.send('Incorrect Username and/or Password!')
            response.redirect('/user/signup')
          }
          response.end()
        },
      )
    } else {
      response.send('Please enter Username and Password!')
      response.end()
    }
  })
  //CRUD functions for user
  const user = require('./user/user.controller')
  app.post('/user/signup', user.create)
  app.get('/user/getUserData/:userid', user.find)
  app.get('/user/Login', user.login)
  app.get('/user/Logout', user.logout)
  app.put('/user/:userid', user.update)
  app.delete('/user/DeleteUser', user.remove)
  const consignment = require('./consignment/consignments.controller')
  //CRUD functions for consignment
  app.post('/consignment', consignment.create)
  app.get('/consignment/confirm/:consignmentId', consignment.confirm)
  app.get('/consignment/auth/:consignmentId', consignment.auth)
  app.get('/consignment/reject/:consignmentId', consignment.auth)
  app.get('/consignment/:merchantid', consignment.findAll)
  app.get('/consignment/:consignmentid', consignment.findOne)
  app.put('/consignment/:consignmentId', consignment.update)
  app.delete('/consignment/:consignmentId', consignment.delete)
  app.delete('/consignment/:merchantid', consignment.deleteAll)
  //CRUD functions for intake
  const intake = require('./Intake/controller')
  app.post('/intake', intake.create)
  app.get('/intake/:merchantid', intake.findAll)
  //CRUD functions for policy
  const policy = require('./Policy/policy.controller')
  app.get('/policy', policy.findAll)
  app.post('/policy', policy.create)
  app.put('/policy:/:policyid', policy.update)
  app.delete('/policy/:policyid', policy.delete)
  //CRUD functions for Staff
  const staff = require('./Staff/controller')
  app.get('/staff/:merchantid', staff.findAll)
  app.get('/staff', staff.find)
  app.post('/staff', staff.create)
  app.put('/staff/:email', staff.update)
  app.delete('/staff/:email', staff.delete)
  //CRUD functions for intakes
  const transfer = require('./transfer/controller')
  app.post('/intakes', transfer.create)
  app.get('/intakes/:merchantid', transfer.findAll)
  app.get('/sendPayout/:transferid', transfer.sendPayout)
  //CRUD functions for venue
  const venue = require('./venue/controller')
  app.get('/venue/:venueid', venue.findByID)
  app.get('/venue', venue.findAll)
  app.post('/venue', venue.create)
  app.put('/venue/:venueid', venue.update)
  app.delete('/venue/:venueid', venue.remove)
  app.delete('/venue/:merchantid', venue.removeAll)
  //crud functions for vendor
  const vendor = require('./vendor/controller')
  app.get('/vendor/:merchantid', vendor.getAll)
  app.get('/vendor/:vendorid')
  const billing = require('./billing/controller')
  app.post('/billing/:userid', billing.create)
  app.get('/billing/:userid', billing.findAll)
  app.put('/billing/:userid/:billingid', billing.update)
  app.delete('/billing/:userid/:billingid', billing.remove)
}
