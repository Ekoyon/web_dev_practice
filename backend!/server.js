const express = require("express")
const app = express()


app.set("View Engine", "ejs")
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("homepage.ejs")
});

app.get("/login", (req, res) => {
    res.render("login.ejs")
})

app.post("/register", (req, res) => {
    console.log(req.body)
    res.send("Saved! You now have an account")
})

app.listen(3000);