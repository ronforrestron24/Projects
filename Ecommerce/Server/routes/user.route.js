import express from "express";
import userController from "../controllers/user.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

// Public routes
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

// Protected routes
router.get("/profile", auth, userController.getUserById);
router.get("/users", auth, userController.getAllUsers);
router.put("/users/:id", auth, userController.updateUser);
router.delete("/users/:id", auth, userController.deleteUser);

export default router;
