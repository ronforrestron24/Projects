import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import userRoutes from "./routes/user.route.js";

dotenv.config();

const PORT = process.env.PORT || 9024;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
