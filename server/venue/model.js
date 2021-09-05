const sql = require('../db-connection')
const Venue = function (venue) {
  this.venueid = venue.venueid
  this.venueName = venue.venueName
  this.venueType = venue.venueType
  this.venueOnlineAddress = venue.venueOnlineAddress
  this.venuePhysAddress = venue.venuePhysAddress
  this.venuePhysPostcode = venue.venuePhysPostcode
}

Venue.create = (newVenue, result) => {
  sql.query(
    `INSERT INTO venue SET venueName ='${newVenue.venueName}', venuetype='${newVenue.venueType}'`,
    (err, res) => {
      if (err) {
        console.log('error: ', err)
        result(null, err)
      } else
        switch (newVenue.venueType) {
          case 'online':
            sql.query(
              `INSERT INTO venue_online SET venueid=${res.insertId},webaddress = '${newVenue.venueOnlineAddress}'`,
              (err, res) => {
                if (err) {
                  console.log('error: ', err)
                  result(null, err)
                }
              },
            )
            break
          case 'physcial':
            sql.query(
              `INSERT INTO venue_physical SET venueid=${res.insertId}, address = '${newVenue.venuePhysAddress}', postcode='${newVenue.venuePhysPostcode}'`,
              (err, res) => {
                if (err) {
                  console.log('error: ', err)
                  result(null, err)
                }
              },
            )
            break
        }
      console.log('created venue')
      result(null, { venueid: res.insertId, ...newVenue })
    },
  )
}
Venue.updateByid = (venueid, venue, result) => {
  sql.query(`SELECT * FROM venue WHERE venueid = ${venueid}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    } else {
      switch (res[0].venuetype) {
        case 'online':
          sql.query(
            `UPDATE venue_online SET webaddress='${venue.venueOnlineAddress}' WHERE venueid=${venueid}`,
            (err, res) => {
              if (err) {
                console.log('error: ', err)
                result(null, err)
                return
              } else {
                console.log('updated venue:', res)
                result(null, res)
              }
            },
          )
          sql.query(
            `UPDATE venue SET venueName ='${venue.venueName}' WHERE venueid=${venueid}`,
            (err, res) => {
              if (err) {
                console.log('error: ', err)
                result(null, err)
                return
              }
            },
          )
          break
        case 'physical':
          sql.query(
            `UPDATE venue_physical SET address='${venue.venuePhysAddress}', postcode='${venue.venuePhysPostcode}' WHERE venueid=${venueid}`,
            (err, res) => {
              if (err) {
                console.log('error: ', err)
                result(null, err)
                return
              } else {
                console.log('updated venue:', res)
                result(null, res)
              }
            },
          )
          sql.query(
            `UPDATE venue SET venueName ='${venue.venueName}' WHERE venueid=${venueid}`,
            (err, res) => {
              if (err) {
                console.log('error: ', err)
                result(null, err)
                return
              }
            },
          )
          break
      }
    }
  })
}
Venue.findById = (venueid, result) => {
  sql.query(`SELECT venuetype from venue where venueid = ${venueid}`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('venue found: ', res[0].venuetype)
    //determine venuetype
    switch (res[0].venuetype) {
      //get online venue
      case 'online':
        sql.query(
          `SELECT * from venue LEFT JOIN venue_online ON venue.venueid=venue_online.venueid WHERE venue.venueid=${venueid}`,
          (err, res) => {
            if (err) {
              console.log('error: ', err)
              result(null, err)
              return
            }
            console.log('venue: ', res)
            result(null, res)
          },
        )
        break
      //get physical venue
      case 'physical':
        sql.query(
          `SELECT * from venue LEFT JOIN venue_physical ON venue.venueid=venue_physical.venueid WHERE venue.venueid=${venueid}`,
          (err, res) => {
            if (err) {
              console.log('error: ', err)
              result(null, err)
              return
            }
            console.log('venue: ', res)
            result(null, res)
          },
        )
        break
    }
  })
}
Venue.findAll = (result) => {
  sql.query(`SELECt * FROM venue`, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log('venue: ', res)
  })
}
Venue.remove = (venueid, result) => {
  sql.query(`DELETE FROM venue WHERE venueid = ?`, venueid, (err, res) => {
    if (err) {
      console.log('error: ', err)
      result(null, err)
      return
    }
    console.log(`deleted ${res.affectedRows} venue(s)`)
    result(null, res)
  })
}
module.exports = Venue
