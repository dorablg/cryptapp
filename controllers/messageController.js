const Message = require('../models/Message');

exports.replyMessage = async (req, res) => {
    try {
        const { messageId, content } = req.body;

    // //    // // Validate the required fields
        if (!messageId || !content) {
            return res.status(400).json({ error: 'Both messageId and content are required' });
        }

        // Find the original message by messageId
        const originalMessage = await Message.findById(messageId);

        if (!originalMessage) {
            return res.status(404).json({ error: 'Message not found' });
        }

        // Create a reply message
        const reply = new Message({
            sender: req.user.id,  // Current user (from authMiddleware)
            recipient: originalMessage.sender,  // Reply to the original sender
            content,
        });

        // Save the reply message to the database
        await reply.save();

        // Respond with the reply message
        res.status(201).json({ message: reply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
