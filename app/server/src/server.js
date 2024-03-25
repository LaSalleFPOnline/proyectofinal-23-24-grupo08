const app = require("./express/app");
const sequelize  = require("./sequelize");
const { PORT } = require("./config/config");

async function assertDatabaseConnectionOk() {
  console.log(`Checking database connection...`);
  try {
    await sequelize.authenticate();
    console.log("Database connection OK!");
  } catch (error) {
    console.log("Unable to connect to the database:");
    console.log(error.message);
    process.exit(1);
  }
}

const init = async () => {
  await assertDatabaseConnectionOk();

  app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`);
  });
};

init();
