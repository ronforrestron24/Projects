import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import connectDB from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/users", userRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
