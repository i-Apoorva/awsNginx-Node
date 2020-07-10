const readLog = require("../services/readLog")

exports.readLog = async (req,res)=> {
    try {
        const entries = await readLog();
        entries.shift()
        res.render('dashboard', {entries});
    } catch(err) { res.sendStatus(500); }
}

exports.filterLog = async (req,res)=> {
    const {ip, date}= req.query;
    //const ipregex = new RegExp("/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/")
    try {
        const entries = await readLog();
        entries.shift()
        let filtered = entries;
        if(ip) {
            filtered = filtered.filter((entry) => entry.includes(ip))
        }
        if(date) {
            filtered = filtered.filter((entry) => entry.includes(date))
        }
        console.log('in filter', {filtered})
        res.render('dashboard', {entries : filtered});
    } catch(err) { res.sendStatus(500); }
}