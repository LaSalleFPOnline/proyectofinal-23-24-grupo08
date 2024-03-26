const express = require("express");
const cors = require("cors");

const routes = {
  user: require("./routes/users"),
  // add more routes here
};

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
  if (routeController.getById) {
    app.get(
      `/api/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.getById)
    );
  }

  if (routeController.create) {
    app.post(
      `/api/${routeName}`,
      makeHandlerAwareOfAsyncErrors(routeController.create)
    );
  }

  if (routeController.update) {
    app.put(
      `/api/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.update)
    );
  }

  if (routeController.remove) {
    app.delete(
      `/api/${routeName}/:id`,
      makeHandlerAwareOfAsyncErrors(routeController.remove)
    );
  }
}

module.exports = app;
