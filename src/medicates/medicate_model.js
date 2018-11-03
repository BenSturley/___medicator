// 
//  medicate_model.js
// 
const schema = require('./medicates-pull/get_schema');
const gen_fn = require('./medicate_model_gen');
const model = gen_fn.get_model(schema);

module.exports = model;

// module.exports = {
//     get_model:  getter_fn
// };
