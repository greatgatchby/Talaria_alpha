module.exports = (sequelize, Sequelize) => {
  const Bacs = sequelize.define('bacs', {
    billingid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    street: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.INTEGER,
    },
    country: {
      type: Sequelize.INTEGER,
    },
    postcode: {
      type: Sequelize.INTEGER,
    },
    sort_code: {
      type: Sequelize.INTEGER,
    },
    account_number: {
      type: Sequelize.INTEGER,
    },
  })
  return Bacs
}
