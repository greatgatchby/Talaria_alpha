module.exports = (sequelize, Sequelize) => {
  const IBAN = sequelize.define('iban', {
    billingid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    iban: {
      type: Sequelize.STRING,
    },
  })
  return IBAN
}
