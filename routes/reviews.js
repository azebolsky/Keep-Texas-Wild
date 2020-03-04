const express = require('express');
const router = express.Router();
const isAuthenticated = require('../config/authMiddleware');
const reviewsCtrl = require('../controllers/reviews');

router.post('/parks/:id/reviews', reviewsCtrl.create);
router.put('/reviews/:id', isAuthenticated, reviewsCtrl.update);
router.delete('/reviews/:id', isAuthenticated, reviewsCtrl.delete);

module.exports = router;