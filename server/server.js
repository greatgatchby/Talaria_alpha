const express = require('express')
const db = require('./db-connection')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const port = 3001
const app = express()
const cors = require('cors')
const http = require('http')
const server = http.createServer(app)
//congfigure cors options
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
  credentials: true,
}
db.sequelize.sync()
//session handling
app.set('trust proxy', 1)
app.use(
  session({
    key: 'userid',
    secret: 'some secret', // key for signing the cookie that can be saved to the browser
    resave: false, //should we create a new session for each request
    saveUninitialized: false, // if we have not touched or modified the session save
    cookie: {
      expires: 60 * 60 * 24,
    },
  }),
)
app.use(cookieParser())
//CORS
app.use(cors(corsOptions))
// parse requests of content-type: application/json
app.use(bodyParser.json())
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// simple route
app.get('/', cors(corsOptions), (req, res) => {
  res.json({ message: 'Welcome to the talaria application.' })
  console.log(req.session.id)
})
require('./routes')(app)
// set port, listen for requests
app.listen(port, () => {
  console.log('Server is running on port http://localhost:' + port)
})
