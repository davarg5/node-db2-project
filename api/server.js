const express = require('express');
const server = express();

const carsRouter = require('./cars/cars-router.js');
server.use('/api/cars', carsRouter);

server.use(express.json);

module.exports = server;