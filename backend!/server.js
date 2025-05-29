require("dotenv").config()
const jwt = require("jsonwebtoken")
const sanitizeHTML = require("sanitize-html")
const bcrypt = require("bcrypt")
const marked = require("marked")
const cookieParser = require("cookie-parser")
const express = require("express")
// const { redirect } = require("react-router-dom")
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

    db.prepare(
        `
        CREATE TABLE IF NOT EXISTS posts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        createdDate TEXT,
        title STRING NOT NULL,
        body TEXT NOT NULL,
        authorid INTEGER,
        FOREIGN KEY (authorid) REFERENCES users (id)
        )
        `).run()
})

createTables()

//db setup ends here
app.set("View Engine", "ejs")
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"))
app.use(cookieParser())

app.use(function (req, res, next) {
    //make our markdown function available
    res.locals.allowMarkdown = function(content){
        return sanitizeHTML(marked.parse(content), {
            allowedTags: ["p", "br", "ul", "li", "ol", "strong", "bold", "i", "em", "h1", "h2", "h3", "h4", "h5", "h6", "h7"],
            aalowedAttributes: {}
        })
    }
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
        const postsViewStatement = db.prepare("SELECT * FROM posts WHERE authorid = ? ORDER BY createdDate DESC")
        const posts = postsViewStatement.all(req.user.userid) 
        // .all is similar to .get but returns more results, an array instead of just objects
        return res.render("dashboard.ejs", {posts})
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
    }
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

    if(usernameCheck) errors.push("Username has to be Unique")
    
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
//creating a middleware: basically a reusable function to verify if a user is logged in before they can create a post
function mustBeLoggedIn(req, res, next) {
    if (req.user) {
        return next()
    }
    return res.redirect("/")
}
app.get("/create-post", mustBeLoggedIn, (req, res) =>{
    res.render("create-post.ejs")
})

function sharedPostValidation(req) {
    const errors = []
    if(typeof req.body.title !== "string") req.body.title = ""
    if(typeof req.body.body !== "string") req.body.body = ""

    // to trim or sanitize out html
    req.body.title = sanitizeHTML(req.body.title.trim(), {allowedTags: [], allowedAttributes: {}})
    req.body.body = sanitizeHTML(req.body.body.trim(), {allowedTags: [], allowedAttributes: {}})

    // make sure they ain't empty
    if(!req.body.title) errors.push("You must provide a title")
    if(!req.body.body) errors.push("You must provide a content in this field.")

    return errors
}

app.get("/post/:id", (req, res) =>{
    const dashboardStatement = db.prepare("SELECT posts.*, users.username FROM posts INNER JOIN users ON posts.authorid = users.id WHERE posts.id = ?")
    const post = dashboardStatement.get(req.params.id)

    if(!post) {
        return res.redirect("/")
    }

    // let's know if this is the author so then we can display the buttons
    const isAuthor = post.authorid === req.user.userid

    res.render("single-post.ejs", { post, isAuthor })
})

app.get("/edit-post/:id", mustBeLoggedIn, (req, res) => {
    // let's find the post first
    const editStatement = db.prepare("SELECT * FROM posts WHERE id =?")
    const post = editStatement.get(req.params.id)

    // let's also check to see if post even exists
    if(!post) {
        return res.redirect("/")
    }
    // if not author, redirect to homepage
    if(post.authorid !== req.user.userid){
        return res.redirect("/")
    }
    
    // or not, then render the edit post page
    res.render("edit-post.ejs", { post })
})
app.post("/edit-post/:id", mustBeLoggedIn, (req, res) => {
    // let's find the post first
    const editStatement = db.prepare("SELECT * FROM posts WHERE id =?")
    const post = editStatement.get(req.params.id)

    // let's also check to see if post even exists
    if(!post) {
        return res.redirect("/")
    }
    // if not author, redirect to homepage
    if(post.authorid !== req.user.userid){
        return res.redirect("/")
    }

    const errors = sharedPostValidation(req)

    if (errors.length) {
        return res.render("edit-post.ejs", {errors})
    }

    const updateStatement = db.prepare("UPDATE posts SET title = ?, body = ? WHERE id = ?")
    updateStatement.run(req.body.title, req.body.body, req.params.id)

    res.redirect(`/post/${req.params.id}`)
})
app.post("/delete-post/:id", mustBeLoggedIn, (req, res) => {
    // let's find the post first
    const editStatement = db.prepare("SELECT * FROM posts WHERE id =?")
    const post = editStatement.get(req.params.id)

    // let's also check to see if post even exists
    if(!post) {
        return res.redirect("/")
    }
    // if not author, redirect to homepage
    if(post.authorid !== req.user.userid){
        return res.redirect("/")
    }

    const deleteStatement = db.prepare("DELETE FROM posts WHERE id = ?")
    deleteStatement.run(req.params.id)

    res.redirect("/")
})
app.post("/create-post", mustBeLoggedIn, (req, res) =>{
    //check for validation errors and clean up post
    const errors = sharedPostValidation(req)

    if(errors.length) {
        return res.render("create-post.ejs", {errors})
    }

    //if no errors, save to db
    const dbStatement = db.prepare("INSERT INTO posts (title, body, authorid, createdDate) VALUES (?, ?, ?, ?)")
    const result = dbStatement.run(req.body.title, req.body.body, req.user.userid, new Date().toISOString())


    const getPost = db.prepare("SELECT * FROM posts WHERE ROWID = ?")
    const actualPost = getPost.get(result.lastInsertRowid)

    res.redirect(`/post/${actualPost.id}`)
    
})

app.listen(3000);