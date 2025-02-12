const mongoose = require("mongoose");

main().then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log(err);
})


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon")
}

//Schema Validation
// in this we can add multiple options in declarations 
const bookSchema = mongoose.Schema({
    title:{
       type:String,
       required:true, //must declared
       maxlength:20,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:100,
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"], //enum gives the options which can be used
    }
});

const Book = new mongoose.model("Book",bookSchema);

let book1 = new Book({
    title:"RD sharma",
    author:"rd",
    price:121,
})

book1.save()