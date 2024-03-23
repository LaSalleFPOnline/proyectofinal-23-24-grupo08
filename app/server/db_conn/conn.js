const { Pool } = require("pg");

const config = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST || "localhost",
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  port: process.env.POSTGRES_PORT || 5432,
};

const pool = new Pool(config);
