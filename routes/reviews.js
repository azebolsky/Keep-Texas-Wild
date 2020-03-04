const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

router.post('/parks/:id/reviews', reviewsCtrl.create);
router.put('/parks/:id', reviewsCtrl.update);
router.delete('/parks/:id', reviewsCtrl.delete);

module.exports = router;