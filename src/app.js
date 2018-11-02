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
if ( config.PRE_save_records ) {
    log.msg('** (Pre-dev) Saving Medicate records **');
    const push = require('./medicates/push_medicates');
    const push_result = push.save_data();
    const { success, saved_count } = { push_result };
    if ( success ) {
        log.msg(`Medicates saved: ${saved_count}`);
    } else {
        log.err('Error saving medicates.');
    }
}

if ( config.PRE_load_records ) {
    log.msg('** (Pre-dev) Pulling Medicate records **');
    const pull = require('./medicates/pull_medicates');
    pull.pull_data();
}

//
// terminate
mfn_runner.run_term();
