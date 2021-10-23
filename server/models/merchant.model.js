module.exports = (sequelize, Sequelize) => {
  const Merchant = sequelize.define(
    'merchant',
    {
      merchantid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      userid: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    },
  )
  return Merchant
}
