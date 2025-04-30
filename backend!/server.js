const express = require("express")
const app = express()


app.set("View Engine", "ejs")

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("homepage.ejs")
});

app.listen(3000);