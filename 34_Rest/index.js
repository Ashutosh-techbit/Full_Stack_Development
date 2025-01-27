const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// express.urlencoded({extended: true}): This middleware parses incoming requests with URL-encoded payloads (e.g., data from HTML forms). The {extended: true} option allows for rich objects and arrays to be encoded into the URL-encoded format using the qs library, while {extended: false} uses the querystring library, which is simpler and less powerful.
app.use(express.urlencoded({extended:true}));


// __dirname => Node.js variable that refers to the directory where the current script is located.
// path.join(__dirname, "views") => combines the current directory with the "views" folder, ensuring that all your EJS template files are stored in the views directory.
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))


// express.static() is used to specify a folder that contains static assets that can be accessed by the client.
// path.join(__dirname, "public") ensures that the public folder is correctly referenced relative to the current script's location.
app.set(express.static(path.join(__dirname,"public")))

app.get("/",(req,res)=>{
    res.send("server started successfully");
})

app.listen(port,() => {
    console.log(`server started at ${port}`)
})
