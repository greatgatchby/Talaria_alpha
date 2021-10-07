module.exports = (sequelize, Sequelize) => {
  const IntakeShipped = sequelize.define(
    'intake_shipped',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      intakeid: {
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.INTEGER,
      },
      venueid: {
        type: Sequelize.INTEGER,
      },
      trackingid: {
        type: Sequelize.INTEGER,
      },
    },
    {
      tableName: 'intake_shipped',
    },
  )
  return IntakeShipped
}
