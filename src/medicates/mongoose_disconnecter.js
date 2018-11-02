// 
//  mongoose_disconnecter.js
//
const disconnect_fn = () => {
    const mongoose = require('mongoose');
    mongoose.connection.close();
};

module.exports = {
    disconnect:     disconnect_fn
};