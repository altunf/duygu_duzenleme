import express from "express";
import {
  addNewExercise,
  addCompletionDate,
} from "../controllers/exerciseController.js";

const router = express.Router();
router.post("/admin", addNewExercise);

export default router;
