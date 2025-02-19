const express= require("express")
const app = express();
const ExpressError = require("./ExpressError")

const checktoken = app.use("/api",(req,res)=>{
    let {token} =req.query;
    if(token==="giveaccess"){
        next();
    }
    // res.send("ACCESS DENIED!!")
    throw new ExpressError(401,"Access denied")
})

app.get("/err",(req,res)=>{
    abcd=abcd;
})

//custom error handling
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"access to admin is forbidden");
})

//set bydefault status and message , as express set bydefault error status to 500 if status in not between 4xx to 5xx
app.use((err,req,res,next)=>{
    let {status=500 , message = "some error occured"} = err;
    res.status(status).send(message)
})

// app.use((err,req,res,next)=>{
//     console.log("--------------ERROR-----------")
//     next(); //it will transfer execution to next non-error handling middleware

// })

app.use((req,res,next)=>{
    console.log("--------------ERROR-----------")
    res.send(err); 

})

app.use((err,req,res,next)=>{
    console.log("--------------ERROR-----------")
    next(err); //it will transfer execution to next error handling middleware and if it doesnt exists then express default error handler will work
})

// app.use((req,res)=>{
//     res.status(404).send("page not found!")
// })

// app.get("/",(req,res)=>{
//     res.send("I am root")
// })


app.listen("8080",()=>{
    console.log("server listening at port 8080")
})