const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
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
        max: 20,
        required: true
    },
    hasElectricCamping: {
        type: Boolean,
        default: false
    },
    hasPrimitiveCamping: {
        type: Boolean,
        default: false
    },
    parkType: {
        type: String,
        enum: ['National', 'State']
    },
    reviews: [reviewSchema],
    favorites: [{}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Park', parkSchema);