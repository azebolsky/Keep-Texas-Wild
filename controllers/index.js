const User = require('../models/camper');

module.exports = {
    index
}

function index(req, res) {
    res.render('index', {
        user: req.user,
    });
}