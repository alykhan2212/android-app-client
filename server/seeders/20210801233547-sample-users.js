'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'John',
        email: 'example@example.com',
        password: '123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'robert',
        email: 'robert@example.com',
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})

  }
};
