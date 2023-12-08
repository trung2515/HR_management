'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Positions', [
      {
        id:1,
        code: 'PBNS',
        value:'Nhân sự',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },
      {
        id:2,
        code: 'PBKT',
        value:'Kế toán',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Positions', null, {});
  }
};
