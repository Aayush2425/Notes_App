import express from "express";
import { SignIn, SignUp } from "../Controllers/auth.controller.js";
const router = express.Router();

router.post("/SignUp", SignUp);
router.post("/SignIn", SignIn);
export default router;
