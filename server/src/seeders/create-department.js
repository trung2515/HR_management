'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Departments', [
      {
        code: 'PBNS',
        value:'Nhân sự',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },
      {
        code: 'PBKT',
        value:'Kế toán',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },
      {
        code: 'PBKD',
        value:'Kinh doanh',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Departments', null, {});
  }
};
