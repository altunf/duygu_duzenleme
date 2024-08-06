import express from "express";
import {
  registerController,
  loginController,
  getAllUsersController,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/users", getAllUsersController);

export default router;
