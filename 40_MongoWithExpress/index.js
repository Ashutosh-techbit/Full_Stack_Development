const express = require("express");
const app = express();
const mongoose = require("mongoose")
const path = require("path");

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

main().catch(err=>console.log(err));

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}


app.get("/",(req,res)=>{
    res.send("started successfully")
})

app.listen("8080",()=>{
    console.log("server is listening on port 8080")
})