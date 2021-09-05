var User = require('./user.model')
// Create and save new user
exports.signup = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({
      message: 'content cannot be empty',
    })
  }
  const currentdate = newDate()
  const dateTime =
    currentdate.getFullYear() +
    '/' +
    (currentdate.getMonth() + 1) +
    '/' +
    currentdate.date() +
    currentdate.getHours() +
    ':' +
    currentdate.getMinutes() +
    ':'
  currentdate.getSeconds()
}
exports.login = (req, res) => {

}
exports.create = (req, res) => {}
exports.find = (req, res) => {}
exports.logout = (req, res) => {}
exports.update = (req, res) => {}
exports.remove = (req, res) => {}
