module.exports = (sequelize, Sequelize) => {
  const Venue = sequelize.define(
    'venue',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      venueName: {
        type: Sequelize.STRING,
      },
      venuetype: {
        type: Sequelize.STRING,
      },
      timestamps: false,
      freezeTableName: true,
    },
    {
      tableName: 'venue',
    },
  )
}
