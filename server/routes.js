const { verifySignUp, authJWT } = require('./middleware')
module.exports = (app) => {
  //CRUD functions for user
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept')
    next()
  })
  const auth = require('./controllers/auth.controller')
  app.post('/auth/signup', verifySignUp.checkDuplicateEmail, auth.signup)
  app.post('/auth/signin', auth.signin)
  const user = require('./controllers/user.controller')
  app.put('/user', authJWT.verifyToken, user.update)
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
  app.get('/intake/', authJWT.verifyToken, intake.findOne)
  app.put('/intake/:intakeId', authJWT.verifyToken, intake.update)
  app.delete('/intake/:intakeId', authJWT.verifyToken, intake.delete)
  app.delete('/intake', authJWT.verifyToken, intake.deleteAll)
  //CRUD functions for policy
  //CRUD functions for Staff
  //CRUD functions for intakes
  //CRUD functions for venue
  //crud functions for vendor
}
