// 
//  mongoose_connecter.js
//
const connect_fn = () => {
    
    const options = {
        useNewUrlParser:    true,
        reconnectTries:     30, //Number.MAX_VALUE,
        reconnectInterval:  2000,    //1000 ,
        keepAlive:          1, 
        connectTimeoutMS:   30000
        };
    
    // const log = require('../log/log');
    // const config = require('../config');
    const mongoose = require('mongoose');
    // const cn_promise = mongoose.connect(config.DB_uri, { useNewUrlParser: true } );
    // const db = mongoose.connect( config.DB_uri, options );
    mongoose.Promise = global.Promise;
    const cn = mongoose.connection;
    return cn;

    // const config = require('../config');
    // const mongoose = require('mongoose');
    // let connect = () => {
    //     return mongoose.connect(config.DB_uri, options).then(() => {
    //         console.log('connect: success');
    //     }).catch(err => {
    //         console.log(`connect: error: ${err}`);
    //         throw err; // <-- this is the important bit
    //     });
    // };

    // connect();
    // return mongoose.connection;
};

module.exports = {
    connect:    connect_fn
};