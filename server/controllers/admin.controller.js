import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const secret = 'asdfghjklsdfghjkrtyertyubn'; // Replace with your actual secret key

export const createAdmin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new admin
        const newAdmin = await prisma.admin.create({
            data: {
                username,
                password: hashedPassword
            }
        });

        // Generate a token
        const token = jwt.sign({ id: newAdmin.id, username: newAdmin.username }, secret, {
            expiresIn: '1h'
        });

        res.status(201).json({
            success: true,
            message: 'Admin created successfully',
            admin: {
                id: newAdmin.id,
                username: newAdmin.username
            },
            token
        });
    } catch (error) {
        console.error('Error creating admin:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while creating the admin',
            error: error.message 
        });
    }
};

export const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        
        const admin = await prisma.admin.findFirst({
            where: { username }
        });

        if (!admin) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate a token
        const token = jwt.sign({ id: admin.id, username: admin.username }, secret, {
            expiresIn: '1h'
        });

        res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            admin: {
                id: admin.id,
                username: admin.username
            },
            token
        });
    } catch (error) {
        console.error('Error logging in admin:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while logging in the admin',
            error: error.message // Include detailed error message
        });
    }
};
