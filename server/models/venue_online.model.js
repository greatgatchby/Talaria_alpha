module.exports = (sequelize, Sequelize) => {
  const VenueOnline = sequelize.define(
    'venue_online',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      accessToken: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'venue_online',
    },
    {
      freezeTableName: true,
    },
  )
}
