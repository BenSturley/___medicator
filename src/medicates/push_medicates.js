// 
//  push_medicates.js
// 
const pusher_fn = () => {

    const log = require('../log/log');
    // const config = require('../config');
    const globals = require('../globals');
    
    // create models array
    const models = require('./medicates_push/create_models');
    
    // connect
    const connection = require('./mongoose_connecter');
    connection.connect();
    
    let all_good = true;
    let saved_count = 0;
    
    // save each one
    let count = 0;
    models.forEach(
        model => {
            model.save(err => {
                if (err) {
                    all_good = false;
                    globals.handle_error(err);
                }
                else {
                    saved_count++;
                    log.msg(`Model saved: ${model.drug_name}`);
                }
            });
            
            count++;
            if ( count == models.length ) {
                const disconnecter = require('./mongoose_disconnecter');
                disconnecter.disconnect();
            }
        }

    );
    
    return {
        success:        all_good,
        saved_count:    saved_count
    };
};

module.exports = {
    save_data:      pusher_fn
};