'use strict';
const dataMock = []
// for(const i = 5; i <100 ; i++){
  
//   const item =  {
//         employee_id:'AD'+ i.padStart(4,'0'),
//         full_name: 'Nguyễn văn,
//         first_name:'Tâm',
//         phone:'0123445556',
//         email:'tamtm@gmail.com',
//         gender:""
//         department_id	:'PBNS',
//         position_id:'CVLD',
//         deleted:'0',
//         createdAt: new Date('10-10-2023'),
//         createdAt: new Date('10-10-2023')
//       },
// }

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Positions', [
      {
        employee_id:'AD0001',
        full_name: 'Trương Minh Tâm',
        first_name:'Tâm',
        phone:'0123445556',
        email:'tamtm@gmail.com',
        department_id	:'PBNS',
        position_id:'CVLD',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },
      {
        employee_id:'AD0002',
        full_name: 'Trương Huỳnh Anh Thông',
        first_name:'Thông',
        phone:'0925578467',
        email:'thongtha@gmail.com',
        department_id	:'PBNS',
        position_id:'CVMB',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },
      {
        employee_id:'AD0003',
        full_name: 'Đinh Hoàng Vũ',
        first_name:'Vũ',
        phone:'0897784876',
        email:'vudh@gmail.com',
        department_id	:'PBNS',
        position_id:'CVMB',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },
      {
        employee_id:'AD0004',
        full_name: 'Phan Đình Trung',
        first_name:'Trung',
        phone:'0425598648',
        email:'trungpd@gmail.com',
        department_id	:'PBNS',
        position_id:'CVMB',
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
