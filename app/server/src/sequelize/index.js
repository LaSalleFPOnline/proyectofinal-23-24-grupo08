const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
const db = require("./models");
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

async function main() {
  try {
    await db.sequelize.sync({ force: true });
    console.log("Successfully run the function");
  } catch (err) {
    console.log("Error: ", err);
  }
}

main();

module.exports = sequelize;
