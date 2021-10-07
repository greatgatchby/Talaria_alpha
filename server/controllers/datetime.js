const dateTime = () => {
  const date = new Date()
  const currentDate =
    date.getFullYear() +
    '-' +
    date.getMonth() +
    '-' +
    date.getDay() +
    ' ' +
    date.getHours() +
    ':' +
    date.getMinutes() +
    ':' +
    date.getSeconds()
}
module.exports = dateTime
