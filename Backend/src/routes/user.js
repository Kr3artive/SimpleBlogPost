import { Router } from "express";
import { addUser } from "../controllers/user.js";


const router = Router();

router.post("/addUser", addUser);
// router.get("/allUsers", allUsers)
// router.get("/allUsers/:id", userId)

export default router;
