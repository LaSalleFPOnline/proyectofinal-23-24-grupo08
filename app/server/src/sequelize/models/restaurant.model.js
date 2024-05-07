const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Restaurant = sequelize.define('restaurant', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        widgetCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        widgetDomains: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true
        },
        description: {
            type: DataTypes.STRING
        },
        phone: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        logo: {
            type: DataTypes.BLOB
        },
        openTime: {
            type: DataTypes.TIME
        },
        closeTime: {
            type: DataTypes.TIME
        },
        daysClosed: {
            type: DataTypes.STRING
        },
        capacity: {
            type: DataTypes.INTEGER
        },
        url: {
            type: DataTypes.STRING
        },
        validate: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        }
    });

    Restaurant.associate = (models) => {
        Restaurant.hasOne(models.user);
        Restaurant.hasMany(models.booking);

        Restaurant.belongsTo(models.booking);
    };

    return Restaurant;
};
