const Parks = require('../models/park');

module.exports = {
    create,
    update,
    delete: deleteReview
};

function deleteReview(req, res) {
    Parks.findOne({ 'reviews._id': req.params.id }, function (err, park) {
        const reviewSubdoc = park.reviews.id(req.params.id);
        if (!reviewSubdoc.createdBy.equals(req.user && req.user.id)) return res.redirect(`/parks/${park._id}`);
        reviewSubdoc.remove();
        park.save(function (err) {
            res.redirect(`/parks/${park._id}`);
        });
    });
}

function update(req, res) {
    Parks.findOne({ 'reviews._id': req.params.id }, function (err, park) {
        const reviewSubdoc = park.reviews.id(req.params.id);
        if (!reviewSubdoc.createdBy.equals(req.user && req.user.id)) return res.redirect(`/parks/${park._id}`);
        req.body.createdBy = req.user._id;
        reviewSubdoc.content = req.body.content;
        reviewSubdoc.rating = req.body.rating;
        park.save(function (err) {
            res.redirect(`/parks/${park._id}`);
        });
    });
}

function create(req, res) {
    Parks.findById(req.params.id, function (err, park) {
        req.body.createdBy = req.user._id;
        req.body.userName = req.user.name;
        park.reviews.push(req.body);
        park.save(function (err) {
            res.redirect(`/parks/${park._id}`);
        });
    });
}