const fs = require('fs');

const readLog = () => {
    // const logFile = './logs/access.log';
    const logFile= 'src/services/logs/access.log'
    return new Promise((resolve, reject) => {
        fs.readFile(logFile, 'utf8', (err, contents) => {
            if(err) { reject(err); }
            console.log({contents})
            resolve(contents.toString().split(/\r?\n/).reverse());
        });
    });
};

module.exports = readLog;