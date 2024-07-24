import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createService = async (req, res) => {
  try {
    const { serviceProvider, price, description, email, profilePicture, fullName, serviceImage } = req.body;

    const validServiceProviders = ["House Cleaning", "Dish Washing Services"];

    if (!fullName)
      return res.status(400).json({ success: false, message: "Full name is required" });
    if (!serviceProvider)
      return res.status(400).json({ success: false, message: "Service provider is required" });
    if (!validServiceProviders.includes(serviceProvider))
      return res.status(400).json({ success: false, message: "Invalid service provider" });
    if (!email)
      return res.status(400).json({ success: false, message: "Email is required" });
    if (!price)
      return res.status(400).json({ success: false, message: "Price is required" });
    if (!profilePicture)
      return res.status(400).json({ success: false, message: "Profile picture is required" });
    if (!description)
      return res.status(400).json({ success: false, message: "Description is required" });
    if (!serviceImage)
      return res.status(400).json({ success: false, message: "Service image is required" });

    const newService = await prisma.service.create({
      data: {
        fullName: fullName,
        price: price,
        serviceImage: serviceImage,
        serviceProvider: serviceProvider,
        description: description,
        profilePicture: profilePicture,
        email: email
      },
    });

    res.status(201).json({ success: true, data: newService });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getService = async (req,res) => {
  try{
    const service = await prisma.service.findMany();
    res.status(200).json(service);
  }
  catch(error) {
    console.error('Error fetching service:', error);
    res.status(500).json({message: 'Failed to fetch services'});
  }
};