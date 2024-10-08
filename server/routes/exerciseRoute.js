import express from "express";
import {
  addNewExercise,
  addCompletionDate,
  getAllExercises,
  getAllCompletedExercises,
} from "../controllers/exerciseController.js";

const router = express.Router();

router.post("/admin", addNewExercise);
router.post("/tasks", addCompletionDate);

router.get("/tasks/completed", getAllCompletedExercises);
router.get("/exercises/:*", getAllExercises);

export default router;
