"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var dotenv_1 = require("dotenv");
var db_1 = require("./config/db");
var product_route_1 = require("./routes/product.route");
dotenv_1.default.config();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 9000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, db_1.default)();
app.use("/api/v1/products", product_route_1.default);
app.use("/", function (req, res) {
    console.log("from express and ts");
});
app.listen(PORT, function () {
    console.log("server is listening at ".concat(PORT));
});
