import { Request, Response, NextFunction } from "express"

export function authenticate(req: Request, res: Response, next: NextFunction) {
    if (req.query.apiKey !== "access-dgw-2024") {
        console.log(`User is not authenticated, missing api key ${res.getHeader("x-request-id")}`)
        return res.status(401).json({ message: "Check your API key", request: res.getHeader("x-request-id") })
    } else {
        return next()
    }
}

