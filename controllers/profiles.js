const Profile = require('../models/user');

module.exports = {
    new: newProfile,
    create
}

function create(req, res) {
    Profile.create(req.body, function(err, profile) {
        res.redirect('/profiles');
    })
}

function newProfile(req, res) {
    res.render('profiles/new');
}