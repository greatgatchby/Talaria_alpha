const sql = require('../db-connection.js')

//constructor
const Intake = function (intake) {
  this.intakeid = intake.intakeid
  this.consignmentid = intake.consignmentid
  this.intake_type = intake.intake_type
  this.timestamp = intake.timestamp
}
//create intake
Intake.create = (newIntake, result) => {
  if (newIntake.intake_type === 'shipped') {
    sql.query(`INSERT INTO intake SET ?`, newIntake, (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(err, null)
        return
      }
      console.log('created intake: ', { intakeid: res.insertId, ...newIntake })
      result(null, { intakeid: res.insertId, ...newIntake })
    }) //TODO parse API request to shipengine and return shipping label
  }
}
Intake.findById = (intakeId, result) => {
  // eslint-disable-next-line no-undef
  sql.query(`SELECT * FROM intake WHERE intakeid = ${intakeId}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }

    if (res.length) {
      console.log('found intake: ', res[0])
      result(null, res[0])
      return
    }

    // not found Intake with the intakeid
    result({ kind: 'not_found' }, null)
  })
}

Intake.getAll = (merchantid, result) => {
  sql.query(`SELECT * FROM consignment where merchantid = ?`, merchantid, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    } else {
      let consignmentid = res[0].consignmentid
      sql.query('SELECT * FROM intake where consignmentid=?', consignmentid, (err, res) => {
        if (err) {
          console.log('error: ', err)
          result(null, err)
          return
        }

        console.log('intake: ', res)
        result(null, res)
      })
    }
  })
}

Intake.updateById = (intakeId, Intake, result) => {
  sql.query(
    `UPDATE intake SET asking_price = ${Intake.asking_price} WHERE  intakeid =` + intakeId,
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(null, err)
        return
      }

      if (res.affectedRows == 0) {
        // not found Intake with the intakeid
        result({ kind: 'not_found' }, null)
        return
      }

      console.log('updated Intake: ', { intakeid: intakeId, ...Intake })
      result(null, { intakeid: intakeId, ...Intake })
    },
  )
}

Intake.remove = (intakeId, result) => {
  sql.query('DELETE FROM intake WHERE intakeid = ? AND intakeid=?', intakeId, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    if (res.affectedRows == 0) {
      // not found Intake with the intakeid
      result({ kind: 'not_found' }, null)
      return
    }

    console.log('deleted Intake with intakeid: ', intakeId)
    result(null, res)
  })
}

Intake.removeAll = (result) => {
  sql.query('DELETE FROM intake', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    console.log(`deleted ${res.affectedRows} intake`)
    result(null, res)
  })
}

module.exports = Intake
