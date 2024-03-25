const applyExtraSetup = (sequelize) => {
  const { user, restaurant, booking, extra } = sequelize.models;

  restaurant.hasOne(user, {
    foreignKey: "userId",
  });
  user.belongsTo(restaurant);

  booking.hasOne(user, {
    foreignKey: "userId",
  });
  user.belongsTo(booking);

  booking.hasOne(restaurant, {
    foreignKey: "restaurantId",
  });
  restaurant.belongsTo(booking);

  // TODO: Fix this association
  // booking.hasMany(extra)
  // extra.belongsTo(booking);
};

module.exports = { applyExtraSetup };