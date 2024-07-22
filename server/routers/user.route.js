import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { getUser } from "../controllers/user.controller.js";
import { deleteUser } from "../controllers/user.controller.js";

const route = Router();

route.post("/register", createUser)
route.post("/login", loginUser)
route.get("/", getUser)
route.delete("/user/:id", deleteUser)

export default route