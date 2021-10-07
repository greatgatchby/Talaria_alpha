module.exports = (sequelize, Sequelize) => {
  const Merchant = sequelize.define('merchant', {
    merchantid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
  })
  return Merchant
}
