const YogaReasons = (connection, Sequelize) => {
  return connection.define('yogareasons', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    reason: { type: Sequelize.STRING, allowNull: false },
    details: { type: Sequelize.TEXT('medium'), allowNull: false }
  })
}

module.exports = YogaReasons
