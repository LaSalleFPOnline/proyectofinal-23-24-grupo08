const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Booking = sequelize.define('booking', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idRestaurant: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'restaurants',
                key: 'id'
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false
        },
        guests: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'pending'
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

    Booking.associate = (models) => {
        Booking.hasOne(models.restaurant);
        //Booking.hasOne(models.user);
        Booking.hasMany(models.extra);

        //Booking.belongsTo(models.user);
        Booking.belongsTo(models.restaurant);
    };

    return Booking;
};
