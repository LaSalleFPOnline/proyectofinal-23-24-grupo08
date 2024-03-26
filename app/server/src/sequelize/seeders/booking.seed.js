module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("bookings", [
        {
            date: "2021-12-31",
            time: "12:00:00",
            guests: 2,
            phone: "123456789",
            status: "pending",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            date: "2021-12-31",
            time: "12:00:00",
            guests: 5,
            phone: "123456789",
            status: "pending",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        ]);
    },
    
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("bookings", null, {});
    },
};
    
