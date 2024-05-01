const { models } = require('../../sequelize');
const { getIdParam, getRouteParams } = require('../helpers');

async function getAll(req, res) {
    const entity = getRouteParams(req);
    const query = await models[entity].findAll();

    res.status(200).json(query);
}

async function getById(req, res) {
    const id = getIdParam(req);
    const entity = getRouteParams(req);
    const query = await models[entity].findByPk(id);

    if (query) {
        res.status(200).json({
            message: 'Created succesfully',
            status: 'OK',
            data: req.body
        });
    } else {
        res.status(404).send('404 - Not found');
    }
}

async function create(req, res) {
    const entity = getRouteParams(req);

    if (req.body.id) {
        res.status(400).send(`Bad request: ID should not be provided, since it is determined automatically by the database.`);
    } else {
        await models[entity].create(req.body);
        res.status(200).json({
            message: 'Created succesfully',
            status: 'OK',
            data: req.body
        });
    }
}

async function update(req, res) {
    const id = getIdParam(req);
    const entity = getRouteParams(req);

    // We only accept an UPDATE request if the `:id` param matches the body `id`
    if (req.body.id === id) {
        await models[entity].update(req.body, {
            where: {
                id: id
            }
        });
        res.status(200).end();
    } else {
        res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
    }
}

async function remove(req, res) {
    const id = getIdParam(req);
    const entity = getRouteParams(req);

    await models[entity].destroy({
        where: {
            id: id
        }
    });
    res.status(200).end();
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
