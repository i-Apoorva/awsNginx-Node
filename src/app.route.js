var express = require('express');
var router = express.Router();
const logsController = require('./controllers/LogsController')
var authMiddleware = require('./middleware/authMiddleware');

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/dashboard', authMiddleware.Validate, logsController.readLog)
router.get('/dashboard/filter', authMiddleware.Validate, logsController.filterLog)

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = router;