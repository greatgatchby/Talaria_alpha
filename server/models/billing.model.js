module.exports = (sequelize, Sequelize) => {
  const Billing = sequelize.define(
    'billing',
    {
      billingid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      billing_type: {
        type: Sequelize.STRING,
      },
      userid: {
        type: Sequelize.INTEGER,
      },
    },
    {
      tableName: 'billing',
    },
  )

  return { Billing }
}
