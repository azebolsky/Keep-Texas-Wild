const Profile = require('../models/profile');

module.exports = {
    new: newProfile,
    create
}

function create(req, res) {
    const profile = new Profile(req.body);
    profile.save(function(err) {
        console.log(profile);
        if (err) return res.render('profiles/new');
        res.redirect('/profiles');
    });
}

function newProfile(req, res) {
    console.log('line 19');
    Profile.find({}, function(err, profile) {
        res.render('profiles/new', {
            profile
        });
    });
}