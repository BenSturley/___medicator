// 
//  medicate_model_gen.js
// 
const getter_fn = function( schema ) {

    if ( schema === undefined ) {
        throw new ReferenceError(
            'Mongoose schema is required to generate model.'
            );
    }
    
    const mongoose = require('mongoose');
    const model = mongoose.model('Medicate', schema);
    return model;
};

// module.exports = getter_fn();

module.exports = {
    get_model:  getter_fn
};
