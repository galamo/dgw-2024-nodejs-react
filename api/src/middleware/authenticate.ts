import { Request, Response, NextFunction } from "express"

export function authenticate(req: Request, res: Response, next: NextFunction) {
    if (req.query.apiKey !== "access-dgw-2024") {
        return res.status(401).json({ message: "Check your API key" })
    } else {
        return next()
    }
}

