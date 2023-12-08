"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Employees", {
      employee_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      full_name: {
        type: Sequelize.STRING,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING, 
      },
      gender: {
        type: Sequelize.STRING, defaultValue: 'Male'
      },
      dayOfBirth: {
        type: Sequelize.DATE, 
      },
      department_id: {
        type: Sequelize.STRING, 
      },
      position_id: {
        type: Sequelize.STRING, 
      },
      deleted: {
        type: Sequelize.STRING,defaultValue : '0' 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Employees");
  },
};
