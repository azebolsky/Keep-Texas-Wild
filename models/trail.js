const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trailSchema = new Schema({
    trailName: String,
    terrain: String,
    length: String
})

module.exports = mongoose.model('Park', parkSchema);