const express = require("express");
const app = express();

const path = require("path");

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))



app.get("/",(req,res)=>{
    res.send("started successfully")
})

app.listen("8080",()=>{
    console.log("server is listening on port 8080")
})