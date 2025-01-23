const express = require("express")
const app = express()

//if we didnt write this we have to start server in ejs directory
//if we want to start server in external directory(Backend) , we have to set path of views like this 

const path = require("path"); // path is  package
app.set("views",path.join(__dirname,"/views"));


const port = 3000

app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
//set view(template) engine to ejs
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs"); //not using res.send bcz if we use that we have to write whole html code in res.send("html code here")
});

app.get("/hello",(req,res)=>{
   res.send("hello")
});

//passing data in ejs
app.get("/rolldice",(req,res)=>{
    let dicevalue = (Math.floor(Math.random()*6)+1);
   res.render("rolldice.ejs",{dicevalue});
});


// app.get("/Instagram/:username",(req,res)=>{
//     let {username} = req.params;
//     let followers = ["ashu","harsh","ram"]
//    res.render("Instagram.ejs",{username , followers});
// });


//using real database data.json
app.get("/Instagram/:user",(req,res)=>{
    const instadata = require("./data.json")
    let {user}= req.params;
    const data = instadata[user]
console.log(data)
res.render("Instagram.ejs",{data})
})


app.listen(port,()=>{
    console.log(`this is at port ${port}`)
})