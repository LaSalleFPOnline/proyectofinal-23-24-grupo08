const { Sequelize } = require("sequelize");
const { applyExtraSetup } = require("./extra-setup");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "../../.env" });

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  {
    host: process.env.PGHOST,
    dialect: "postgres",
    port: process.env.PGPORT,
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const modelDefiners = [
  require("./models/user.model"),
  require("./models/restaurant.model"),
  require("./models/booking.model"),
  require("./models/extra.model"),
  // Add more models here...
];

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// TODO: Apply extra setup (e.g. associations) if needed and fix
applyExtraSetup(sequelize);

module.exports = sequelize;
