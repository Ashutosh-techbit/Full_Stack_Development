const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        max:50,
    },
    created_at:{
        type:Date,
        required:true,
    },
    
});

const Chat = new mongoose.model("Chat",chatSchema);

module.exports = Chat; //to use in external file