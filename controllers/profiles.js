const Profile = require('../models/profile');

module.exports = {
    new: newProfile,
    create,
    index
}

function index(req, res) {
    Profile.find({}, function(err, profile) {
        res.render('profiles/index', {
            profile
        });
    });
}

function create(req, res) {
    const profile = new Profile(req.body);
    profile.save(function(err) {
        console.log(profile);
        console.log(err);
        if (err) return res.render('profiles/new');
        res.redirect('/profiles');
    });
}

function newProfile(req, res) {
    Profile.find({}, function(err, profile) {
        console.log(err);
        console.log(profile);
        res.render('profiles/new', {
            profile
        });
    });
}