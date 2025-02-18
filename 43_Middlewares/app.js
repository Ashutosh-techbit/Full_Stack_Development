const express= require("express")
const app = express();

//first middleware
app.use((req,res,next)=>{
    console.log("in first middleware")
    next(); //if there is no response in first middleware , then through next() it will reach to next route  

})

//logger - morgon middleware
app.use((req,res,next)=>{
    req.time=new Date(Date.now()).toString();
    console.log(req.hostname , req.path , req.method , req.time)
    next();
})

//authentication middleware
const checktoken = app.use("/api",(req,res)=>{
    let {token} =req.query;
    if(token==="giveaccess"){
        next();
    }
    res.send("ACCESS DENIED!!")
})

app.get("/api",checktoken , (req,res)=>{
    res.send("data")
})

app.get("/",(req,res)=>{
    res.send("I am root")
})

app.use((req,res)=>{
    res.status(404).send("page not found!")
})

app.listen("8080",()=>{
    console.log("server listening at port 8080")
})