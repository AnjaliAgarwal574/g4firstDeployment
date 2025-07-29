const express = require("express");
const app = express();
const path = require("path");

const ejs = require("ejs");

app.set("view engine", "ejs");

app.use(express.static("public"));
app.set("views",path.join(__dirname,"views"));

app.get("/", (req,res)=>{
    res.render("home");
})

modules.exports = app;