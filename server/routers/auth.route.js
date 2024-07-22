import express from 'express';
import { createAdmin, loginAdmin } from '../controllers/admin.controller.js';
import authMiddleware from '../middleware/auth.js'; 

const router = express.Router();

router.post('/create-admin', createAdmin);
router.post('/login', loginAdmin);

// Protect the following routes with the auth middleware
router.get('/some-protected-route', authMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route.' });
});

export default router;
