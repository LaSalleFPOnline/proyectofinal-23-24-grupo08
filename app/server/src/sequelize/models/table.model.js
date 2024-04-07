const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => { 
    const Table = sequelize.define('table', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'available',
        }
    });

    Table.associate = (models) => {
        Table.belongsTo(models.restaurant);
        Table.belongsTo(models.booking);
    };

    return Table;
};