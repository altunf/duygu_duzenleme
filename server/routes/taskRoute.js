import express from "express";
import {
  newTaskController,
  getAllTasksController,
  deleteTaskController,
} from "../controllers/taskController.js";

const router = express.Router();

router.delete("/tasks", deleteTaskController);
router.get("/tasks", getAllTasksController);
router.post("/exercises/:*", newTaskController);

export default router;
