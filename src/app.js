//
// app.js
//
const log = require('./log/log');
const config = require('./config');
// const globals = require('./globals');

//
// welcome
const mfn_runner = require('./app_mfn/mfn-runner');
mfn_runner.run();

//
// do ya stuff
//

/// sandbox
if ( config.PRE_sandbox ) {
    log.msg('** (Pre-dev) Executing Sandbox **');
    const sandbox = require('./tests/sandbox');
    sandbox.run();
}

// delete records
if ( config.PRE_delete_records ) {
    log.msg('** (Pre-dev) Deleting Medicate records **');
    const del = require('./medicates/medicates_delete');
    const success = del.delete_data();
    
    if ( success ) {
        log.msg('Medicates deleted.');
    } else {
        log.err('Deleting medicates failed.');
    }
}

// drop db
if ( config.PRE_drop_db ) {
    log.msg('** (Pre-dev) Dropping Database **');
    const dropper = require('./medicates/medicates_dropdb');
    const success = dropper.drop_db();
    
    if ( success ) {
        log.msg('Database dropped.');
    } else {
        log.err('Dropping database failed.');
    }
}

// save new records
if ( config.PRE_save_records ) {
    log.msg('** (Pre-dev) Saving Medicate records **');
    const push = require('./medicates/push_medicates');
    const push_result = push.save_data();
    const { success, saved_count } = push_result;
    if ( success ) {
        log.msg(`Medicates saved: ${saved_count}`);
    } else {
        log.err('Error saving medicates.');
    }
}

// load records
if ( config.PRE_load_records ) {
    log.msg('** (Pre-dev) Pulling Medicate records **');
    const pull = require('./medicates/pull_medicates');
    pull.pull_data();
}

//
// terminate
mfn_runner.run_term();
