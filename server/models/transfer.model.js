module.exports = (sequelize, Sequelize) => {
  const transfer = sequelize.define(
    'transfer',
    {
      transferid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      consignmentid: {
        type: Sequelize.STRING,
      },
      vendorid: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.STRING,
      },
      merchantid: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'transfer',
    },
  )
}
