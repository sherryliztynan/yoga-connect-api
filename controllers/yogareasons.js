const models = require('../models')

const getAllYogaReasons = async (request, response) => {
  const yogareasons = await models.YogaReasons.findAll()

  return response.send(yogareasons)
}

module.exports = { getAllYogaReasons }
