const Pool = require("pg").Pool;
const dotenv = require("dotenv");

dotenv.config({ path: __dirname + "/.env" });

const connectToDB = async () => {
  try {
    const pool = new Pool({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    });

    await pool.connect();
    const res = await pool.query("SELECT NOW()");
    console.log(res);
    await pool.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectToDB };