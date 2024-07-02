import express, { NextFunction, Request, Response } from "express"
import { authenticate } from "./middleware/authenticate"
import { requestStarted } from "./middleware/requestStarted"
import { requestId } from "./middleware/requestId"
import { router } from "./hostages/"
import cors from "cors"
const app = express()

app.use(cors())
app.use(requestId)
app.use(requestStarted)
app.use(authenticate)


app.get("/health-check", (req: Request, res: Response, next) => {
    res.json({ message: "Api is Up", time: new Date().toLocaleString() })
})

app.use("/hostages", router)
app.use("/donate", router)


// app.get("/long", (req: Request, res: Response, next) => {
//     for (let index = 0; index < 9999999999; index++) {
//     }
//     res.json({ message: "long calc", time: new Date().toLocaleString() })
// })

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    res.status(500).send("Something went wrong")
})

app.listen(3000, () => {
    console.log("Api is running")
})