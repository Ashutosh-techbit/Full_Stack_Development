const express = require("express");
const app = express();
const port = 8080;

//middleware for post request
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/register',(req,res)=>{
    let {name}  = req.query;
    res.send(`Hello ${name}`)
})

app.post('/register',(req,res)=>{
   console.log(req.body)
   let{name , pass} = req.body;
   
   res.send(`welcome at post response ${name}`);
})

app.listen(port ,()=>{
    console.log(`server started at port${port}`)
})