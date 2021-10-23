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
      division: {
        type: Sequelize.STRING,
      },
      userid: {
        type: Sequelize.STRING,
      },
      merchantid: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'vendor',
    },
  )
  return Vendor
}
