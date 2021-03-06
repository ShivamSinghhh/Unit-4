
const express = require(`express`)

const Section = require(`../models/section.model`)

const router = express.Router()


router.get("/", async (req, res) => {
    try {

        const section = await Section.find()
        return res.status(201).send(section)

    } catch (err) {

        return res.status(500).json({ message: e.message, status: "Failed" });

    }
})


router.post("/", async (req, res) => {
    try {

        const section = await Section.create(req.body)
        return res.status(201).send(section)

    } catch (err) {

        return res.status(500).json({ message: e.message, status: "Failed" });

    }
})


router.patch("/:id", async (req, res) => {
    try {

        const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        }).lean().exec();

        return res.status(201).send(section)

    } catch (err) {

        return res.status(500).json({ message: e.message, status: "Failed" });

    }
})


router.delete("/:id", async (req, res) => {
    try {
        const section = await Section.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(201).send(section)

    } catch (err) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
})


module.exports = router