const express = require('express');
const router = express.Router();
const { sendMessage, getMessages, replyMessage } = require('../controllers/messageController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.post('/send', authMiddleware, sendMessage); // Send a message
router.get('/', authMiddleware, getMessages); // Get messages
router.post('/reply', authMiddleware, replyMessage);
module.exports = router;
