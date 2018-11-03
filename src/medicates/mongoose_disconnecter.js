// 
//  mongoose_disconnecter.js
//
const disconnect_fn = () => {
    const log = require('../log/log');
    try {
        const mongoose = require('mongoose');
        // mongoose.connection.close();
        mongoose.connection.base.connections[1].close();
    }
    catch (err) {
        log.err(`Error disconnecting database: ${err}`);
    }
};

module.exports = {
    disconnect:     disconnect_fn
};