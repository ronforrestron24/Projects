"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", function (req, res) {
    console.log("from express and ts");
});
app.listen(PORT, function () {
    console.log("server is listening at ".concat(PORT));
});
