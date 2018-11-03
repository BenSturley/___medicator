//
// config.js
//
const config = function() {

    const app_globals = require('./globals');

    return {
        //
        // debug
        RANDOM_number:          Math.random(),

        //
        // pre-dist
        PRE_sandbox:            false, 
        PRE_save_records:       false, 
        PRE_load_records:       true, 
        PRE_delete_records:     false,
        PRE_drop_db:            false,

        // 
        // app
        APP_name:               'Medicator',
        APP_globals:            app_globals,

        //
        // database
        DB_uri:                 'mongodb://localhost:27017/testdb',
        DB_baseuri:             'mongodb://localhost:27017/',
        DB_name:                'testdb',

        //
        // tests
        TESTS_run_init:         true,

    };
};

module.exports = config();
                                                                                                                                                                                                     