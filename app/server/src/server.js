const app = require("./app");
const http = require("http");
const { PORT } = require("./config/config");
const { connectToDB } = require("./db");
const { connectToORM } = require("../ormconfig");

connectToDB();
connectToORM();

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
