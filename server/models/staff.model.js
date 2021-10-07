module.exports = (sequelize, Sequelize) => {
  const staff = sequelize.define(
    'staff',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.STRING,
      },
      merchantid: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      permissions: {
        type: Sequelize.JSON,
      },
    },
    {
      tableName: 'staff',
    },
  )
}
