var express = require('express');
var router = express.Router();
const readLog = require("./services/readLog")
const logsController = require('./controllers/LogsController')
var authMiddleware = require('./middleware/authMiddleware');

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/dashboard', authMiddleware.Validate, logsController.readLog)
    // try {
    //     const entries = await readLog();
    //     entries.shift()
    //     res.render('dashboard', {entries});
    // } catch(err) { res.sendStatus(500); }


router.get('/dashboard/filter', authMiddleware.Validate, logsController.filterLog)
//     const {ip, date}= req.query;
//     //const ipregex = new RegExp("/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/")
//     try {
//         const entries = await readLog();
//         entries.shift()
//         let filtered = entries;
//         if(ip) {
//             filtered = filtered.filter((entry) => entry.includes(ip))
//         }
//         if(date) {
//             filtered = filtered.filter((entry) => entry.includes(date))
//         }
//         console.log('in filter', {filtered})
//         res.render('dashboard', {entries : filtered});
//     } catch(err) { res.sendStatus(500); }
// });



router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});


module.exports = router;