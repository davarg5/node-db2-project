const db = require('../../data/dbConfig');

module.exports = {
    getAll,
    create
};

function getAll() {
    return db('cars')
}

function create() {

}

