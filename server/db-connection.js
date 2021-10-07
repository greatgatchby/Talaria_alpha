const config = require('./config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(config.mysql.DB, config.mysql.USER, config.mysql.PASSWORD, {
  host: config.mysql.HOST,
  dialect: config.mysql.DIALECT,
  operatorsAliases: false,

  pool: {
    max: config.mysql.POOL.max,
    min: config.mysql.POOL.min,
    acquire: config.mysql.POOL.acquire,
    idle: config.mysql.POOL.idle,
  },
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.user = require('./models/user.model')(sequelize, Sequelize)
db.merchant = require('./models/merchant.model')(sequelize, Sequelize)
db.vendor = require('./models/vendor.model')(sequelize, Sequelize)
db.consignment = require('./models/consignment.model')(sequelize, Sequelize)
db.billing = require('./models/billing.model')(sequelize, Sequelize)
db.bacs = require('./models/bacs.model')(sequelize, Sequelize)
db.iban = require('./models/iban.model')(sequelize, Sequelize)
db.paypal = require('./models/paypal.model')(sequelize, Sequelize)
db.intake = require('./models/intake.model')(sequelize, Sequelize)
db.intake_shipped = require('./models/intake_shipped.model')(sequelize, Sequelize)
db.policy = require('./models/policy.model')(sequelize, Sequelize)
db.staff = require('./models/staff.model')(sequelize, Sequelize)
db.transfer = require('./models/transfer.model')(sequelize, Sequelize)
db.venue = require('./models/venue.model')(sequelize, Sequelize)
db.venue_online = require('./models/venue_online.model')(sequelize, Sequelize)
db.venue_physical = require('./models/venue_physical.model')(sequelize, Sequelize)
// merchant belongs to user
db.merchant.belongsTo(db.user, {
  foreignKey: 'userid',
  onUpdate: 'CASCADE',
})
// vendor belongs to user and merchant
db.vendor.belongsTo(db.user, {
  foreignKey: 'userid',
})
db.vendor.belongsTo(db.merchant, {
  foreignKey: 'merchantid',
})
db.merchant.belongsTo(db.user, {
  foreignKey: 'userid',
})
db.consignment.belongsTo(db.user, {
  foreignKey: 'userid',
})

module.exports = db
