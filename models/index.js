const Sequelize = require('sequelize')
const configs = require('../config/sequelize')
const YogaTeachersModel = require('./yogateachers')
const YogaReasonssModel = require('./yogareasons')

const environment = process.env.NODE_ENV || 'development'
const configuration = configs[environment]

const connection = new Sequelize(configuration.database, configuration.username, configuration.password, {
  host: configuration.host, dialect: configuration.dialect
})

const YogaTeachers = YogaTeachersModel(connection, Sequelize)
const YogaReasons = YogaReasonssModel(connection, Sequelize)

module.exports = { YogaTeachers, YogaReasons, Op: Sequelize.Op }
