// 
//  push_medicates.js
// 
const pusher_fn = () => {

    const log = require('../log/log');
    // const config = require('../config');
    // const globals = require('../globals');
    const disconnector = require('./mongoose_disconnecter');
    
    // create models array
    const models = require('./medicates_push/create_models');
    
    // connect
    const connection = require('./mongoose_connecter');
    // connection.connect();
    

    let all_good = true;
    let saved_count = 0;

    // save each one
    // let count = 0;
    (async () => {
        await models.forEach(
            model => {
                connection.connect();
                model.save(err => {
                    if (err) {
                        all_good = false;
                        log.err(`Error saving model: ${err}`);
                        //globals.handle_error(err);
                    }
                    else {
                        // saved_count++;
                        log.msg(`Model saved: ${model.drug_name}`);
                    }
                    saved_count++;
                    log.msg(`Model saved: ${model.drug_name}`);
                    disconnector.disconnect();
                });

                const mongoose = require('mongoose');
                Promise.all(mongoose.modelNames().map(model => mongoose.model(model).ensureIndexes()));
                mongoose.disconnect();
                // disconnector.disconnect();
                
                // count++;
                // if ( count == models.length ) {
                //     const disconnecter = require('./mongoose_disconnecter');
                //     disconnecter.disconnect();
                // }
            }
        );
    })();
    
    try {
        const disconnecter = require('./mongoose_disconnecter');
        disconnecter.disconnect();
    }
    catch (err) {
        log.err(`Error disconnecting: ${err}`);
    }
    
    return {
        success:        all_good,
        saved_count:    saved_count
    };
};

module.exports = {
    save_data:      pusher_fn
};