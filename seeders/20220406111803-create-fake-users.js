"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: 'TranHao',
          email:'hao@gmail.com',
          password:'123123',
          numberPhone:'123123',
          type: 'ADMIN',
          avatar :'sd',
          createdAt:'2022-03-27 12:38:32',
          updatedAt:'2022-03-27 12:38:32'
        },
        {
          name: 'DucNguyen',
          email:'ducnguyen@gmai.com',
          password:'123123',
          numberPhone:'543265',
          type: 'ADMIN',
          avatar :'sdsds',
          createdAt:'2022-03-27 12:38:32',
          updatedAt:'2022-03-27 12:38:32'
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  },
};
