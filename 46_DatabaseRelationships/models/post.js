//one to squillion(very large number) relation 

const mongoose = require("mongoose")
const {Schema} = mongoose;

main().then(console.log("connected successfully")).catch(err=>console.log(err));

async function main(params) {
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
    
}

const userSchema = new Schema({
    name :String,
    email:String,
})

const User = mongoose.model("User",userSchema);

const postSchema = new Schema({
    content : String,
    likes : Number,
    user:{
        type: Schema.Types.ObjectId ,
        ref : "User"
    }
})

const Post = mongoose.model("Post",postSchema);

const addData = async ()=>{
     
    let user = await User.findOne({name:"Ashutosh Bansal"});

    // let user1 = new User({
        //     name : "Ashutosh Bansal",
        //     email : "adam@gmail.com",
        // });
        
        let post2 = new Post({
            content : "byebye",
            likes : 27,
        });
        // console.log(post2)
        
        // post1.user = user1;
        post2.user = user;
        
        // await user1.save();
        await post2.save();
        
        
};

// addData();


const getData = async ()=>{
    let result = await Post.findOne({}).populate("user","name")
    console.log(result);
}
getData();