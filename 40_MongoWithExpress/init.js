//database will be managed  from here

const mongoose = require("mongoose")
const chat = require("./models/chat.js")

main().catch(err=>console.log(err));

async function main(params ) {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}


// let chat1 = new chat({
//     from:"adam",
//     to:"eve",
//     msg:"hello eve !! how r u brother",
//     created_at:new Date(),
// })
// chat1.save().then(res=>console.log(res)).catch(err=>console.log(err)); 



let allChats = [{
    from:"adam",
    to:"eve",
    msg:"hello eve !! how r u brother",
    created_at:new Date(),
},
{
    from:"ash",
    to:"eve",
    msg:"hello eve !! how r u brother",
    created_at:new Date(),
},
{
    from:"yash",
    to:"ram",
    msg:"hello ram !! how r u brother",
    created_at:new Date(),
},
{
    from:"hash",
    to:"dam",
    msg:"hello dam !! how r u brother",
    created_at:new Date(),
},]
chat.insertMany(allChats);