module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        username: "admin",
        firstName: "Admin",
        lastName: "Admin",
        email: "admin@email.com",
        isAdmin: true,
        password: "admin",
        createdAt: new Date(),
        rol: "admin",
        updatedAt: new Date(),
      },
      {
        username: "user",
        firstName: "User",
        lastName: "User",
        email: "user@email.com",
        isAdmin: false,
        password: "user",
        createdAt: new Date(),
        rol: "user",
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
