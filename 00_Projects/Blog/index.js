let express = require("express")
let app = express()
let port = 8080;

app.set("view engine","ejs")

app.listen(port,()=>{
    console.log("server started")
    res.send("server start")
})