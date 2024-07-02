"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const bringThemHomeNow = require("bring-them-home-now");
const zod_1 = require("zod");
const hostageNameSchema = zod_1.z.string().min(0).max(10);
const router = express_1.default.Router();
exports.router = router;
router.get("/all", (req, res, next) => {
    res.json(bringThemHomeNow.data);
});
router.get("/search", (req, res, next) => {
    var _a;
    const hName = (_a = req === null || req === void 0 ? void 0 : req.query) === null || _a === void 0 ? void 0 : _a.hname;
    try {
        hostageNameSchema.parse(hName);
        const result = bringThemHomeNow.searchByName(hName);
        return res.json(result);
    }
    catch (error) {
        return res.status(400).send("Hostage name is invalid");
    }
});
router.get("/age", (req, res, next) => {
});
