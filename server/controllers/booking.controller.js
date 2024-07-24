import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const bookService = async (req, res) => {
    try {
        const { email, phoneNumber, serviceProvider, location } = req.body;

        if (!email || !phoneNumber || !serviceProvider || !location) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new booking using Prisma
        const newBooking = await prisma.booking.create({
            data: {
                email,
                phoneNumber,
                serviceProvider,
                location,
            },
        });

        res.status(201).json({
            success: true,
            message: 'Service booked successfully',
            booking: newBooking,
        });
    } catch (error) {
        console.error('Error booking service:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while booking the service',
        });
    }
};
export const getBookings = async (req, res) => {
    try {
      const bookings = await prisma.booking.findMany(); // Fetch all bookings
      res.status(200).json(bookings); // Send bookings in response
    } catch (error) {
      console.error('Error fetching bookings:', error); // Log error for debugging
      res.status(500).json({ message: 'Failed to fetch bookings' }); // Send error response
    }
  };




  export const getBookingById = async (req, res) => {
    try {
        const { id } = req.params; // Get booking ID from route parameters

        if (!id) {
            return res.status(400).json({ message: 'Booking ID is required' });
        }

        // Fetch the booking by ID using Prisma
        const booking = await prisma.booking.findFirst({
            where: { id: parseInt(id, 10) }, // Convert ID to integer
        });

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        res.status(200).json(booking); // Send booking in response
    } catch (error) {
        console.error('Error fetching booking by ID:', error); 
        res.status(500).json({ message: 'Failed to fetch booking' }); 
    }
};