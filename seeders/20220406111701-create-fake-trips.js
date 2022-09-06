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
      "trips",
      [
        {
          fromStation : 22,
          toStation : 23,
          startTime :'2022-03-27 12:38:32',
          price : 230000,
          createdAt : '2022-03-27 12:38:32',
          updatedAt : '2022-03-27 12:38:32'
        }, {
          fromStation : 22,
          toStation : 24,
          startTime :'2022-03-27 12:38:32',
          price : 243333,
          createdAt : '2022-03-27 12:38:32',
          updatedAt : '2022-03-27 12:38:32'
        }, {
          fromStation : 23,
          toStation : 22,
          startTime :'2022-03-27 12:38:32',
          price : 43235,
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

     await queryInterface.bulkDelete('trips', null, {});
  },
};
