require("dotenv").config()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const cookieParser = require("cookie-parser")
const express = require("express")
const app = express()
const db = require("better-sqlite3")("app.db")
db.pragma("journal_mode = WAL")

// db setup, table for users and password

const createTables = db.transaction(() => {
    db.prepare(
        `
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username STRING NOT NULL UNIQUE,
        password STRING NOT NULL)
        `
    ).run()
})

createTables()

//db setup ends here
app.set("View Engine", "ejs")
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(function (req, res, next) {
    res.locals.errors = []
    // try to decode incoming cookie

try{
    const decoded = jwt.verify(req.cookies.ourSimpleApp, process.env.JWTSECRET)
    req.user = decoded
} catch(err) {
    req.user = false
}
res.locals.user = req.user
console.log(req.user)
    next()
})


app.get("/", (req, res) => {
    if(req.user){
        return res.render("dashboard.ejs")
    }
    
    res.render("homepage.ejs")
});

app.get("/login", (req, res) => {
    
    res.render("login.ejs")
})

app.post("/login", (req, res) => {
    let errors = []

    if(typeof req.body.username !== "string") req.body.username = ""

    if(typeof req.body.password !== "string") req.body.password = ""

    if(req.body.username.trim() == "") errors = ["Invalid Username/Password"]
    if(req.body.password == "") errors = ["Invalid Username/Password"]

    if (errors.length) {
        return res.length("login", {errors})

    //compare to see if password matches the one on the db
    const userInQuestionStatement = db.prepare("SELECT * FROM users WHERE USERNAME = ?")
    const userInQuestion = userInQuestionStatement.get(req.body.username)

    if(!userInQuestion) {
        errors = ["Invalid Username/Password"]
        return res.render("login", {errors})
    }

    const matchOrNot = bcrypt.compareSync(req.body.password, userInQuestion.password)
    if (!matchOrNot){
        errors = ["Invalid Username/Password"]
        return res.render("login", {errors})
    }

    //if it's a match, redirect to homepage after giving a cookie
    const ourTokenValue = jwt.sign({exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, random: "...", userid: userInQuestion.id, username: userInQuestion.username}, process.env.JWTSECRET)

    res.cookie("ourSimpleApp", ourTokenValue, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24
    })
    if(req.body.username) {
        res.redirect("/")
    }

    }
    res.send("Thank you.")
})
app.get("/logout", (req, res) => {
    res.clearCookie("ourSimpleApp")
    res.redirect("/")
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

    if(req.body.username && !req.body.username.match( /^[a-zA-Z0-9]+$/)) {
        errors.push("Username should contain letters and numbers")
    }
// so we can ensure username is unique and not a sqlite error shows
    const usernameStatement = db.prepare("SELECT * FROM users WHERE username = ?")
    const usernameCheck = usernameStatement.get(req.body.username)

    if(usernameCheck) errors.at
    
    
    .push("Username has to be Unique")
    
    if(req.body.password && req.body.password.length < 12){
        errors.push("Password cannot be less than 12 characters")
    }

    if(req.body.password && req.body.password.length > 20){
        errors.push("Password cannot be more than 20 characters")
    }

    if (errors.length) {
        return res.render("homepage.ejs", { errors })
    } 

    //save the user into a db

    const encrypt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, encrypt)


    const aPrepareStatement = db.prepare("INSERT INTO users (username, password) VALUES (?, ?)")
    const value = aPrepareStatement.run(req.body.username, req.body.password)

    const whatsTheValue = db.prepare("SELECT * FROM users WHERE ROWID = ?")

    const specificUser = whatsTheValue.get(value.lastInsertRowid)
    // we'll be using sqllite

    // log the user in by giving them a cookie
    const ourTokenValue = jwt.sign({exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, random: "...", userid: specificUser.id, username: specificUser.username}, process.env.JWTSECRET)

    res.cookie("ourSimpleApp", ourTokenValue, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24
    })
    if(req.body.username) {
        res.redirect("/")
    }
})

app.listen(3000);