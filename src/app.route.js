var express = require('express');
var router = express.Router();
const readLog = require("./services/readLog")
var authMiddleware = require('./middleware/authMiddleware');

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/dashboard', authMiddleware.Validate, async (req, res) => {
    try {
        const entries = await readLog();
        res.render('dashboard', {entries: entries});
    } catch(err) { res.sendStatus(500); }
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = router;