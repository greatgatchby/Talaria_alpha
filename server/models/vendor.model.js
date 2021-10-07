module.exports = (sequelize, Sequelize) => {
  const Vendor = sequelize.define(
    'vendor',
    {
      vendorid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      country: {
        type: Sequelize.STRING,
      },
      postcode: {
        type: Sequelize.STRING,
      },
      devision: {
        type: Sequelize.STRING,
      },
      userid: {
        type: Sequelize.STRING,
      },
      merchantid: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      upadtedAt: {
        type: Sequelize.DATE,
      },
    },
    {
      tableName: 'vendor',
    },
  )
  return Vendor
}
