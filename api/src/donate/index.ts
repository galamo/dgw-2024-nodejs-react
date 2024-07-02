import express from "express"
const bringThemHomeNow = require("bring-them-home-now")

const router = express.Router()

router.get("/all", (req, res, next) => {
    res.json(bringThemHomeNow.data)
})

router.get("/search", (req, res, next) => {
    res.json(bringThemHomeNow.data)
})

router.get("/age", (req, res, next) => {
    res.json(bringThemHomeNow.data)
})

export { router }