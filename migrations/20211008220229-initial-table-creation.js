'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('yogateachers', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      nameFirst: { type: Sequelize.STRING, allowNull: false },
      nameLast: { type: Sequelize.STRING, allowNull: false },
      onlineAvailability: { type: Sequelize.STRING, allowNull: false },
      specialization: { type: Sequelize.STRING, allowNull: false },
      contactInformation: { type: Sequelize.STRING, allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
    await queryInterface.createTable('yogareasons', {
      id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
      reason: { type: Sequelize.STRING, allowNull: false },
      details: { type: Sequelize.TEXT('medium'), allowNull: false },
      createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW()') },
      updatedAt: { type: Sequelize.DATE, defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()') },
      deletedAt: { type: Sequelize.DATE }
    })
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('yogateachers'),
    await queryInterface.dropTable('yogareasons')
  }
}

