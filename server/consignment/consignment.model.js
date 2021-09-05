const sql = require('../db-connection')
//timestamping
let currentDateTime = new Date()
let dateTime =
  currentDateTime.getUTCFullYear() +
  '-' +
  currentDateTime.getMonth() +
  '-' +
  currentDateTime.getDate() +
  ' ' +
  currentDateTime.getHours() +
  ':' +
  currentDateTime.getMinutes() +
  ':' +
  currentDateTime.getSeconds()

//constructor
const Consignment = function (consignment) {
  this.consignmentId = consignment.consignmentId
  this.userid = consignment.userid
  this.item_name = consignment.item_name
  this.item_size = consignment.item_size
  this.asking_price = consignment.asking_price
  this.policyid = consignment.policyid
  this.date_consigned = dateTime
  this.date_sold = consignment.date_sold
  this.status_code = consignment.status_code
  this.merchantid = consignment.merchantid
  this.venue = consignment.venue
}
//create consignment
Consignment.create = (newConsignment, result) => {
  sql.query('INSERT INTO consignment SET ?', newConsignment, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    console.log('created consignment: ', { consignmentid: res.insertId, ...newConsignment })
    result(null, { consignmentid: res.insertId, ...newConsignment })
  })
}

Consignment.findById = (consignmentId, result) => {
  // eslint-disable-next-line no-undef
  sql.query(`SELECT * FROM consignment WHERE consignmentid = ${consignmentId}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }

    if (res.length) {
      console.log('found consignment: ', res[0])
      result(null, res[0])
      return
    }

    // not found Consignment with the consignmentid
    result({ kind: 'not_found' }, null)
  })
}

Consignment.getAll = (merchantid, result) => {
  sql.query(`SELECT * FROM consignment WHERE merchantid = ${merchantid}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    console.log('consignment: ', res)
    result(null, res)
  })
}

Consignment.updateById = (consignmentId, Consignment, result) => {
  sql.query(
    `UPDATE consignment SET asking_price = ${Consignment.asking_price} WHERE  consignmentid =` +
      consignmentId,
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(null, err)
        return
      }

      if (res.affectedRows === 0) {
        // not found Consignment with the consignmentid
        result({ kind: 'not_found' }, null)
        return
      }

      console.log('updated Consignment: ', { consignmentid: consignmentId, ...Consignment })
      result(null, { consignmentid: consignmentId, ...Consignment })
    },
  )
}

Consignment.remove = (consignmentId, result) => {
  sql.query('DELETE FROM consignment WHERE consignmentid = ?', consignmentId, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    if (res.affectedRows === 0) {
      // not found Consignment with the consignmentid
      result({ kind: 'not_found' }, null)
      return
    }

    console.log('deleted Consignment with consignmentid: ', consignmentId)
    result(null, res)
  })
}

Consignment.removeAll = (result) => {
  sql.query('DELETE FROM consignment', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    console.log(`deleted ${res.affectedRows} consignment`)
    result(null, res)
  })
}
// confirm consignment and create an intake + shipping label
Consignment.confirm = (consignmentId, result) => {
  sql.query(
    `UPDATE consignment SET status_code = 'confirmed' WHERE consignmentid = ${consignmentId}`,
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(null, err)
        return
      }
      console.log(`Consignment ${consignmentId} has been confirmed`)
    },
  )
}
Consignment.authenticate = (consignmentId, result) => {
  sql.query(
    `UPDATE consignment SET status_code = 'authenticated' WHERE consignmentid = ${consignmentId}`,
    (err, res) => {
      if (err) {
        console.log('errorL ', err)
        result(null, err)
        return
      }
      console.log(`Consignment ${consignmentId} has been confirmed`)
      result(null, res)
      return
    },
  )
}
Consignment.reject = (consignmentId, result) => {
  sql.query(
    `UPDATE consignment WHERE consignmentid = ${consignmentId} SET status = 'rejected'`,
    (err, res) => {
      if (err) {
        console.log('errorL ', err)
        result(null, err)
        return
      }
      console.log(`Consignment ${consignmentId} has been confirmed`)
    },
  )
}
module.exports = Consignment
