import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import connectDB from "./config/db.js";
// import productRoutes from "./routes/product.route.js";
import orderRoutes from "./routes/order.route.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/products", productRoutes);
app.use("/api/v1/orders", orderRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
