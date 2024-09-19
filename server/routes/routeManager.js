import express from "express";
import authRoutes from "./authRoute.js";
import diaryRoutes from "./diaryRoute.js";
import exerciseRoutes from "./exerciseRoute.js";
import taskRoutes from "./taskRoute.js";

const router = express.Router();

router.use("/", authRoutes);
router.use("/", diaryRoutes);
router.use("/", exerciseRoutes);
router.use("/", taskRoutes);
export default router;
