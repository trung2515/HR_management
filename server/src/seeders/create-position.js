'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Positions', [
      {
        code: 'CVGD',
        value:'Manager',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },
      {
        code: 'CVLD',
        value:'Leader',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },
      {
        code: 'CVMB',
        value:'Member',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Positions', null, {});
  }
};
