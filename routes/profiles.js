const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');

// GET /profiles/index
router.get('/profiles/new', profilesCtrl.new);
router.post('/profiles', profilesCtrl.create);
router.get('/profiles', profilesCtrl.index);

module.exports = router;