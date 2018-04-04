const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// employee schema
const emp = new Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    married: {
        type: Boolean
    }

});

const employee = mongoose.model('employee', emp);

module.exports = employee;
