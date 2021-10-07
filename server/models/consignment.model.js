module.exports = (sequelize, Sequelize) => {
  const Consignment = sequelize.define(
    'Consignment',
    {
      consignmentid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      item_name: {
        type: Sequelize.STRING,
      },
      item_size: {
        type: Sequelize.STRING,
      },
      asking_price: {
        type: Sequelize.INTEGER,
      },
      policyid: {
        type: Sequelize.INTEGER,
      },
      date_consigned: {
        type: Sequelize.DATE,
      },
      date_sold: {
        type: Sequelize.DATE,
      },
      status_code: {
        type: Sequelize.STRING,
      },
      venue: {
        type: Sequelize.INTEGER,
      },
      merchantid: {
        type: Sequelize.INTEGER,
      },
      item_unit: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'consignment',
      timestamps: false,
    },
  )
  return Consignment
}
