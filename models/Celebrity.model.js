//  Add your code here
const mongoose = require('mongoose');

const celebritiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    }
});

const Celebritiy = mongoose.model('Celebrity', celebritiesSchema);

module.exports = Celebritiy;