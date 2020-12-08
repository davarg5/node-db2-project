const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    getById,
    create,
};

function getAll() {
    return db('cars');
}

function getById(id) {
    return db('cars').where('id', id).first();
}

async function create(car) {
    const newId = await db('cars').insert(car);
    return db('cars').where('id', newId).first();
}

