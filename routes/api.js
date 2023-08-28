// api routes

// Import modules
const express = require('express');
const router = express.Router();

// Import Ninja model
const Ninja = require('../models/ninja.js');

// Get a list of ninjas from the database
router.get('/ninjas', (req, res, next) => {
    Ninja.find({}).then((ninjas) => {
        res.send(ninjas);
    });
});

// Add a new ninja to the database
router.post('/ninjas', (req, res, next) => {
    Ninja.create(req.body).then((ninja) => {
        res.send(ninja);
    }).catch(next);
});

module.exports = router;
