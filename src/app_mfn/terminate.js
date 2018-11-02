//  
//  app_mfn/
//
//  terminate.js
//  
const terminate_fn = () => {
    //
    // generate message
    const globals = require('../globals');
	const term_msg = `-={ TERMINATE|TERMCODE=[${globals.TERM_CODE}] }=-`;
    const msg_lines = ('~').repeat(term_msg.length);

    //
    // output
    const log = require('../log/log');
	log.msg(msg_lines);
	log.msg(term_msg);
	log.msg(msg_lines);
};

module.exports = {
    run_mfn:    terminate_fn
};
