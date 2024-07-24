import { Router } from "express";
import { bookService }  from "../controllers/booking.controller.js";
import { getBookings } from "../controllers/booking.controller.js";
import { getBookingById } from "../controllers/booking.controller.js";

const route = Router();

route.post("/book", bookService)
route.get("/", getBookings)
route.get('/booking/:id', getBookingById);

export default route
