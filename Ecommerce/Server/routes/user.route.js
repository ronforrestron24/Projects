import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", () => {
  console.log("user route");
});
router.post("/register", userController.register);
router.post("/login", userController.loginUser);

export default router;
