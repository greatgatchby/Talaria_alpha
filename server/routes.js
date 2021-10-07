const { verifySignUp, authJWT } = require('./middleware')
module.exports = (app) => {
  //CRUD functions for user
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
    next()
  })
  const user = require('./controllers/auth.controller')
  app.post('/user/signup', verifySignUp.checkDuplicateEmail, user.signup)
  app.post('/user/signin', user.signin)
  const consignment = require('./controllers/consignment.controller')
  //CRUD functions for consignment
  app.post('/consignment', authJWT.verifyToken, consignment.create)
  app.get('/consignment', authJWT.verifyToken, consignment.getAll)
  app.put('/consignment/confirm', authJWT.verifyToken, consignment.confirm)
  app.put('/consignment/authenticate', authJWT.verifyToken, consignment.authenticate)
  app.put('/consignment/reject', authJWT.verifyToken, consignment.reject)
  //CRUD functions for intake
  const intake = require('./controllers/intake.controller')
  app.get('/intake', intake.getAll)
  app.post('/intake', intake.create)
  //CRUD functions for policy
  //CRUD functions for Staff
  //CRUD functions for intakes
  //CRUD functions for venue
  //crud functions for vendor
}
