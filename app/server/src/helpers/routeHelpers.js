function getIdParam(req) {
    const id = req.params.id;
    if (/^\d+$/.test(id)) {
        return Number.parseInt(id, 10);
    }
    throw new TypeError(`Invalid ':id' param: "${id}"`);
}

function getRouteParams(req) {
    const entity = req.originalUrl.split('/')[2];
    return entity;
}

module.exports = { getIdParam, getRouteParams };
