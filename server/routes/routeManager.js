import express from "express";
import authRoutes from "./authRoute.js";
import diaryRoutes from "./diaryRoute.js";

const router = express.Router();

router.use("/", authRoutes);
router.use("/", diaryRoutes);
export default router;
