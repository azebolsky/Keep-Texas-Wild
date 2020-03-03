const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');

// GET /profiles/index
router.get('/new', profilesCtrl.new);
router.post('/', profilesCtrl.create);

module.exports = router;