import express from "express";
// import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
// app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  console.log("from express and ts");
});

app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
