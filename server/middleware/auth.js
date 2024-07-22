import jwt from 'jsonwebtoken';

const secret = 'asdfghjklsdfghjkrtyertyubn'; // Replace with your actual secret key

const authMiddleware = (req, res, next) => {
    // Get the token from the headers
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

export default authMiddleware;
