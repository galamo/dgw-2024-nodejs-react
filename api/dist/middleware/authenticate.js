"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
function authenticate(req, res, next) {
    if (req.query.apiKey !== "access-dgw-2024") {
        console.log(`User is not authenticated, missing api key ${res.getHeader("x-request-id")}`);
        return res.status(401).json({ message: "Check your API key", request: res.getHeader("x-request-id") });
    }
    else {
        return next();
    }
}
