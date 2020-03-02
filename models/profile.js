const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId
    },
    aboutInfo: {
        type: String,
        required: true
    },
    journal: [],
    phoneNumber: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);