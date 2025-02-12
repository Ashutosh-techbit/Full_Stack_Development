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
        min:[100,"price is low"], //here "price is low" is a custom error which will print if price is less than 100 , if fucntions as array where first element is condition and second element is error 
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

// let book1 = new Book({
//     title:"RD sharma",
//     author:"rd",
//     price:121,
// })
// book1.save()

let book2 = new Book({
    title:"RD sharma",
    author:"rd",
    price:121,
    catrgory:"fiction"
})
book2.save()

Book.findByIdAndUpdate(
    "67ac66471805afa0da9dd003",
    {price:12},
    {runValidators :true}
)
.then(res=>console.log(res))
.catch(err=>console.log(err.errors.price.properties.message)) 

