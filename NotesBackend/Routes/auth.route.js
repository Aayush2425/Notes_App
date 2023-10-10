import express from "express";
import { SignIn, SignUp, google } from "../Controllers/auth.controller.js";
const router = express.Router();

router.post("/SignUps", SignUp);
router.post("/SignIn", SignIn);
router.post("/google", google);
export default router;
