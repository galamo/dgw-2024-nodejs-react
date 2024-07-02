"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticate_1 = require("./middleware/authenticate");
const requestStarted_1 = require("./middleware/requestStarted");
const app = (0, express_1.default)();
app.use(requestStarted_1.requestStarted);
app.use(authenticate_1.authenticate);
app.get("/health-check", (req, res, next) => {
    res.json({ message: "Api is Up", time: new Date().toLocaleString() });
});
// app.get("/long", (req: Request, res: Response, next) => {
//     for (let index = 0; index < 9999999999; index++) {
//     }
//     res.json({ message: "long calc", time: new Date().toLocaleString() })
// })
app.listen(3000, () => {
    console.log("Api is running");
});
