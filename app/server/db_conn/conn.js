const { Pool } = require("pg");

const config = {
  user: "equipo08",
  host: "localhost",
  password: "password",
  database: "mydb",
  //port: '5432
};

const pool = new Pool(config);
