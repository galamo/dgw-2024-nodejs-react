import { Request, Response, NextFunction } from "express"

export function requestStarted(req: Request, res: Response, next: NextFunction) {
    console.log(`${new Date().toISOString()} Request Started ${req.url}`)
    next();
}