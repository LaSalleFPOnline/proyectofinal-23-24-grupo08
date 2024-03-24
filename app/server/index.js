require("dotenv").config({ path: __dirname + "/.env" });

const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes go here
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
