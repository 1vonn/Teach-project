import { Router } from "express";
import { bookService }  from "../controllers/booking.controller.js";
import { getBookings } from "../controllers/booking.controller.js";

const route = Router();

route.post("/book", bookService)
route.get("/", getBookings)

export default route
