const express = require("express");
const app = express();
let path = require("path");

let port = 3000;
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));

app.listen(port,()=>{
    console.log("app is listening");
})

app.get("/",(req,res)=>{
    res.send("you are home page");
})