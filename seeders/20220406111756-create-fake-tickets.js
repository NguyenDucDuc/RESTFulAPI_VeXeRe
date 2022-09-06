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
      "Tickets",
      [
        {
          trip_id : 23,
          user_id : 8,
          createdAt : '2022-03-27 12:38:32',
          updatedAt : '2022-03-27 12:38:32'
        },
        {
          trip_id : 24,
          user_id : 9,
          createdAt : '2022-03-27 12:38:32',
          updatedAt : '2022-03-27 12:38:32'
        },
        {
          trip_id : 23,
          user_id : 9,
          createdAt : '2022-03-27 12:38:32',
          updatedAt : '2022-03-27 12:38:32'
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
     await queryInterface.bulkDelete('Tickets', null, {});
  },
};
