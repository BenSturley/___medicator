// 
//  create_models.js
// 
const log = require('../../log/log');
// const config = require('../config');
// const globals = require('../globals');

// get model
const model = require('../medicate_model');

// create instances
const obj_notes = 'Added during initial development while patient is active.';

const meds = [];
// zomorph
const med1 = new model(
    {
        drug_name:          'Zomorph', 
        dose_size:          '10 mg',
        dose_datetime:      new Date(Date.parse('1 November 2018 16:40')), 
        lastModified:       new Date(),
        notes:              obj_notes,
        _id:                '1'
    }
);
meds.push(med1);
log.msg("Medicate 1 created: Zomorph 10mg");

// pregablin
const med2 = new model(
    {
        drug_name:          'Pregablin', 
        dose_size:          '325 mg',
        dose_datetime:      new Date(Date.parse('1 November 2018 16:40')),
        lastModified:       new Date(),
        notes:              obj_notes,
        _id:                '2'
    }
);
meds.push(med2);
log.msg("Medicate 2 created: Pregablin 325mg");

// flucloxacillin
const med3 = new model(
    {
        drug_name:          'Flucloxacillin', 
        dose_size:          '1 g',
        dose_datetime:      new Date(Date.parse('1 November 2018 16:40')), 
        lastModified:       new Date(),
        notes:              obj_notes,
        _id:                '3'
    }
);
meds.push(med3);
log.msg("Medicate 3 created: Flucloxacillin 1g");

// fucudin
const med4 = new model(
    {
        drug_name:          'Fucudin', 
        dose_size:          '500 mg',
        dose_datetime:      new Date(Date.parse('1 November 2018 16:40')), 
        lastModified:       new Date(),
        notes:              obj_notes,
        _id:                '4'
    }
);
meds.push(med4);
log.msg("Medicate 4 created: Fucudin 500mg");

// oramorph
const med5 = new model(
    {
        drug_name:          'Oramorph', 
        dose_size:          '30 mg',
        dose_datetime:      new Date(Date.parse('1 November 2018 16:40')), 
        lastModified:       new Date(),
        notes:              obj_notes,
        _id:                '5'
    }
);
meds.push(med5);
log.msg("Medicate 5 created: Oramorph 30mg");

// diazepam 
const med6 = new model(
    {
        drug_name:          'Diazepam', 
        dose_size:          '16 mg',
        dose_datetime:      new Date(Date.parse('1 November 2018 16:40')), 
        lastModified:       new Date(),
        notes:              obj_notes,
        _id:                '6'
    }
);
meds.push(med6);
log.msg("Medicate 6 created: Diazepam 16mg");

// export the bunch
module.exports = meds;