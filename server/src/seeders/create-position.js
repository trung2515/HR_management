'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Positions', [
      {
        id:1,
        code: 'CVGD',
        value:'Manager',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },
      {
        id:2,
        code: 'CVLD',
        value:'Leader',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },
      {
        id:3,
        code: 'CVMB',
        value:'Member',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Positions', null, {});
  }
};
