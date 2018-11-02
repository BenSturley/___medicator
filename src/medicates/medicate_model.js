// 
//  medicate_model.js
// 
const getter_fn = function( schema ) {

    if ( schema === undefined ) {
        throw new ReferenceError(
            'Mongoose schema is required to generate model.'
            );
    }
    
    const mongoose = require('mongoose');
    const model = mongoose.Model('Medicate', schema)
    return model;
};

module.exports = {
    get_model:  getter_fn
};
