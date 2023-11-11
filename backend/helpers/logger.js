const dayjs = require("dayjs")
const fse = require('fs-extra');
const path = require('path');
const logger = {


    info: (message) => {
        const log = `[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] [INFO] ${message}`
        console.log(log);
        logger.writeLogFile(log);
    },
    error: (message) => {
        const log = `[${dayjs().format('YYYY-MM-DD HH:mm:ss')}] [ERROR] ${message}`
        console.log(log);
        logger.writeLogFile(log);
    },

    writeLogFile: async (message) => {
        const logFile = path.resolve(`./logs/${dayjs().format('YYYY-MM-DD')}.log`);
        fse.open(logFile, 'a', (err, fileHandle) => {
            if (err) {
                console.log(err);
            } else {
                fse.appendFile(fileHandle, message + '\n', (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            }
        });
    }
}


export default logger;