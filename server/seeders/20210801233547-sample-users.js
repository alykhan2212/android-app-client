'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'John',
        email: 'example2@example.com',
        password: 'John',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'John',
        email: 'example2@example.com',
        password: 'John',
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
