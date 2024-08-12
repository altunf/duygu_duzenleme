import express from "express";
import authRoutes from "./authRoute.js";
import diaryRoutes from "./diaryRoute.js";
import exerciseRoutes from "./exerciseRoute.js";

const router = express.Router();

router.use("/", authRoutes);
router.use("/", diaryRoutes);
router.use("/", exerciseRoutes);
export default router;
