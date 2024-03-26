const { models } = require("../../sequelize");
const { getIdParam } = require("../helpers");

async function getAll(req, res) {
  const extras = await models.extra.findAll();
  res.status(200).json(extras);
}

async function getById(req, res) {
  const id = getIdParam(req);
  const extra = await models.extra.findByPk(id);
  if (extra) {
    res.status(200).json(extra);
  } else {
    res.status(404).send("404 - Not found");
  }
}

async function create(req, res) {
  if (req.body.id) {
    res
      .status(400)
      .send(
        `Bad request: ID should not be provided, since it is determined automatically by the database.`
      );
  } else {
    await models.extra.create(req.body);
    res.status(201).end();
  }
}

async function update(req, res) {
  const id = getIdParam(req);

  // We only accept an UPDATE request if the `:id` param matches the body `id`
  if (req.body.id === id) {
    await models.extra.update(req.body, {
      where: {
        id: id,
      },
    });
    res.status(200).end();
  } else {
    res
      .status(400)
      .send(
        `Bad request: param ID (${id}) does not match body ID (${req.body.id}).`
      );
  }
}

async function remove(req, res) {
  const id = getIdParam(req);
  await models.extra.destroy({
    where: {
      id: id,
    },
  });
  res.status(200).end();
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
