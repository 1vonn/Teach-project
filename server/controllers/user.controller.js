import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export const createUser = async (req, res) => {
  try {
    const { fullName, phoneNumber, location, email, password } = req.body;

    if (!fullName)
      return res.status(400).json({ success: false, message: "fullname is required" });
    if (!phoneNumber)
      return res.status(400).json({ success: false, message: "phonenumber is required" });
    if (!location)
      return res.status(400).json({ success: false, message: "location is required" });
    if (!email)
      return res.status(400).json({ success: false, message: "email is required" });
    if (!password)
      return res.status(400).json({ success: false, message: "password is required" });

    const userWithEmail = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userWithEmail)
      return res.status(400).json({ success: false, message: "email is already taken" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        fullName: fullName,
        phoneNumber: phoneNumber,
        location: location,
        email: email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ success: true, data: newUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await prisma.user.findFirst({
      where: { email: email },
    });

    if (newUser) {
      const passwordMatch = await bcrypt.compare(password, newUser.password);

      if (passwordMatch) {
        const payload = {
          id: newUser.id,
          fullname: newUser.fullname,
          email: newUser.email,
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        res.cookie("PT_access_token", token, { httpOnly: true, secure: process.env.NODE_ENV === "production" });
        res.status(200).json({ success: true, data: newUser });
      } else {
        res.status(400).json({ success: false, message: "Incorrect password" });
      }
    } else {
      res.status(400).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getUser = async (req,res) => {
  try{
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  }
  catch(error) {
    console.error('Error fetching users:', error);
    res.status(500).json({message: 'Failed to fetch users'});
  }
};


export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if ID is provided and is a number
    if (!id || isNaN(id)) {
      return res.status(400).json({ success: false, message: "Valid ID is required" });
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id, 10) },
    });

    // If user doesn't exist, return an error
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Delete the user
    await prisma.user.delete({
      where: { id: parseInt(id, 10) },
    });

    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};