import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/", (req, res) => {
  console.log("from express and ts");
});

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
