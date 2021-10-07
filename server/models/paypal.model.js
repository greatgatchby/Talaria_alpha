module.exports = (sequelize, Sequelize) => {
  const Paypal = sequelize.define(
    'paypal',
    {
      billingid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      paypal: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'paypal',
    },
  )
  return Paypal
}
