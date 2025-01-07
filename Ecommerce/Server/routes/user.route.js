import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Get All users" });
});

router.post("/register", userController.register);
router.post("/login", userController.loginUser);

export default userRoutes;
