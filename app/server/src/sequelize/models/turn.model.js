const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
    const Turn = sequelize.define('turn', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            defaultValue: 'pending',
        }
        
    });

    Turn.associate = (models) => {
        Turn.belongsTo(models.booking); 
    };

    return Turn;
};
