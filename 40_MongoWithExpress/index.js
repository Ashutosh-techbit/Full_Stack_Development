const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
const path = require("path");
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true})); // to parse the data from html form
app.use(methodOverride('_method'))

main().catch((err) => console.log(err));
async function main(params) {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

// let chat1 = new Chat({
//   from: "adam",
//   to: "eve",
//   msg: "hello eve !! how r u brother",
//   created_at: new Date(),
// });
// chat1
//   .save()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));


app.get("/", (req, res) => {
    res.send("started successfully");
});


//Index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find() //using async await bcz chat.find() is a asynchronous fucntion
    // console.log(chats);
    res.render("index.ejs",{chats});
});


//new chat route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})


//send data from new chat form to server(database)
app.post("/chats",(req,res)=>{
    let {from , msg , to , id} = req.body;
    let newchat = new Chat({
        from:from,
        msg:msg,
        to:to,
        created_at:new Date(),
    })

    newchat.save().then(res=>console.log(res)).catch(err=>console.log(err));
    res.redirect("/chats");
})

//edit request from user
app.get("/chats/:id/edit", async (req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

//save edited data to db
app.put("/chats/:id",async (req,res)=>{
    let {id} = req.params;
    let {msg : newMsg} = req.body;
    console.log(newMsg)
    let updatedchat = await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators :true , new :true},
    )
    res.redirect("/chats")
} )


app.delete("/chats/:id",async (req,res)=>{
     let {id} = req.params;
    let deletedchat =  await Chat.findByIdAndDelete(id);
     console.log(deletedchat)
    res.redirect("/chats")


})

app.listen("8080", () => {
  console.log("server is listening on port 8080");
});
