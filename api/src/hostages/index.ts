import express from "express"
const bringThemHomeNow = require("bring-them-home-now")
import { z } from "zod";
const hostageNameSchema = z.string().min(0).max(10)



const router = express.Router()

router.get("/all", (req, res, next) => {
    res.json(bringThemHomeNow.data)
})

router.get("/search", (req, res, next) => {
    const hName = req?.query?.hname as string
    try {
        hostageNameSchema.parse(hName)
        const result = bringThemHomeNow.searchByName(hName)
        return res.json(result)
    } catch (error) {
        return res.status(400).send("Hostage name is invalid")
    }


})

router.get("/age", (req, res, next) => {

})

export { router }



