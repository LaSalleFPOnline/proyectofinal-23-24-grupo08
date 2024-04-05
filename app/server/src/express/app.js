const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.js"); //borrar

const routes = {
  // basics operations
  user: require("./routes/crud"),
  restaurant: require("./routes/crud"),
  booking: require("./routes/crud"),
  extra: require("./routes/crud"),

  // auth
  userAuth: require("./routes/auth"),
  // add more routes here
};

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes); //yo

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
