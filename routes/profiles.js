const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');

// GET /profiles/index
router.get('/profiles', profilesCtrl.new);
router.post('/profiles/:id', profilesCtrl.create);

module.exports = router;