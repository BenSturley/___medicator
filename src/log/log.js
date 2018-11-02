//
//  log.js
//
const log = function() {

    const output_msg = msg => {
        console.info(msg);
    };

    const output_err = err => {
        console.error(err);
    };

    const output_notice = msg => {
        console.log(`*** NOTICE: ***`);
        console.log(`*** ${msg} ***`);
    };

    return {
        msg:        output_msg,
        err:        output_err,
        notice:     output_notice,
    };
};

module.exports = log();