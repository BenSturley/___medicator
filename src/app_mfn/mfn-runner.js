//
//  mfn-runner.js
//
const config = require('./mfn-config');

const terminator_fn = () => {
if ( config.terminate ) {
    const terminater = require('./terminate');
    terminater.run_mfn();
    }
};

const runner_fn = () => {
    

    //
    // init test
    if ( config.wee_test ) {
        const wee_tester = () => { 
            console.log('Well, seems to be working I guess.'); 
            
            // const d = Date.parse('23423423420');	//new Date();
            // console.log(`Parsed date: [${d}]`);
            // console.log(`.toDateString(): ${d.toString()}`);
        };
        wee_tester();
    }

    //
    // welcome msg
    if ( config.welcome ) {
        const welcomer = require('./welcome');
        welcomer.run_mfn();
    }


    //
    // term msg
    // terminator_fn();

};

module.exports = {
    run:        runner_fn,
    run_term:   terminator_fn
};