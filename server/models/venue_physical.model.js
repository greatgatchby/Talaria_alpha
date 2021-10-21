module.exports = (sequelize, Sequelize) => {
  const Venue = sequelize.define(
    'venue',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      address: {
        type: Sequelize.STRING,
      },
      postcode: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'venue_online',
      timestamps: false,
      freezeTableName: true,
    },
  )
}
