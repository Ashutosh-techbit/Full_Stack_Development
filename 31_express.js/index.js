const express = require("express")
const app  = express()

console.dir(app)

// let port = 3000;
let port = 8080;

//This method starts a server and listens for incoming connections on a specified port.
app.listen(port,()=>{
    console.log(`app is listening ${port}`)
})

// ===============app.use============

//this method is used to apply middleware functions to the Express app. Middleware is a function that handles requests before they reach a route handler or sends responses to the client. use() can apply middleware globally or to specific routes.
app.use((req,res)=>{
    console.log("request accepted");
    res.send("this is basic response") //used to send response which will show to client , it can be text , html , object etc.
})


//===================== Routing ===========

//============== "/" is the root path===========
app.get('/',(req,res)=>{
    res.send("this is root path")
})

app.get('/home',(req,res)=>{
    res.send("this is home path")
})

app.get('/About',(req,res)=>{
    res.send("this is about path")
})

//======* is used for any other path that dont exists======
app.get('*',(req,res)=>{
    res.send("this is bydefault path")
})

// ================= PATH PARAMETER===============
//In Node.js and Express, "req.params" refers to the route parameters in an HTTP request. Route parameters are used to capture specific values from the URL path, allowing dynamic routes. These values are passed as key-value pairs and can be accessed through the req.params object.

//localhost:8080/ashutosh/19

app.get("/:username/:id",(req,res)=>{
     let {username , id} = req.params;
    res.send(`welcome to the @${username} with your id= @${id}`)
})


//=========== Query String==========
//localhost:8080/search?q=apple

app.get("/search",(req,res)=>{
    console.log(req.query)

    //req.query takes query string written after ? mark
    let {q}= req.query;
    console.log(q)
    res.send(`search result : ${q}`)


})