const Profile = require('../models/profile');

module.exports = {
    new: newProfile,
    create
}

function create(req, res) {
    const profile = new Profile(req.body);
    profile.save(function(err) {
        if (err) return res.render('profiles/new');
        res.redirect('/profiles');
    });
}

function newProfile(req, res) {
    res.render('profiles/new');
}