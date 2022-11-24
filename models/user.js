const mongoose = require('mongoose');

const userClass = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('User', userClass);