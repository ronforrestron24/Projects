"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from "cors";
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
//middlewares
// app.use(cors());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    console.log("from express and ts");
});
app.listen(PORT, () => {
    console.log(`server is listening at ${PORT}`);
});
