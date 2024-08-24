import express from "express";
import {
  addNewExercise,
  addCompletionDate,
  getAllExercises,
  getAllCompExercises,
} from "../controllers/exerciseController.js";

const router = express.Router();
router.post("/admin", addNewExercise);
router.post("/", addCompletionDate);
router.get("/", getAllCompExercises);
router.get("/exercises/:*", getAllExercises);

export default router;
