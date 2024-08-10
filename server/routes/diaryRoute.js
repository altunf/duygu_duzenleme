import express from "express";
import {
  newDiaryController,
  getAllDiariesOfUser,
} from "../controllers/diaryController.js";

const router = express.Router();

router.post("/diaries/new", newDiaryController);

router.get("/diaries", getAllDiariesOfUser);

export default router;
