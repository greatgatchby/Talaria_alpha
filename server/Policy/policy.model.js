const sql = require('../db-connection')
//constructor
const Policy = function (policy) {
  this.policyid = policy.policyid
  this.policyTerms = policy.policyTerms
  this.policyRate = policy.policyRate
  this.policyName = policy.policyName
  this.userid = policy.userid
}
//get all policies
Policy.getAll = (result) => {
  sql.query('SELECT * FROM policy', (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }

    console.log('intake: ', res)
    result(null, res)
  })
}
//create policy
Policy.create = (newPolicy, result) => {
  sql.query(`INSERT INTO policy SET ?`, newPolicy, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    console.log('created policy: ', { policyid: res.insertId, ...newPolicy })
    result(null, { policyid: res.insertId, ...newPolicy })
  })
}
Policy.findById = (policyId, result) => {
  sql.query(`SELECT * FROM policy where policyid = ${policyId}`, (err, res) => {
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
//edit a policy (UPDATE) with the selected id
Policy.update = (policyId, policyChanges, result) => {
  sql.query(`UPDATE policy SET ${policyChanges} WHERE policyid = ${policyId}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    if (res.affectedRows === 0) {
      console.log('not found', null)
      return
    }
  })
}
//delete a policy by id for this user
Policy.remove = (policyid, result) => {
  sql.query(`DELETE FROM policy where policyid = '${policyid}'`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    if (res.affectedRows === 0) {
      console.log('not found', null)
      return
    }
  })
}
module.exports = Policy
