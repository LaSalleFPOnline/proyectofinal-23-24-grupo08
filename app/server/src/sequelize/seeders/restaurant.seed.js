module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert("restaurants", [
        {
            userId: 1,
            name: "Restaurant 1",
            description: "Description 1",
            phone: "123456789",
            address: "Address 1",
            logo: "Logo 1",
            openTime: "12:00:00",
            closeTime: "22:00:00",
            daysClosed: "Monday",
            capacity: 50,
            url: "URL 1",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            userId: 1,
            name: "Restaurant 2",
            description: "Description 2",
            phone: "123456789",
            address: "Address 2",
            logo: "Logo 2",
            openTime: "12:00:00",
            closeTime: "22:00:00",
            daysClosed: "Tuesday",
            capacity: 50,
            url: "URL 2",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("restaurants", null, {});
    },
};

