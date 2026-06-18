const express = require('express');
const router = express.Router();
const { counselorChat, assessReadiness } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

router.post('/counselor', counselorChat);
router.post('/assess-readiness', protect, assessReadiness);

module.exports = router;
