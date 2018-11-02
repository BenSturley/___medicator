//
//  medicate_schema.js
//
const mongoose = require('mongoose');

const createSchema = function() {
    return mongoose.Schema({
        drug_name:          [String],
        dose_size:          [String],
        dose_datetime:      Date,
        lastModified:       Date,
        notes:              [String],
        // _id:             mongoose.Schema.Types.ObjectId
        _id:                String
    });
};

const schema = createSchema();

module.exports = {
    schema:     schema, 
    create:     createSchema
};