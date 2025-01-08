import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js"; // Import user routes

dotenv.config();

const PORT = process.env.PORT || 9024;
const MONGO_URI = process.env.MONGO_URI; // Get MongoDB URI from environment variables

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api/v1/users", userRoutes); // Use user routes

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
