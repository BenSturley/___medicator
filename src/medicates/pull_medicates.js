//
//  pull_medicates.js
//  
const log = require('../log/log');
// const config = require('../config');
const globals = require('../globals');

const root_puller_fn = async () => {
    
    // // get schema
    // const schema_getter = require('./medicates-pull/get_schema');
    // const schema = schema_getter.schema;
    
    // // get model
    // const model_getter = require('./medicates-pull/get_model');
    // const model = model_getter.get_model(schema);
    
    // get model
    const model = require('./medicates-pull/get_model');

    // connect
    const connecter = require('./mongoose_connecter');
    connecter.connect();
    
    // find models
    const query = model.find();
    query.select( 'drug_name dose_size dose_datetime lastModified notes _id' );
    //query.limit(1000);
    query.sort({ dose_datetime: -1 });
    
    //
    // this is experimental!
    //
    let recordsPromise = null;
    const q = model
        .find( {} );
        //.where('drug_name').equals('diacetylmorphine')
        //.where('butt-size').gt(11).lt(40)
        //.limit(1000)
        q.sort({ dose_datetime: -1 });
        q.select( 
            'drug_name dose_size dose_datetime lastModified notes _id' 
            );
    await q.exec(
            function(err, recs) {
                recordsPromise = new Promise(
                    (resolve, reject) => {
                        if (err) {
                            //globals.handle_error(err);       
                            reject(err);
                        }
                        else {
                            resolve(recs);
                        }
                    }
                );
            }
        );

    // get results
    let records = null;
    recordsPromise
            .then(
                recs => {
                    records = recs;
                }
            )
            .catch(
                err => {
                    log.err(`Error saving Medicates pre-dev: ${err}`);
                    globals.handle_error(err);
                }
            );
    
    // convert data
    const data = records;

    // disconnect
    require('./mongoose_disconnecter').disconnect();

    // return the data
    return data;
};

// do the work
const root_data = root_puller_fn();

// whack is into a function to give it to the gitfuckhead using it
const puller_fn = () => {
    log.msg('Pulling object data');
    const data = root_data;
    return data;
};
module.exports = {
    pull_data:  puller_fn
};
