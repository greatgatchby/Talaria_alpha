module.exports = (sequelize, Sequelize) => {
  const transfer = sequelize.define(
    'transfer',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      consignmentid: {
        type: Sequelize.STRING,
      },
      sender_billing: {
        type: Sequelize.STRING,
      },
      recipient_billing: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'transfer',
    },
  )
}
