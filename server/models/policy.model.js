module.exports = (sequelize, Sequelize) => {
  const Policy = sequelize.define(
    'policy',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      policyNumber: {
        type: Sequelize.STRING,
      },
      policyTerms: {
        type: Sequelize.STRING,
      },
      policyRate: {
        type: Sequelize.FLOAT,
      },
      policyName: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'policy',
    },
  )
  return Policy
}
