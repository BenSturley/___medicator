//
// sandbox.js
// 
const log = require('../log/log');

const run_current_fn = () => modelfind_fn();

const dates_fn = () => {

    try {
        const d = new Date();
        log.msg(`Sandbox: new d.toDateString(): ${d.toDateString()}`);    
    } 
    catch (err) {
        log.err(`Sandbox error: ${err}`);
    }

    try {
        const date_string1 = (new Date()).toDateString();
        log.msg(`Sandbox: date_string1: [${date_string1}]`);
        try {
            const parsed1 = Date.parse(date_string1);
            const newdate1 = new Date(parsed1);
            log.msg(`Sandbox: parsed date_string1: [${parsed1}]`);
            log.msg(`Sandbox: newdate1.toDateString(): [${newdate1.toDateString()}]`);
        } 
        catch (err) {
            log.err(`Sandbox error: ${err}`);
        }
    } 
    catch (err) {
        log.err(`Sandbox error: ${err}`);
    }

    try {
        const date_string2 = '31 October 2018 4:40pm';
        try {
            const parsed2 = Date.parse(date_string2);
            const newdate2 = new Date(parsed2);
            log.msg(`Sandbox: parsed date_string2: [${parsed2}]`);
            log.msg(`Sandbox: newdate2.toDateString(): [${newdate2.toDateString()}]`);
            log.msg(`Sandbox: newdate2.toTimeString(): [${newdate2.toTimeString()}]`);
            log.msg(`Sandbox: newdate2.toString(): [${newdate2.toString()}]`);
        } 
        catch (err) {
            log.err(`Sandbox error: ${err}`);
        }
    } 
    catch (err) {
        log.err(`Sandbox error: ${err}`);
    }

};

const dropdb_fn = () => {
    const config = require('../config');
    const mongoose = require('mongoose');
    mongoose.connect(config.DB_uri);
    mongoose.connection.dropDatabase();
    mongoose.connection.close();
};

const modelfind_fn = () => {
    const cn = require('../medicates/mongoose_connecter');
    cn.connect();
    const model = require('../medicates/medicate_model');
    log.msg('Sandbox: modelfind_fn: Finding...');
    model.find( {}
        ,
        (err, recs) => {
            if (err) { 
                log.err(`Sandbox: modelfind_fn: model.find() error: ${err}`)
            }
            else {
                recs.forEach(
                    rec => {
                        log.msg(`Sandbox: modelfind_fn: Record found: ${rec}`);
                    }
                );
            }
        });
    log.msg('Sandbox: modelfind_fn: Disconnecting...');
    require('../medicates/mongoose_disconnecter').disconnect();
};



module.exports = {
    run:                run_current_fn, 
    run_modelfind:      modelfind_fn,
    run_dropdb:         dropdb_fn,
    run_dates:          dates_fn
};    
