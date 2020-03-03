const express = require('express');
const router = express.Router();
const profilesCtrl = require('../controllers/profiles');

// GET /profiles/index
router.get('/profiles/new', profilesCtrl.new);
router.post('/profiles', profilesCtrl.create);
router.get('/profiles', profilesCtrl.index);
router.get('/profiles/:id/edit', profilesCtrl.edit);
router.put('/profiles', profilesCtrl.update);

module.exports = router;