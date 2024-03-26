const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const Extra = sequelize.define("extra", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.NOW,
    },
  });

  Extra.associate = (models) => {
    Extra.belongsTo(models.booking);
  }

  return Extra;
};
