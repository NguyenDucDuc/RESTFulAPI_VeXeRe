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
      "stations",
      [
        {
          name: "Bến xe miền tây",
          address: "395 Kinh Dương Vương, An Lạc, Bình Tân , Long An",
          province : "HCM",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },{
          name: "Bến xe Đà Nẵng",
          address: "Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng 550000",
          province : "DN",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
        },
        {
          name: "Bến xe miền Đồng",
          address: "371/48 trường chinh, phường 14 , Quận Tân Bình",
          province : "HCM",
          createdAt :"2022-03-27 12:38:32",
          updatedAt : "2022-03-27 12:38:32"
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
     await queryInterface.bulkDelete('stations', null, {});
  },
};
