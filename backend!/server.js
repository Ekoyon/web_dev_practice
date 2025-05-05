const express = require("express")
const app = express()
const db = require("better-sqlite3")("app_db")
db.pragma("journal_mode = WAL")

app.set("View Engine", "ejs")
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))

app.use(function (req, res, next) {
    res.locals.errors = []
    next()
})

app.get("/", (req, res) => {
    res.render("homepage.ejs")
});

app.get("/login", (req, res) => {
    res.render("login.ejs")
})

app.post("/register", (req, res) => {
    const errors = []


    if(typeof req.body.username !== "string") req.body.username = ""
    if(typeof req.body.password !== "string") req.body.password = ""

    req.body.username = req.body.username.trim()


    if(!req.body.username){
        errors.push("This cannot be blank")
    }
    if(req.body.username && req.body.username.length < 3){
        errors.push("Username cannot be less than 3 characters")
    }

    if(req.body.username && req.body.username.length > 10){
        errors.push("Username cannot be more than 10 characters")
    }

    if(req.body.username && !req.body.username.match( /^[a-zA-Z0-9]/+$ )) {
        errors.push("Username should contain letters and numbers")
    }

    if(req.body.password && req.body.password.length < 12){
        errors.push("Password cannot be less than 12 characters")
    }

    if(req.body.password && req.body.password.length > 20){
        errors.push("Password cannot be more than 20 characters")
    }

    if (errors.length) {
        return res.render("homepage", { errors })
    } 

    //save the user into a db
    // we'll be using sqllite

    // log the user in by giving them a cookie
    if(req.body.username) {
        res.send("Saved! You now have an account")
    }
})

app.listen(3000);