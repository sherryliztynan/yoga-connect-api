/* eslint-disable max-len */
'use strict'
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('yogateachers', [
      {
        nameFirst: 'Brytta', nameLast: 'Byers', onlineAvailability: 'yes', specialization: 'Vinyassa', contactInformation: 'Brytta@gmail.com'
      },
      {
        nameFirst: 'Danielle', nameLast: 'Storm', onlineAvailability: 'yes', specialization: 'Prenatal', contactInformation: 'Danielle@gmail.com'
      },
      {
        nameFirst: 'Dianne', nameLast: 'Bondy', onlineAvailability: 'yes', specialization: 'Gentle Yoga', contactInformation: 'Dianne@gmail.com'
      },
      {
        nameFirst: 'Megan', nameLast: 'Eaton', onlineAvailability: 'yes', specialization: 'Yoga Wellness', contactInformation: 'Megan@gmail.com'
      },
    ])
    await queryInterface.bulkInsert('yogareasons', [
      {
        reason: 'Health', details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc elementum id dui id volutpat. Fusce ut lacinia ipsum, nec dapibus mi. Curabitur non malesuada ante, sed viverra metus. Fusce eget est ac magna varius semper. Phasellus sed nisl faucibus, finibus ligula non, congue sapien. Donec feugiat dolor urna, sit amet gravida arcu sodales a. Nullam fringilla libero purus, at imperdiet lorem consequat quis. Phasellus rutrum elementum lectus, eget eleifend urna fringilla tincidunt.'
      },
      {
        reason: 'Stress Relief', details: 'Ut purus velit, molestie vitae laoreet quis, dictum eu dolor. Donec condimentum suscipit libero, sit amet congue est mollis gravida. Fusce laoreet pulvinar magna, ac volutpat tortor mollis in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
      },
      {
        reason: 'Increased Focus', details: 'Suspendisse nulla lacus, tincidunt id risus mollis, fringilla scelerisque odio. In ut cursus ipsum. Maecenas accumsan ullamcorper nisl mollis ultricies. '
      }
    ])
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('yogateachers')
    await queryInterface.bulkDelete('yogareasons')
  }
}
