module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'users',
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userid: {
        type: Sequelize.STRING,
        alternateKey: true,
      },
      email: { type: Sequelize.STRING },
      firstname: { type: Sequelize.STRING },
      lastname: { type: Sequelize.STRING },
      password: { type: Sequelize.STRING },
      userType: { type: Sequelize.STRING },
      createdAt: { type: Sequelize.DATE },
      updatedAt: { type: Sequelize.DATE },
    },
    {
      tableName: 'user',
    },
  )
  return User
}
