// 
//  medicates_delete.js
// 
const log = require('../log/log');

const delete_fn = () => {

    const model = require('./medicate_model');
    let ok = true;
    model.remove(
        {},
        (err) => {
            ok = false;
            log.err(`Error deleting models (.remove()): ${err}`);
        }
        );

    return ok;
};

module.exports = {
    delete_data:        delete_fn,
};