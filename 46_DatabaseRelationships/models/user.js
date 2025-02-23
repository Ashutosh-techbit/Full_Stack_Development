const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(()=>console.log("connected successfully")).catch(err=>console.log(err))

async function main(params) {
      await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")    
}

//one to only few

const userSchema = new Schema({
    username: String,
    address : [
        {
            location : String,
            city : String,
        }
    ]

});

const User = mongoose.model("User",userSchema);
const addUsers = async()=>{
    let user1 = new User({ 
        username : "Elon",
         address:[
            {_id : false ,location : "US",city:"vegas"}
            
        ],

    });
        user1.address.push({location:"india",city:"bihar"});
        let result = await user1.save();
        console.log(result)
}

addUsers();
