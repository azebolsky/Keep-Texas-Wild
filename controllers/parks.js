const Parks = require('../models/park');

module.exports = {
    index,
    new: newPark,
    create,
    show
}

function show(req, res) {
    Parks.findById(req.params.id, function(err, park) {
        console.log(req.params.id);
        res.render('parks/show', {park});
    });
}

function create(req, res) {
    // convert checkboxes to booleans
    req.body.hasLake = !!req.body.hasLake;
    req.body.hasPrimitiveCamping = !!req.body.hasPrimitiveCamping;
    const park = new Parks(req.body);
    park.save(function(err) {
        if (err) return res.render('parks/new');
        res.redirect('/parks');
    })
}

function newPark(req, res) {
    res.render('parks/new');
}

function index(req, res) {
    Parks.find({}, function(err, parks) {
        res.render('parks/index', {parks});
    });
}