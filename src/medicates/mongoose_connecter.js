// 
//  mongoose_connecter.js
//
const connect_fn = () => {
    const config = require('../config');
    const mongoose = require('mongoose');
    mongoose.connect(config.DB_uri);
    mongoose.Promise = global.Promise;
    // get default connection
    const db = mongoose.connection;
    return db;
};

module.exports = {
    connect:    connect_fn
};