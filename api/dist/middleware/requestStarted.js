"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestStarted = requestStarted;
function requestStarted(req, res, next) {
    console.log(`${new Date().toISOString()} Request Started ${req.url}`);
    next();
}
