'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const hashPassword = await bcrypt.hashSync('123', bcrypt.genSaltSync(3));
    await queryInterface.bulkInsert('Users', [
      {
        name: 'admin',
        email:'admin@gmail.com',
        password:hashPassword,
        role_code:'role_1',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
