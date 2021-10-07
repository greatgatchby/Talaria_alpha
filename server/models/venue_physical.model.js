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
      timestamps: false,
      freezeTableName: true,
    },
    {
      tableName: 'venue_online',
    },
  )
}
