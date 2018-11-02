//  
//  app_mfn/
//
//  welcome.js
//  
const welcome_fn = () => {
    //
    // generate message
    const config = require('../config');
	const term_msg = `-={ WELCOME to ${config.APP_name} }=-`;
    const msg_lines = ('~').repeat(term_msg.length);

    //
    // output
    const log = require('../log/log');
	log.msg(msg_lines);
	log.msg(term_msg);
	log.msg(msg_lines);
};

module.exports = {
    run_mfn:    welcome_fn
};
