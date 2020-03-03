const Profile = require('../models/profile');

module.exports = {
    new: newProfile,
    create,
    show,
    edit,
    update
}

function update(req, res) {
    // Profile.update(req.body, req.params.id);
    Profile.findByIdAndUpdate(req.params.id, req.body, function() {
        res.redirect(`/profiles/${req.params.id}`);
    });
}

function edit(req, res) {
    Profile.findById((req.params.id), function(err, profile) {
        // if (!profile.user.equals(req.user._id)) return res.redirect('/profiles');
        console.log(profile);
        res.render('profiles/edit', {profile});
    });
}

function show(req, res) {
    Profile.findById(req.params.id, function(err, profile) {
        res.render('profiles/show', { profile });
    })
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