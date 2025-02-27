import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import productRoutes from "./routes/product.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/v1/products", productRoutes);

app.use("/", (req, res) => {
  console.log("from express and ts");
});

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
