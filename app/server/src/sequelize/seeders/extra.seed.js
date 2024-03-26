module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("extras", [
      {
        name: "Extra 1",
        description: "Description 1",
        price: 10.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Extra 2",
        description: "Description 2",
        price: 20.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("extras", null, {});
  },
};
