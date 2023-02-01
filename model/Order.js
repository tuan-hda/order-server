const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    name : {type: String},
    address : {type: String},
    phone : {type: String},
    gmail : {type: String},
    status : {type: String, default: "false"},
    order : {type: Array}
})

module.exports = mongoose.model('Order', Order);
