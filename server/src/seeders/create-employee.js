'use strict';
let dataMock = []
for(let i = 5; i <100 ; i++){
  let number = Math.floor(Math.random() * 10)
  let random = number % 2
  let item =  {
        employee_id:'AD'+ i.toString().padStart(4,'0'),
        full_name: (random == 0 ? 'Nguyễn Văn Số '  : 'Trần Thị Nữ Số ') + i,
        first_name:'Số' + i,
        phone:'0123445556',
        email:'email@gmail.com',
        gender: random == 0 ? 'male' :'female',
        dayOfBirth:new Date('05-05-1990'),
        department_id	:'PBKD',
        position_id:'CVMB',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      }
      dataMock.push(item)
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Employees', [
      {
        employee_id:'AD0001',
        full_name: 'Trương Minh Tâm',
        first_name:'Tâm',
        phone:'0123445556',
        email:'tamtm@gmail.com',
        gender:'male',
        dayOfBirth:new Date('05-05-1990'),
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
        gender:'male',
        dayOfBirth:new Date('05-05-1990'),
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
        gender:'male',
        dayOfBirth:new Date('05-05-1990'),
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
        gender:'male',
        dayOfBirth:new Date('05-05-1990'),
        department_id	:'PBNS',
        position_id:'CVMB',
        deleted:'0',
        createdAt: new Date('10-10-2023'),
        createdAt: new Date('10-10-2023')
      },



    ].concat(dataMock), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};
