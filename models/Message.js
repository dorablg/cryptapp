// Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // References the User model
    required: true
  },
  recipient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // References the User model
    required: true
  },
  content: {
    type: String,
    required: true // The message content is required
  },
  timestamp: {
    type: Date,
    default: Date.now // Timestamp for when the message was sent
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
