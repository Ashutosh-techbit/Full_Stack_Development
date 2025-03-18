const express = require("express")
const app = express();
const users = require("./routes/users")
const posts = require("./routes/posts")
const cookieparser = require("cookie-parser")

app.use(cookieparser());

app.get("/getcookies",(req,res)=>{
    res.cookie("name","ashu");
    res.cookie("age","19");
    res.send("Check your baked cookies :)");
})

app.get("/",(req,res)=>{
    console.log(req.cookies);
    res.send("Hi i am root");
})

app.get("/greet",(req,res)=>{
    let {name = "anonymous"} = req.cookies;
    res.send(`hi ${name}`)
})

app.use("/users",users);
app.use("/posts",posts);

app.listen(3030,()=>{
    console.log("server started at 3030");
})