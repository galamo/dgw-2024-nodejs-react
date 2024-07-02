import express from "express"
const bringThemHomeNow = require("bring-them-home-now")

const router = express.Router()

router.get("/all", (req, res, next) => {
    res.json(bringThemHomeNow.data)
})

router.get("/search", (req, res, next) => {
    const hName = req?.query?.hname as string
    if (hName?.length > 2 && hName?.length < 10) {
        const result = bringThemHomeNow.searchByName(hName)
        return res.json(result)
    } else {
        return res.status(400).send("Hostage name is invalid")
    }

})

router.get("/age", (req, res, next) => {
    res.json(bringThemHomeNow.data)
})

export { router }