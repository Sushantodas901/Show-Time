const router = require('express').Router();
const Movies = require('../models/movies.js');
const Events = require('../models/events.js');
const Plays = require('../models/plays.js');
const Activity = require('../models/activities.js');
const Cast = require('../models/cast.js');

router.get('/movies', async (req, res, next) => {
    try {
        var result = await Movies.find();
        res.status(200).send(result);
        console.log('❤️ ❤️ ❤️');
    }
    catch (err) {
        res.status(500).send([]);
    }
    next();
})
router.get('/events', async (req, res, next) => {
    try {
        var result = await Events.find();
        res.status(200).send(result);
        console.log('❤️ ❤️ ❤️');
    }
    catch (err) {
        res.status(500).send([]);
    }
    next();
})
router.get('/plays', async (req, res, next) => {
    try {
        var result = await Plays.find();
        res.status(200).send(result);
        console.log('❤️ ❤️ ❤️');
    }
    catch (err) {
        res.status(500).send([]);
    }
    next();
})
router.get('/activities', async (req, res, next) => {
    try {
        var result = await Activity.find();
        res.status(200).send(result);
        console.log('❤️ ❤️ ❤️');
    }
    catch (err) {
        res.status(500).send([]);
    }
    next();
})
router.get('/cast/:name', async (req, res, next) => {
    try {
        var result = await Cast.find({ name: req.params.name });
        res.status(200).send(result);
        console.log('💛💛💛');
    }
    catch (err) {
        res.status(500).send([]);
    }
    next();
})

module.exports = router;