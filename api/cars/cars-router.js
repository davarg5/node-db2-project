const express = require('express');
const router = express.Router();

const Car = require('./cars-model');

router.get('/', (req, res) => {
    Car.getAll()
        .then(cars => {
            res.status(200).json(cars);
        })
        .catch(error => {
            res.status(500).json({ message: error.message })
        })
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Car.getById(id)
        .then(car => {
            res.status(200).json(car);
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
});

router.post('/', (req, res) => {
    const newCar = req.body;
    console.log(newCar);
    Car.create(newCar)
        .then(car => {
            res.status(201).json(car);
        })
        .catch(error => {
            res.status(500).json({ message: error.message });
        });
});

module.exports = router;