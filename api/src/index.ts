import express, { Request, Response } from "express"
import { authenticate } from "./middleware/authenticate"
import { requestStarted } from "./middleware/requestStarted"
import { requestId } from "./middleware/requestId"
const app = express()

app.use(requestId)
app.use(requestStarted)
app.use(authenticate)


app.get("/health-check", (req: Request, res: Response, next) => {
    res.json({ message: "Api is Up", time: new Date().toLocaleString() })
})


// app.get("/long", (req: Request, res: Response, next) => {
//     for (let index = 0; index < 9999999999; index++) {
//     }
//     res.json({ message: "long calc", time: new Date().toLocaleString() })
// })


app.listen(3000, () => {
    console.log("Api is running")
})