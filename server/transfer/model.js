const sql = require('../db-connection')
const plaid = require('../plaid-connection')
const Transfer = (transfer) => {
  this.transferid = transfer.transferid
  this.consignmentId = transfer.consignmentId
  this.senderId = transfer.senderId
  this.recipientId = transfer.recipientId
  this.merchantid = transfer.merchantid
  this.datetime = transfer.datetime
}

Transfer.create = (newTransfer, result) => {
  sql.query('INSERT INTO intakes SET ?', newTransfer, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    console.log('created user: ', { transferid: res.insertId, ...newTransfer })
    result(null, { transferid: res.insertId, ...newTransfer })
  })
}

Transfer.findAll = (merchantid, result) => {
  sql.query(`SELECT * from transfer where merchantid = ${merchantid}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(err, null)
      return
    }
    console.log('consignment: ', res)
    result(null, res)
  })
}
Transfer.sendPayout = (payOut, result) => {
  //check the billing id for the sender
  if (
    sql.query(`SELECT * from billing where billingid = ${payOut.senderId}`, (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(null, err)
        return
      } //check the billing id for the recipient
      sql.query(`SELECT * from billing where billingid = ${payOut.recipientId}`, (err, res) => {
        if (err) {
          console.log('error: ', err)
          result(err, null)
          return
        }
      })
    })
  ){}} /*{
    if(account type = 'iban){
    //create plaid recipient
    plaid.createPaymentRecipient(name, iban, address, null, (err, res) => {
      if (err) {
        console.log('error: ', err)
      }
      payOut.recipientId = res.recipient_id
      console.log(res.recipient_id)
    })
    } plaid.createPaymentRecipient(name, null, address, bacs, (err, res) => {
      if (err) {
        console.log('error: ', err)
      }
      payOut.recipientId = res.recipient_id
      console.log(res.recipient_id)
    })
  }}*/
  //if BACS send payOut using plaid bacs
  //if IBAN send payOut using iban

module.exports = Transfer
