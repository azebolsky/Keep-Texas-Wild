const Profile = require('../models/user');

module.exports = {
    // new: newProfile,
    index
}

function index(req, res) {
    res.render('profiles/index');
}