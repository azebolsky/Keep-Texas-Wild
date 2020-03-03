const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    fullName: {
        type: String,
        required: true
    },
    aboutInfo: {
        type: String,
        required: true
    },
    // journal: [],
    phoneNumber: {
        type: Number,
        match: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Profile', profileSchema);