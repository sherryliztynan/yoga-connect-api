const models = require('../models')

const getAllYogaTeachers = async (request, response) => {
  const yogateachers = await models.YogaTeachers.findAll()

  return response.send(yogateachers)
}

const getTeacherByName = async (request, response) => {
  const { identifier } = request.params

  const yogaTeacher = await models.YogaTeachers.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { nameFirst: identifier },
        { nameLast: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ]
    },
    include: [{ model: models.YogaTeachers }]
  })

  return yogaTeacher
    ? response.send(yogaTeacher)
    : response.sendStatus(404)
}
const saveNewTeacher = async (request, response) => {
  try {
    const {
      nameFirst, nameLast, onlineAvailability, specialization, contactInformation
    } = request.body

    if (!nameFirst || !nameLast || !onlineAvailability || !specialization || !contactInformation) {
      // eslint-disable-next-line max-len
      return response.status(400).send('fields required: nameFirst, nameLast, onlineAvailability, specialization, contactInformation')
    }

    const newTeacher = await models.YogaTeachers.create({
      nameFirst, nameLast, onlineAvailability, specialization, contactInformation
    })

    return response.status(201).send(newTeacher)
  } catch (error) {
    return response.status(500).send('Unable to save new teacher, please try again')
  }
}

const deleteYogaTeacher = async (request, response) => {
  try {
    const { id } = request.params

    await models.YogaTeachers.destroy({ where: { id } })

    return response.sendStatus(204)
  } catch (error) {
    return response.status(500).send('Unable to delete teacher, please try again')
  }
}

module.exports = { getAllYogaTeachers, getTeacherByName, saveNewTeacher, deleteYogaTeacher }
