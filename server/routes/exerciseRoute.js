import express from "express";
import {
  addNewExercise,
  addCompletionDate,
  getAllExercises,
} from "../controllers/exerciseController.js";

const router = express.Router();
router.post("/admin", addNewExercise);
router.post("/", addCompletionDate);
router.get("/exercises/:*", getAllExercises);

export default router;
