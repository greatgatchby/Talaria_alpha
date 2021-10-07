module.exports = (sequelize, Sequelize) => {
  const Venue = sequelize.define(
    'venue',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      accessToken: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'venue_online',
    },
    {
      timestamps: false,
    },
  )
}
