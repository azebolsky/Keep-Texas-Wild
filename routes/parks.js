const express = require('express');
const router = express.Router();
const parksCtrl = require('../controllers/parks');
const isAuthenticated = require('../config/authMiddleware');

router.get('/', isAuthenticated, parksCtrl.index);
router.get('/new', parksCtrl.new);
router.post('/', parksCtrl.create);
router.get('/:id', parksCtrl.show);

module.exports = router;