
// 
//  medicates_dropdb.js
// 
const log = require('../log/log');

const delete_fn = () => {

    const connect = require('./mongoose_connecter');
    const cn = connect.connect();
    let ok = true;
    try {
        // connection.db.dropDatabase();
        cn.dropDatabase();
    }
    catch (err) {
        ok = false;
        log.err(`Error dropping db: ${err}`);
    }

    const disconnect = require('./mongoose_disconnecter');
    disconnect.disconnect();

    return ok;
};

module.exports = {
    drop_db:        delete_fn,
};