const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Hi, from my cool app!")
})

app.listen(3000)