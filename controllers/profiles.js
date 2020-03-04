const Profile = require('../models/profile');

module.exports = {
    new: newProfile,
    create,
    show,
    edit,
    update
}

function update(req, res) {
    Profile.findByIdAndUpdate(req.params.id, req.body, function() {
        res.redirect(`/profiles/${req.params.id}/show`);
    });
}

function edit(req, res) {
    Profile.findById((req.params.id), function(err, profile) {
        // if (!profile.user.equals(req.user._id)) return res.redirect('/profiles');
        res.render('profiles/edit', {profile});
    });
}

function show(req, res) {
    Profile.findById(req.params.id, function(err, profile) {
        console.log(profile);
        console.log(err);
        res.render('profiles/show', {
            profile,
            user: req.user
        });
    })
}

function create(req, res) {
    const profile = new Profile(req.body);
    profile.save(function(err) {
        if (err) return res.render('profiles/new');
        res.redirect(`profiles/${profile._id}`);
    });
}

function newProfile(req, res) {
    Profile.find({}, function(err, profile) {
        res.render('profiles/new', {
            profile
        });
    });
}