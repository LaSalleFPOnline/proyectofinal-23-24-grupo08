const express = require("express");
const cors = require("cors");

const routes = {
    auth: require("./routes/authRoutes"),
    // add more routes here
}

const app = express();

app.use(cors());
app.use(express.json());

function makeHandlerAwareOfAsyncErrors(handler) {
  return async function (req, res, next) {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
}

app.get("/", (req, res) => {
    res.send({ message: "Welcome to the API" });
});

for (const [routeName, routeController] of Object.entries(routes)) {
	if (routeController.getAll) {
		app.get(
			`/api/${routeName}`,
			makeHandlerAwareOfAsyncErrors(routeController.getAll)
		);
    }
    // add more HTTP methods here
}

module.exports = app;