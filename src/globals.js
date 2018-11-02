//
// globals.js
//
const globals = () => {

    const config    = require('./config');
    const log       = require('./log/log');

    const error_handler_fn = err => {
        log.err(err);
    };

    return {
        TERM_CODE:          0,
        config:             config,

        handle_error:       error_handler_fn

    }
}

module.exports = globals();