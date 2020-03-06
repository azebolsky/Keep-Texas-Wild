const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    rating: {type: Number, min: 1, max: 5, default: 3}
  }, {
    timestamps: true
});

const parkSchema = new Schema({
    parkName: {
        type: String,
        required: true
    },
    hasLake: {
        type: Boolean,
        default: false
    },
    numTrails: {
        type: Number,
        min: 0,
        max: 50,
        required: true
    },
    hasPrimitiveCamping: {
        type: Boolean,
        default: false
    },
    parkType: {
        type: String,
        enum: ['National', 'State']
    },
    image: {
        type: String
    },
    details: {
        type: String
    },
    reviews: [reviewSchema],
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Park', parkSchema);