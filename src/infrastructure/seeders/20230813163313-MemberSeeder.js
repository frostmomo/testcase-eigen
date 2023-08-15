'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Members', [
      {
        code: 'M001',
        name: 'Angge',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'M002',
        name: 'Ferry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: 'M003',
        name: 'Putri',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // ... other records ...
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {});
  },
};