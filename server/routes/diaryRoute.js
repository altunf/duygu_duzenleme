import express from "express";
import {
  newDiaryController,
  getAllDiariesController,
  deleteDiaryController,
  updateDiaryTitleController,
} from "../controllers/diaryController.js";

const router = express.Router();

router.post("/diaries/new", newDiaryController);

router.get("/diaries", getAllDiariesController);
router.delete("/diaries", deleteDiaryController);
router.put("/diaries", updateDiaryTitleController);

export default router;
