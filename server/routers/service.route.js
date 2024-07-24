import { Router } from "express";
import { createService } from "../controllers/service.controller.js";
import { getService } from "../controllers/service.controller.js";
const route = Router();

route.post("/create", createService)
route.get("/",getService)


export default route