console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
try {
    const data = fs.readFileSync("database/user.json", "utf-8");
    user = JSON.parse(data);
    console.log("user.json muvaffaqiyatli o'qildi");
} catch (err) {
    console.log("ERROR: user.json o'qishda xatolik ->", err.message);
    user = {}; 
}

// M0ngoDB connect
// const db = require("./server").db();
// 1 : Kirish Code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 : Session code
// 3 : Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 : Routing code
app.post("/create-item", function (req, res) {
    console.log(req.body);
    res.send("Yangi reja qabul qilindi!");
});

app.get("/author", function (req, res) {
    res.render("author", { user: user });
});

app.get("/", function (req, res) {
    res.render("reja");
});
 
module.exports = app;