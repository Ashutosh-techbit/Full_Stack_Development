const mongoose = require('mongoose');

// Note :- Mongoose do not return a promise but we can use .then() with them

//---------------------------------------------------------------------create connection---------------------------------------------------------------------
main().
then(()=>{
    console.log("connection successful")
})
.catch((err)=>console.log(err))


async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}


//----------------------------------------------------------------------create schema---------------------------------------------------------------------
const userSchema = new mongoose.Schema({
    name:String,
    city:String,
    age:Number,
})

//create collection - in cmd(mongosh) use show collections to get collections
//Model in mongoose is a class with which we construct documents 
const User = mongoose.model("User",userSchema);


//----------------------------------insert data------------------------------------------------------------
// const user1 = new User({
//     name : "ashu",
//     city :"agra",
//     age :32,
// })
// user1.save() //asynchronous api to save data to database

// const user2 = new User({
//     name : "eve",
//     city :"delhi",
//     age :22,
// })
// user2.save()
// .then(res=>console.log(res))
// .catch(err=>console.log(err))


//---------------------------------------------------------------------Insert mulitple data queries---------------------------------------------------------------------
User.insertMany([
    {name:"yash",city:"agra",age:"22"},
    {name:"josh",city:"agra",age:"12"},
    {name:"adam",city:"delhi",age:"54"}
])




// ============================================================================================================================================
//         .find() - returns a query objection not a promise but we can still use .then() with it
// ============================================================================================================================================

User.find({}).then(res=>console.log(res)).catch(err=>console.log(err))