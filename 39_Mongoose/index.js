const mongoose = require('mongoose');

// Note :-  Mongoose do not return a promise but we can use .then() with them

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
const user1 = new User({
    name : "ashu",
    city :"agra",
    age :32,
})
user1.save() //asynchronous api to save data to database

const user2 = new User({
    name : "eve",
    city :"delhi",
    age :22,
})
user2.save()
.then(res=>console.log(res))
.catch(err=>console.log(err))


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


User.find({age:{$lt:32}}) //less than
.then(res=>console.log(res))
.catch(err=>console.log(err))


User.findOne({age:{$lt:32}}) //less than and only first one
.then(res=>console.log(res))
.catch(err=>console.log(err))

User.findById("67ab2a5725b0e8a9c2b54dec") // find using id
.then(res=>console.log(res))
.catch(err=>console.log(err))


// ============================================================================================================================================
//                                                       UPDATE
// ============================================================================================================================================

//here the name with ashu is set to age=20
User.updateOne({name:"ashu"},{age:20})
.then(res=>console.log(res))
.catch(err=>console.log(err))

//here first the name with ashu is find and print and then age set to 20
//print old result
User.findOneAndUpdate({name:"ashu"},{age:21})
.then(res=>console.log(res))
.catch(err=>console.log(err))

//to print updated result after updation
//print new result by using new(option) which is by deafult false , if we make it true it will print updated result
User.findOneAndUpdate({name:"ashu"},{age:21},{new:true})
.then(res=>console.log(res))
.catch(err=>console.log(err))

User.findById({name:"ashu"},{age:21},{new:true})
.then(res=>console.log(res))
.catch(err=>console.log(err))


// ============================================================================================================================================
//                                                       UPDATE
// ============================================================================================================================================

User.deleteOne({name:"ashu"}).then(res=>console.log(res))

User.deleteMany({name:""}).then(res=>console.log(res))

User.findByIdAndDelete("67ac4e9a9c4639158ae1c674").then(res=>console.log(res))

User.findOneAndDelete({name:"ashu"}).then(res=>console.log(res))
