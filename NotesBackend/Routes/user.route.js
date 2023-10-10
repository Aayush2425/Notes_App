import express from "express";
import {
  getNotes,
  addNotes,
  deleteNotes,
  updateNotes,
} from "../Controllers/user.controller.js";
const router = express.Router();
// router.get("/Notes/:id", getNotes);
router.post("/Notes/:id", addNotes);
router.delete("/Notes/:id", deleteNotes);
router.put("/Notes/:id", updateNotes);
export default router;
