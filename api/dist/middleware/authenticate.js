"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = authenticate;
function authenticate(req, res, next) {
    if (req.query.apiKey !== "access-dgw-2024") {
        return res.status(401).json({ message: "Check your API key" });
    }
    else {
        return next();
    }
}
