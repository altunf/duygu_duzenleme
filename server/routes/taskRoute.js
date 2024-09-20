import express from "express";
import {
  newTaskController,
  getAllTasksController,
  deleteTaskController,
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/exercises", newTaskController);

router.delete("/tasks", deleteTaskController);

router.get("/tasks", getAllTasksController);

export default router;
