
import { Request, Response, NextFunction } from "express"
export function requestId(req: Request, res: Response, next: NextFunction) {
    res.setHeader("x-request-id", uuidv4())
    next();
}

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
        (+c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> +c / 4).toString(16)
    );
}