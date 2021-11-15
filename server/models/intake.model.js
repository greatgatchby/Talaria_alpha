module.exports = (sequelize, Sequelize) => {
  const intake = sequelize.define(
    'intake',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      consignmentid: {
        type: Sequelize.STRING,
      },
      intake_type: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING,
      },
      merchantid: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'intake',
    },
  )
  return intake
}
