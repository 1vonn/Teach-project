import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoute from './routers/user.route.js';
import bookRoute from './routers/booking.route.js';
import authRoute from './routers/auth.route.js';
import serviceRoute from './routers/service.route.js';

config();
const app = express();

app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"], 
    credentials: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());



app.use("/api/user", userRoute);
app.use("/api/orders", bookRoute);
app.use("/api/admin", authRoute);
app.use("/api/service", serviceRoute);



app.listen(3005, (req,res) => {
    console.log("server is running on port 3005...");
});

