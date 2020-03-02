const Parks = require('../models/park');

module.exports = {
    index
}

function index(req, res) {
    res.render('/parks');
}