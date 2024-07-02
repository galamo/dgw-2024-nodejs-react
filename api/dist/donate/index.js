"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const bringThemHomeNow = require("bring-them-home-now");
const router = express_1.default.Router();
exports.router = router;
router.get("/all", (req, res, next) => {
    res.json(bringThemHomeNow.data);
});
router.get("/search", (req, res, next) => {
    res.json(bringThemHomeNow.data);
});
router.get("/age", (req, res, next) => {
    res.json(bringThemHomeNow.data);
});
