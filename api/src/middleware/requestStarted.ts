import { Request, Response, NextFunction } from "express"

export function requestStarted(req: Request, res: Response, next: NextFunction) {
    const reqId = res.getHeader("x-request-id")
    console.log(`${new Date().toISOString()} Request Started ${reqId} - ${req.url}`)
    next();
}