const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');

router.get('/profiles/new', profilesCtrl.new);
router.post('/profiles', profilesCtrl.create);

module.exports = router;