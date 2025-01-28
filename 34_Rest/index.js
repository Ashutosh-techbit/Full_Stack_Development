const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');

// express.urlencoded({extended: true}): This middleware parses incoming requests with URL-encoded payloads (e.g., data from HTML forms). The {extended: true} option allows for rich objects and arrays to be encoded into the URL-encoded format using the qs library, while {extended: false} uses the querystring library, which is simpler and less powerful.
app.use(express.urlencoded({extended:true}));


// __dirname => Node.js variable that refers to the directory where the current script is located.
// path.join(__dirname, "views") => combines the current directory with the "views" folder, ensuring that all your EJS template files are stored in the views directory.
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))


// express.static() is used to specify a folder that contains static assets that can be accessed by the client.
// path.join(__dirname, "public") ensures that the public folder is correctly referenced relative to the current script's location.
app.use(express.static(path.join(__dirname,"public")))


//data
let posts = [
    {
        // id:"1a",
        id:uuidv4(),
        username:"Ashu",
        content:"doing hardwork to achieve succes"
    },

    {
        // id:"2b",
        id:uuidv4(),
        username:"Eve",
        content:"Hey Its my 1st post!!"
    },
    {
        id:uuidv4(),
        username:"Adam",
        content:"got selected in Google!!"
    }
]


app.get("/posts",(req,res)=>{
    // res.send("server started successfully");
      res.render("index.ejs",{posts})
})

//get new post from new.ejs
app.get("/posts/new",(req,res)=>{
   
    res.render("new.ejs")
})

//post response and content to /post
app.post("/posts",(req,res)=>{
    let {username,content} = req.body; 
    let id = uuidv4();
    posts.push({id , username,content}); //add new post to posts array and /posts
    console.log(username,content)

    // res.send("post send")
    res.redirect("/posts")//after adding redirect to /posts from /posts/new
});

//adding ids to each post
app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{post})
})

//update existing post
app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params; //get id for update
    let newcontent = req.body.params; //new content 
    let post = posts.find((p)=> id===p.id);
    post.content  = newcontent;
    res.send("update success by patch")
    
})


app.listen(port,() => {
    console.log(`server started at ${port}`)
})
