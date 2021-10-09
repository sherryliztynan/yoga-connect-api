const YogaTeachers = (connection, Sequelize) => {
  return connection.define('yogateachers', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    nameFirst: { type: Sequelize.STRING, allowNull: false },
    nameLast: { type: Sequelize.STRING, allowNull: false },
    onlineAvailability: { type: Sequelize.STRING, allowNull: false },
    specialization: { type: Sequelize.STRING, allowNull: false },
    contactInformation: { type: Sequelize.STRING, allowNull: false }
  })
}

module.exports = YogaTeachers
