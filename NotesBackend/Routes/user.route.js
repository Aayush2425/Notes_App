import express from "express";
import {
  getNotes,
  addNotes,
  deleteNotes,
  updateNotes,
  addBlock,
} from "../Controllers/user.controller.js";
const router = express.Router();
router.get("/Notes/:id", getNotes);
router.post("/Notes/:id", addNotes);
router.delete("/Notes/:id", deleteNotes);
router.put("/Notes/:id", updateNotes);
router.get("/dashboard/:id", getNotes);
router.post("/dashboard/:id", addBlock);
export default router;
