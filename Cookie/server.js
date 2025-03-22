const express = require("express")
const app = express();
const users = require("./routes/users")
const posts = require("./routes/posts")
const cookieparser = require("cookie-parser")
const session  = require("express-session")

// ================ Session =============================

app.use(session({secret:"mysupersecretstring",resave:false , saveUninitialized:true}));

app.get("/test",(req,res)=>{
    res.send("test done!!")
})

//req.session.count take count of number of requests - ye count same browser pr tab open krne se count add honge naaki 1 se start honge 
// this stores in temproary memnory
app.get("/response",(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }else{
        req.session.count=1;
    }
    res.send(`you send ${req.session.count} requests`);
})


// ==========COOKIES=====================

// app.use(cookieparser("secret"));

// app.get("/getsignedcookies",(req,res)=>{
//     res.cookie("color","red",{signed:true});
//     res.send("signed cookie sent")
// })

// app.get("/verify",(req,res)=>{
//     console.log(req.signedCookies);
//     res.send("verified");
// })

// app.get("/getcookies",(req,res)=>{
//     res.cookie("name","ashu");
//     res.cookie("age","19");
//     res.send("Check your baked cookies :)");
// })

// app.get("/",(req,res)=>{
//     console.log(req.cookies);
//     res.send("Hi i am root");
// })



// app.get("/greet",(req,res)=>{
//     let {name = "anonymous"} = req.cookies;
//     res.send(`hi ${name}`)
// })

// app.use("/users",users);
// app.use("/posts",posts);

app.listen(3030,()=>{
    console.log("server started at 3030");
})