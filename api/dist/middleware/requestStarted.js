"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestStarted = requestStarted;
function requestStarted(req, res, next) {
    const reqId = res.getHeader("x-request-id");
    console.log(`${new Date().toISOString()} Request Started ${reqId} - ${req.url}`);
    next();
}
