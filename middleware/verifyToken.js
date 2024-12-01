const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Expect the token in the format "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach the decoded token payload (user info) to the request object
        next();
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = verifyToken;
